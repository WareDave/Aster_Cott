import React, { Component } from 'react'
import './Head.scss'



// const $ = window.$;


let slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}





class Head extends Component {
 

  render() {


    
    
    return (
     


      
    <main>
        
        

<h2 >Slideshow Gallery</h2>

<div class="container">
  <div class="mySlides">
    <div class="numbertext">1 / 6</div>
    <img src=""></img>
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 6</div>
    <img src=""></img>
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 6</div>
    <img src=""></img>
  </div>
    
  <div class="mySlides">
    <div class="numbertext">4 / 6</div>
    <img src=""></img>
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 6</div>
    <img src=""></img>
  </div>
    
  <div class="mySlides">
    <div class="numbertext">6 / 6</div>
    <img src=""></img>
  </div>
    
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src="" onclick="currentSlide(1)" alt="The Woods"></img>
    </div>
    <div class="column">
      <img class="demo cursor" src="" onclick="currentSlide(2)" alt="Cinque Terre"></img>
    </div>
    <div class="column">
      <img class="demo cursor" src="" onclick="currentSlide(3)" alt="Mountains and fjords"></img>
    </div>
    <div class="column">
      <img class="demo cursor" src="" onclick="currentSlide(4)" alt="Northern Lights"></img>
    </div>
    <div class="column">
      <img class="demo cursor" src="" onclick="currentSlide(5)" alt="Nature and sunrise"></img>
    </div>
    <div class="column">
      <img class="demo cursor" src="" onclick="currentSlide(6)" alt="Snowy Mountains"></img> 
    </div>
  </div>
</div>
   
       
    </main>
     
    )
  }
}

export default Head;  