//Função de validação de login e senha
function logar(){
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;


    if(login == "admin" && senha == "admin"){
        alert('Login efetuado com sucesso');
        location.href = "home.html";
    }else{
        alert('Usuário ou senha incorretos.')
    }
}


//Função para chamar a API e exibir o endereco
function buscarCep() {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const endereco = document.getElementById("endereco");
        endereco.innerHTML = `
          <tr>
            <td>CEP:</td>
            <td>${data.cep}</td>
          </tr>
          <tr>
            <td>Logradouro:</td>
            <td>${data.logradouro}</td>
          </tr>
          <tr>
            <td>Bairro:</td>
            <td>${data.bairro}</td>
          </tr>
          <tr>
            <td>Cidade:</td>
            <td>${data.localidade}</td>
          </tr>
          <tr>
            <td>Estado:</td>
            <td>${data.uf}</td>
          </tr>
        `;
      })
      .catch(error => console.log(error));
  }

 