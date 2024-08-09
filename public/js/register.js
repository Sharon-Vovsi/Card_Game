/*open game board*/
function openLogin() {
    const url = '/login';
    window.open(url);
}
/*-------------------------------------------------------------------*/
const password_input = document.getElementById('password_input')

let changeIcon = function(icon) {
    icon.classList.toggle('fa-eye')

    if (password_input.type === 'password') {
        password_input.type = 'text';
    }
    else {
        password_input.type = 'password';
    }
}