const inquirer = require('inquirer');

/*inquirer
  .prompt([ //arreglo de objetos
    {
        type: 'input',
        name: 'nombre',
        message: 'Introduce Nombre'
    }
  ])
  .then((answers) => {
    console.log('El nombre es: ${ answers.nombre}')
  })
  .catch((error) => {
    console.log(error)
});
*/

/*const convertirMayusculas = ( cadena = '') => {
  return cadena.toUpperCase();
}
inquirer
  .prompt([
    {
      type: 'input',
      name: 'cadena',
      message: 'Ingresa la cadena',
    }
  ])
  .then( (answers) => {
    let textoConvertido = convertirMayusculas(answers.cadena)
    console.log(textoConvertido)
  })
  .catch ((error) => {
    console.log(error);
  })
*/



//FUNCIONES ASINCRONAS EJEMPLO CON TO UPPER CASE
    const convertirMayusculas = ( cadena = '') => {
      return cadena.toUpperCase();
    }
    //asincronia permite utilizar promises
    const convertidorAsyncrona = async () => {
      try{
        const {cadena} = await inquirer.prompt([
          {
            type: 'input',
            name: 'cadena',
            message: 'Ingresa la cadena'
          }
        ]);

        let cadenaConvertida = convertirMayusculas(cadena);
        return cadenaConvertida

      }catch( error ){
        console.log(error);
      }
    }

    const main = async () => {
    let value = await convertidorAsyncrona();
    console.log(value);
    }
    main();