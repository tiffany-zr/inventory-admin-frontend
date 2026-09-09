export default function (plop) {
  plop.setGenerator("page", {
    description: "Create a new page",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page name:",
      },
    ],

    actions: [
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/page/Page.tsx.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.css",
        templateFile: "plop-templates/page/Page.css.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "plop-templates/page/Page.test.tsx.hbs",
      },
    ],
  });
}
