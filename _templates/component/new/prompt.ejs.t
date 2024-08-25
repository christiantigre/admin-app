module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Component name:',
        },
      ])
      .then((answers) => {
        const { name } = answers;
        const pascalCaseName = name.charAt(0).toUpperCase() + name.slice(1);
        const camelCaseName = name.charAt(0).toLowerCase() + name.slice(1);
        console.log({ name, pascalCaseName, camelCaseName }); // <-- Añade esto
        return {
          name,
          pascalCaseName,
          camelCaseName,
        };
      });
  },
};
