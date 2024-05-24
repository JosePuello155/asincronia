// Estamos definiendo una funcion que se llamo filtrar que tiene un parametro x, y se busca que x sea evaluación 
const filtrar = x => x.name === "asincronia";

//define una funcion asincrona
(async () => {

  //Leer archivo json 
  let response = await fetch('usuario.json');

  //lee el contenido del archivo json y lo guarda en la variable user
  let user = await response.json();
  
  //consultar usuario github
  let respuestGithub = await fetch(`https://api.github.com/users/${user.name}/repos`);
  
  //lee la respuesta y lo guarda en la variable respuestGuthub

  let usuariogithub = await respuestGithub.json();
  
  //repetir sobre cada elemento del array
  usuariogithub.forEach(element => {

    // esta haciendo una condicional que es que si el elemento se llama evaluacion que lo imprima en la consola
    if (element.name === "asincronia")
    {
      console.log(element)
    }
    //
  });
  //filtra los elementos utilizando la funcion de filtrar que definimos y el filter.
  let data = usuariogithub.filter(filtrar)
  //imprime los elementos que se filtraron
  console.log(data)
  //imprime en la consola todo el array 
  console.log(usuariogithub)
})();


