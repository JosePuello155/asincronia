// Define una función para filtrar elementos
const filtrar = x => x.name === "asincronia";

// Leer el archivo 
fetch('usuario.json')
  .then(Promise => {
    // Verifica si se logro hacer la conexion
    if (!Promise.ok) {
      // Si no la que apararezca un error
      throw new Error('Error al obtener los datos del usuario');
    }
    // Retorna la respuesta y devuelve una promesa
    return Promise.json();
  })
  .then(user => {
    // Realiza una consulta para que obtenga los repositorios 
    return fetch(`https://api.github.com/users/${user.name}/repos`);
    
  })
  .then(respuestGithub => {
    // Verifica si se logro 
    if (!respuestGithub.ok) {
      // si no aparece un error
      throw new Error('Error al obtener los datos del usuario en GitHub');
    }
    // obtiene los datos del archivo JSON y retorna una promesa
    return respuestGithub.json();
  })
  .then(usuariogithub => {
    // itera sobre los repositorios de GitHub del usuario
    let promises = usuariogithub.map(element => {
      // si el nombre del repositorio es asincronia que lo  muestra en la consola
      if (element.name === "asincronia") {
        console.log(element);
      }
      // retorna la promesa
      return Promise.resolve(element);
    });

    // retrona todas las promesas
    return Promise.all(promises);
  })
  .then(data => {
    //muostrar la consola
    console.log(data);
    console.log(usuariogithub);
  })
  .catch(error => {
    // o lance un err
    console.error('Error:', error);
  });







