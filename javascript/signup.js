const parent_block = document.getElementById('sign-up-parent-block');
const sign_up_button = document.getElementById('sign-up');
const full_name_text = document.getElementById('full-name-input');
const div_block = document.getElementById('welcome-block');


sign_up_button.addEventListener('click', function(){
    let name = full_name_text.value;
    parent_block.style.display = "none";
    div_block.style.display = "inline-block";
    let heading = document.createElement('h2')
    heading = document.createTextNode(`WELCOME ${name.toUpperCase()}!`)
    div_block.appendChild(heading)
})