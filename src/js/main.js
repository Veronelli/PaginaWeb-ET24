const login_button = document.getElementById('login')
const login_escape = document.getElementById('escape')

login_button.onclick = ()=>{
    panel.style.display = "flex"

}
login_escape.addEventListener('click',hidePanel)

function hidePanel(){
    panel.style.display = "none"

}