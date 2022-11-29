import React, { Component } from 'react'
import './Nav.scss'



// const $ = window.$;








class Nav extends Component {
 

  render() {


    
    
    return (
     


      
      <main>
        
        
        <input type="checkbox" id="ham-menu"></input>

<div>

<img src="https://i.imgur.com/OP2mJyT.png" alt="Paris" class="center"></img>


</div>

<h1 class='A_title'>ASTER COTTAGE</h1>
<p class='A_title_P'> -Crafts- </p>


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