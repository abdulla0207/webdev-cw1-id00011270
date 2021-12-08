const input_button = document.getElementById('submit-button');
const review_block = document.getElementById('reviews');
const text = document.getElementById('review-text')

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
