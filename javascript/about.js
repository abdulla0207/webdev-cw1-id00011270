const input_button = document.getElementById('submit-button');
const review_block = document.getElementById('reviews');
const text = document.getElementById('review-text')
var about_description_text = {
    about_us: "Study∞ was established in 2021. CEO of this Course Website is John Berntall. In this course website want to provide the best quality of courses and best courses to our learners. We are only hiring the best teachers. For example the most famous and promimnet teacher is John Doell, he studied in Harvard University. That is not all, we are also want to become one of the best online teaching website in Uzbekistan.",
    students: "Our students are one of the best. They are from all over the world and you can communicate with them via group chats. One of the students that took course in our webistes, he learned Java programming language and after that he was provided with the a workplace in Facebook. Also, with them you can share and collaborate and do online courses together."
}
const about = document.getElementById('about-p')
const students = document.getElementById('students-p')

function descriptions(){
    let about_text = document.createTextNode(about_description_text.about_us);
    about.appendChild(about_text);
    let students_text = document.createTextNode(about_description_text.students);
    students.appendChild(students_text)
}
descriptions()
input_button.addEventListener('click', function(e){
    e.preventDefault();
    if(!(text.value.length == 0)){
        review_block.style.display = "block";
        let heading = document.createElement("h2")
        let heading_text = document.createTextNode("Anonymous:"); 
        heading.appendChild(heading_text)
        let review = document.createElement('p');
        let new_line = document.createElement('br');
        review_block.appendChild(heading);
        let review_text = document.createTextNode(` ${text.value}`);
        review.appendChild(review_text);
        review_block.appendChild(review);
        review_block.appendChild(new_line);
    }
})
