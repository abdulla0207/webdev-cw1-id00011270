const popularSectionBlock = document.getElementsByClassName('section-block');
const popularCoursesTextBlock = document.querySelector('.courses-textbox');
const dark_btn = document.getElementById('dark-mode');
const light_btn = document.getElementById('light-mode');
const headers = [document.getElementById('header'), document.getElementById('header-for-signup')]
const sign_up_btn = document.querySelector('.nav-link-signup');
const nav_lists = document.querySelector('.navigation-lists');
const body = document.getElementsByTagName('BODY');
const courses_text = document.querySelector('.courses-textbox');
const free_courses_heading = document.querySelector('.free-courses-heading');
const footer = document.getElementById('footer');
const section_block = document.getElementsByClassName('section-block');

let whiteColor = 'rgb(250, 250, 250)';
let blackColor = 'rgb(0, 0, 0)';
let blueColor = 'rgb(0, 63, 145)';

// This function will show and hide the popular courses section in 
// home page when the Popular Courses is pressed
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


// This function will change the color and background color of elements to dark color
function darkModeWhenClicked(){
    for (let index = 0; index < headers.length; index++) {
        headers[index].style.backgroundColor = 'rgb(41, 40, 40)';
        sign_up_btn.style.backgroundColor = 'rgb(56, 55, 55)';
        nav_lists.style.backgroundColor = 'rgb(41, 40, 40)';
        body[0].style.backgroundColor = 'rgb(29, 27, 27)';
        courses_text.style.color = whiteColor;
        free_courses_heading.style.color = whiteColor;
        footer.style.backgroundColor = blueColor;
        for (let i = 0; i < section_block.length; i++) {
            section_block[i].style.boxShadow = `0px 1px 7px 3px ${blueColor}`;
        }
    }
}
dark_btn.addEventListener('click', darkModeWhenClicked);

// This function will change the background and content color to the initial color after the dark mode was on
function lightModeWhenClicked(){
    for (let index = 0; index < headers.length; index++) {
        headers[index].style.backgroundColor = blueColor;
        sign_up_btn.style.backgroundColor = 'rgb(71, 71, 253)';
        nav_lists.style.backgroundColor = blueColor;
        body[0].style.backgroundColor = '#e8e8f1';
        courses_text.style.color = blackColor;
        free_courses_heading.style.color = blackColor;
        footer.style.backgroundColor = 'rgb(29, 27, 27)';
        for (let i = 0; i < section_block.length; i++) {
            section_block[i].style.boxShadow = '0px 1px 7px 3px rgba(112, 112, 112, 0.9)';
        }
    }
}
light_btn.addEventListener('click', lightModeWhenClicked);