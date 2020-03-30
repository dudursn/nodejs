// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casadocodigo$1.0.0/src/app/views/livros/list/list.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"></head><body>");

  component_globals_tag({}, out);

  out.w("<h1> Listagem de Livros </h1><form action=\"/livros/pesquisar\" method=\"post\"><input type=\"text\" id=\"titulo\" name=\"titulo\" placeholder=\"coloque o titulo\" value=\"\"><input type=\"submit\" value=\"Pesquisar\"><button onclick=\"livroController.voltar('/livros')\">Limpar</button></form><table><thead><th>Id</th><th>Título</th><th>Preço</th><th>Editar</th><th>Remover</th> </thead><tbody>");

  var for__17 = 0;

  marko_forEach(data.livros, function(livro) {
    var keyscope__18 = "[" + ((for__17++) + "]");

    out.w("<tr id=\"livro_" +
      marko_escapeXmlAttr(livro.id) +
      "\"><td>" +
      marko_escapeXml(livro.id) +
      "</td><td>" +
      marko_escapeXml(livro.titulo) +
      "</td><td>" +
      marko_escapeXml(livro.preco) +
      "</td><td><a href=\"/livros/form/" +
      marko_escapeXmlAttr(livro.id) +
      "\">Editar</a></td> <td><a href=\"#\" onclick=\"livroController.remove(`" +
      marko_escapeXmlAttr(livro.id) +
      "`)\" data-ref=\"" +
      marko_escapeXmlAttr(livro.id) +
      "\" data-type=\"remocao\">Remover</a></td> </tr>");
  });

  out.w("</tbody></table><a href=\"/livros/form\"><button>Cadastrar</button></a><script src=\"/js/controller/LivroController.js\"></script> <script>\r\n\t  \t\t\r\n\t  \t\tlet livroController = new LivroController();\r\n\t  \t</script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "31");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/casadocodigo$1.0.0/src/app/views/livros/list/list.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
