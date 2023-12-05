const idUsuario = "ab33a6f0-8724-49df-acfa-22602e22e40d";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  // headers: {'X-Custom-Header': 'foobar'}
});

const formulario = document.getElementById("form");

async function logar(evento) {
  evento.preventDefault();
  const email = evento.srcElement.email.value;
  const senha = evento.srcElement.senha.value;

  try {
    const response = await instance.post(`/usuarios/login`, {
      email,
      senha,
    });

    console.log(response);
    
    localStorage.setItem("idUsuario", idUsuario);
    location.href = "/crudrecados.html";
  } catch (error) {
    console.log(error);
    alert("Erro ao realizar o login!");
  }
}




//   instance
//     .post(`/usuarios/login`, {
//       email,
//       senha,
//     })
//     .then(function (response) {
//       console.log(response);
//       localStorage.setItem("idUsuario", response.idUsuario)
//       location.href = "/crudrecados.html";
//     })
//     .catch(function (error) {
//       console.log(error);
//       alert("Erro ao realizar o login!");
//     });
// }
