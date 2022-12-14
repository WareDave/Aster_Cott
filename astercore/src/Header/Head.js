import React, { Component } from 'react'
import './Head.scss'



// const $ = window.$;








class Head extends Component {
 

  render() {


    
    
    return (
     


      
    <main>
        

        <section>
                <div class="container">
                    <div class="carousel">


                        <input type="radio" name="slides" checked="checked" id="slide-1"></input>
                        <input type="radio" name="slides" id="slide-2"></input>
                        <input type="radio" name="slides" id="slide-3"></input>
                        <input type="radio" name="slides" id="slide-4"></input>
                        <input type="radio" name="slides" id="slide-5"></input>
                        <input type="radio" name="slides" id="slide-6"></input>

                        <ul class="carousel__slides">
                            <li class="carousel__slide">


                                <figure>
                                    <div>
                                        <img src="https://i.imgur.com/BdDt3oz.jpg" alt=""></img>
                                    </div>
                                    <figcaption>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        <span class="credit">Art By: Allegra Tankersley</span>
                                    </figcaption>
                                </figure>
                            </li>


                            <li class="carousel__slide">
                                <figure>
                                    <div>
                                        <img src="https://i.imgur.com/ORufQkU.jpg" alt=""></img>
                                    </div>
                                    <figcaption>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        <span class="credit">Art By: Allegra Tankersley</span>                            
                                    </figcaption>
                                </figure>
                            </li>


                            <li class="carousel__slide">
                                <figure>
                                    <div>
                                        <img src="https://i.imgur.com/nHWBLIM.jpg" alt=""></img>
                                    </div>
                                    <figcaption>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        <span class="credit">Art By: Allegra Tankersley</span>                            
                                    </figcaption>
                                </figure>
                            </li>


                            <li class="carousel__slide">
                                <figure>
                                    <div>
                                        <img src="https://i.imgur.com/GBE6ti1.jpg" alt=""></img>
                                    </div>
                                    <figcaption>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        <span class="credit">Art By: Allegra Tankersley</span>                            
                                    </figcaption>
                                </figure>
                            </li>


                            <li class="carousel__slide">
                                <figure>
                                    <div>
                                        <img src="https://i.imgur.com/9xBSkcM.jpg" alt=""></img>
                                    </div>
                                    <figcaption>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        <span class="credit">Art By: Allegra Tankersley</span>                            
                                    </figcaption>
                                </figure>


                            </li>
                            <li class="carousel__slide">
                                <figure>
                                    <div>
                                        <img src="https://i.imgur.com/VzZNzc1.jpg" alt=""></img>
                                    </div>
                                    <figcaption>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        <span class="credit">Art By: Allegra Tankersley</span>                            
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>  



                        <ul class="carousel__thumbnails">
                            <li>
                                <label for="slide-1"><img src="https://i.imgur.com/BdDt3ozs.jpg" alt=""></img></label>
                            </li>
                            <li>
                                <label for="slide-2"><img src="https://i.imgur.com/ORufQkU.jpg" alt=""></img></label>
                            </li>
                            <li>
                                <label for="slide-3"><img src="https://i.imgur.com/nHWBLIM.jpg" alt=""></img></label>
                            </li>
                            <li>
                                <label for="slide-4"><img src="https://i.imgur.com/GBE6ti1.jpg" alt=""></img></label>
                            </li>
                            <li>
                                <label for="slide-5"><img src="https://i.imgur.com/9xBSkcMs.jpg" alt=""></img></label>
                            </li>
                            <li>
                                <label for="slide-6"><img src="https://i.imgur.com/VzZNzc1s.jpg" alt=""></img></label>
                            </li>
                        </ul>


                    </div>
                </div>


    </section>        


       
    </main>
     
    )
  }
}

export default Head;  