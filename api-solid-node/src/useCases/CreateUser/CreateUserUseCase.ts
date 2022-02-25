import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";

export class CreateUserUseCase{

    private usersRepository: IUserRepository;
    private mailProvider: IMailProvider;

    constructor(usersRepository: IUserRepositorysitory, mailProvider: IMailProvider) {
    }
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
    }

    async execute(data: ICreateUserRequestDTO) {
        
        const userAlreadyExist = await this.usersRepository.findByEmail();

        if(userAlreadyExist){
            throw new Error('User already exist');
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Equipe do Meu APP',
                email: 'equipe@meuapp.com'
            },
            subject: 'Seja bem-vindo à plataforma',
            body: '<p>Você já pode fazer login em nossa página.</p>'
        });      

    }

}