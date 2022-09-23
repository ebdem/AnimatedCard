import React from 'react';
import './style.css';

export default function App() {
  const Background =
    'https://3.bp.blogspot.com/-piZWCW2uUbg/W2fPXxkWZgI/AAAAAAAAOu0/eydmMjTIqcwLMHEEr2H7imqoRTxMw4o9QCLcBGAs/s1600/among_trees_night_dribbble.png';
  return (
    <div>
      <a
        href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwib0NqopqD4AhXFmeYKHTGVD1s4ChAWegQIAxAB&url=https%3A%2F%2Fwww.enationalelectronics.com%2F&usg=AOvVaw0CoGpfiGKRton9yE4Q8_Hv"
        target="_blank"
      >
        <section>
          <div class="container">
            <div
              style={{ backgroundImage: `url(${Background})` }}
              class="background-img"
            >
              <div class="box">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                  <h2>My animated Border </h2>
                  <p>
                    <a>
                      All our modules are designed to play nicely with
                      responsive of course. At the end of the day it comes down
                      to the theme you use - our code doesn't get in your way.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </a>
    </div>
  );
}
