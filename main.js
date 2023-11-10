document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/cassgkn')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
            
            if(json.follwers == undefined) {
                followersElement.innerText = '0'
            } else {
                followersElement.innerText = json.follwers;
            }
        })
        try {
            alert("Seja bem vindo ao perfil do GitHub o Anderson Casimiro! Cliqie em Ver no Github e saiba mais...");
          }
          catch(err) {
            alert("Ocorreu um erro ao encontrar o perfil do Github");
          }
})
