const description = document.getElementById('description-p')
const text = document.getElementById('text-p')
var textArray = {
    description: "This course is absolutely free for everyone. You may ask, why learning JavaScript language is free here, whereas other websites sell it for money? First of all, today every programmer know JavaScript language and as StackOverflow survey states 66% of programmers know this language. Secondly we want to provide the easiest access to learning",
    text: "In this course, you firstly learn the basics of this language such as Variables, Loops and Conditional Statements. After basics, you will dive in to Objects and Arrays. Be ready, because Objects and Arrays are used in every project and code."
}
function textAdd(){
    let description_text = document.createTextNode(textArray.description)
    description.appendChild(description_text)
    let course_text = document.createTextNode(textArray.text)
    text.appendChild(course_text)
}
textAdd();
