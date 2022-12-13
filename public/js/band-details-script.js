const allStars = document.querySelectorAll('.star');
let userRating = document.querySelector('.your_rating');
const ratingForm = document.getElementById('band-rating');
ratingInput = document.getElementById('band-rating-input');
let userVoteInput = document.getElementById('userVote').value;

if(userVoteInput){
   for(let i = 0; i<= allStars.length; i++){
    if(i < userVoteInput){
        allStars[i].innerHTML='&#9733'
    }
   }
}

allStars.forEach((star, i) => {
    star.onclick = function(){
      let current_star_level = i + 1;
       userRating.innerText = `${current_star_level} of 10`;
       ratingInput.value = current_star_level;
       allStars.forEach((star, j)=> {
            if(current_star_level >= j+1){
                star.innerHTML = '&#9733';
            }else{
                star.innerHTML = '&#9734'
            }
       })
       ratingForm.submit()
    }
})