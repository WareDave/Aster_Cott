import React, { Component } from 'react'
import './Nav.scss'



// const $ = window.$;








class Nav extends Component {
 

  render() {


    
    
    return (
     


      
      <main>
        
        
        <input type="checkbox" id="ham-menu"></input>

<div>

<img src="https://i.imgur.com/PFrWooc.jpg" alt="Paris" class="center"></img>


</div>

<div class='A_title_P'>

<svg xmlns="http://www.w3.org/2000/svg" color='#013504' width="75" height="70" fill="currentColor" class="bi bi-minecart-loaded" viewBox="0 0 16 16">
  <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z"/>
  <path fill-rule="evenodd" d="M6 1a2.498 2.498 0 0 1 4 0c.818 0 1.545.394 2 1 .67 0 1.552.57 2 1h-2c-.314 0-.611-.15-.8-.4-.274-.365-.71-.6-1.2-.6-.314 0-.611-.15-.8-.4a1.497 1.497 0 0 0-2.4 0c-.189.25-.486.4-.8.4-.507 0-.955.251-1.228.638-.09.13-.194.25-.308.362H3c.13-.147.401-.432.562-.545a1.63 1.63 0 0 0 .393-.393A2.498 2.498 0 0 1 6 1z"/>
</svg>

{/* <p class='A_title_P'> -Crafts- </p> */}

</div>

<label for="ham-menu">
  <div class="hide-des">
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
  </div>

</label>
<div class="full-page-green"></div>
<div class="ham-menu">
  <ul class="centre-text bold-text">
    <li>-Home-</li>
    <li>-Portfolio-</li>
    <li>-Events-</li>
    <li>-Shop-</li>
    <li>-Support-</li>
    <li>-Contact-</li>

  </ul>
</div>

   
       
    </main>
     
    )
  }
}

export default Nav;  