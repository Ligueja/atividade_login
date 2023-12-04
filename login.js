const idUsuario = "ab33a6f0-8724-49df-acfa-22602e22e40d";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  // headers: {'X-Custom-Header': 'foobar'}
});

const formulario = document.getElementById("form");

function logar(event) {
  event.preventDefault();
  const email = event.srcElement.email.value;
  const senha = event.srcElement.senha.value;

  instance
    .post(`/usuarios/login`, {
      email,
      senha,
    })
    // a função then é executada logo após o final da requisição
    .then(function (response) {
      console.log(response);

      localStorage.setItem('idUsuario', response.data.id);

      alert("Usuário logado com sucesso!");
    })
    //   a função catch é executada casa ocorra qualquer tipo de erro na requisição
    .catch(function (error) {
      console.log(error);
    });
}


