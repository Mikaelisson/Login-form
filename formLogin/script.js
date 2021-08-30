let screenLoad = document.getElementById('screenLoad');
let nameLogin = document.getElementById('name-login');
let emailLogin = document.getElementById('email-login');
let senhaLogin = document.getElementById('password-login');


let load = document.getElementById('load').addEventListener('click', ()=>{
    
    if(nameLogin.value != '' && emailLogin.value != '' && senhaLogin.value != ''){

        screenLoad.style.display = 'inline-block';

    }else{
        alert('Preencha corretamente os campos!')
    }
})