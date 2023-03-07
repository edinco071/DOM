var user = {
    username: 'new_user',
    password: '123456789'
}

function login(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username,password);

    if(username===user.username){
        var loginForm = document.getElementById('login-form');
        loginForm.style.display = 'block';
        var nav = document.querySelector('.nav, .fa-check');
        nav.style.display = 'block';

    }else {
        var errorMsg = document.querySelector('.err-usr, .fa-times');
       errorMsg.style.display = 'block';
    }

    if(password===user.password) {
        var loginForm = document.getElementById('login-form');
        loginForm.style.display = 'block';
        var nav = document.querySelector('.nav, .fa-check');
        nav.style.display = 'block';

    }else {
        var errorMsg = document.querySelector('.err-pass, .fa-times');
        errorMsg.style.display = 'block';
    }
}
document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault()
});
