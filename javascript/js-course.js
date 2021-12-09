const description = document.getElementById('description-p')
const text = document.getElementById('text-p')
// Key Value array that contains the description of Javascript course
var textArray = {
    description: "This course is absolutely free for everyone. You may ask, why learning JavaScript language is free here, whereas other websites sell it for money? First of all, today every programmer know JavaScript language and as StackOverflow survey states 66% of programmers know this language. Secondly we want to provide the easiest access to learning. Also, with javaScript you can create many things. For instance, Web based games such as Tic Tac Toe or Snake. You can also, use JavaScript for backend, but mostly programmers use Java language for backend.",
    text: "In this course, you firstly learn the basics of this language such as Variables, Loops and Conditional Statements. After basics, you will dive in to Objects and Arrays. Be ready, because Objects and Arrays are used in every project and code."
}
// textAdd() function takes 2 keys of textArray and assignes it to two p tags in html
function textAdd(){
    let description_text = document.createTextNode(textArray.description)
    description.appendChild(description_text)
    let course_text = document.createTextNode(textArray.text)
    text.appendChild(course_text)
}
textAdd();

const variables = document.getElementById('vars');
const variables_box = document.getElementById('variables-box');
// Hides and Shows box of variable content when Variable tag clicks
variables.addEventListener('click', function(){
    if(variables_box.style.display == 'block'){
        variables_box.style.display = 'none'
    }else{
        variables_box.style.display = 'block'
    }
})

