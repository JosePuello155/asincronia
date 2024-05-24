const fs = require('fs');

function leerArchivo() {
  return new Promise((resolve, reject) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data).users); 
      }
    });
  });
}

leerArchivo()
  .then(usuarios => {
    const aprendices = usuarios.filter(usuario => usuario.aprendiz);
    console.table(aprendices.map(({ name, user }) => ({ name, user})), ['name', 'user']);
  })
  .catch(error => {
    console.error('Error al leer el archivo:', error);
  });



