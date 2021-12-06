const popularSectionBlock = document.getElementsByClassName('section-block');
const popularCoursesTextBlock = document.querySelector('.courses-textbox');
const dark_btn = document.getElementById('dark-mode');
const light_btn = document.getElementById('light-mode');
const headers = [document.getElementById('header'), document.getElementById('header-for-signup')]
const sign_up_btn = document.querySelector('.nav-link-signup');
const nav_lists = document.querySelector('.navigation-lists');
const body = document.getElementsByTagName('BODY');
const courses_text = document.querySelector('.courses-textbox');
const free_courses_heading = document.querySelector('.free-courses-heading')

function showHidePopularCourses(){
    for (let i = 0; i < popularSectionBlock.length; i++) {
        if(popularSectionBlock[i].style.display === "none"){
            popularSectionBlock[i].style.display = "block";
        }else{
            popularSectionBlock[i].style.display = "none";
        }
    }
}
popularCoursesTextBlock.addEventListener('click', showHidePopularCourses);

function darkModeWhenClicked(){
    for (let index = 0; index < headers.length; index++) {
        headers[index].style.backgroundColor = 'rgb(41, 40, 40)';
        sign_up_btn.style.backgroundColor = 'rgb(56, 55, 55)';
        nav_lists.style.backgroundColor = 'rgb(41, 40, 40)';
        body[0].style.backgroundColor = 'rgb(29, 27, 27)';
        courses_text.style.color = 'rgb(250, 250, 250)';
        free_courses_heading.style.color = 'rgb(250, 250, 250)';
    }
}
dark_btn.addEventListener('click', darkModeWhenClicked);

function lightModeWhenClicked(){
    for (let index = 0; index < headers.length; index++) {
        headers[index].style.backgroundColor = 'rgb(0, 63, 145)';
        sign_up_btn.style.backgroundColor = 'rgb(71, 71, 253)';
        nav_lists.style.backgroundColor = 'rgb(0, 63, 145)';
        body[0].style.backgroundColor = '#e8e8f1';
        courses_text.style.color = 'rgb(0, 0, 0)';
        free_courses_heading.style.color = 'rgb(0, 0, 0)';
    }
}
light_btn.addEventListener('click', lightModeWhenClicked);