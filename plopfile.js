module.exports = function (plop) {
  plop.setGenerator('problem', {
    description: 'Create new Project Euler problem solution',
    prompts: [
      {
        type: 'input',
        name: 'number',
        message: 'Problem number: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/problems/problem-{{number}}.ts',
        templateFile: 'src/templates/problem.ts.hbs',
      },
    ],
  });
};
