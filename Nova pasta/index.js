''
const moduleSpecifier = '* as myModule from '/modules/projeto.js';';
  import(moduleSpecifier).then((module) => {module.default();}
      // → logs 'Hi from the default export!'
   );