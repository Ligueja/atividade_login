const idUsuario = "ab33a6f0-8724-49df-acfa-22602e22e40d";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    // headers: {'X-Custom-Header': 'foobar'}
  });

  function cadastrar(event) {
    event.preventDefault();
    const titulo = event.srcElement.titulo.value;
    const descricao = event.srcElement.descricao.value;
  
    instance.post(`/usuarios/${idUsuario}/recados`, {
        titulo,
        descricao,
      })
      // a função then é executada logo após o final da requisição
      .then(function (response) {
        console.log(response);
      })
      //   a função catch é executada casa ocorra qualquer tipo de erro na requisição
      .catch(function (error) {
        console.log(error);
      });
  }
