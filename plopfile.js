module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'application component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name'
        }],
        actions: [
            {
                type: 'add',
                path: 'components/{{dashCase name}}/{{pascalCase name}}.js',
                templateFile: 'plop-templates/component.hbs',
            },
            {
                type: 'add',
                path: 'components/{{dashCase name}}/ds-styles.module.css',
                templateFile: 'plop-templates/styles.hbs',
            }
        ]
    });
};
