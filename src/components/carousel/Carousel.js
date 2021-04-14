import React, { useEffect } from "react";
import "./carousel.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Carousel = () => {
  useEffect(() => {
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const slides = document.querySelectorAll(".slide");

    let currentIndex = 0;

    next.addEventListener("click", () => {
      if (currentIndex === slides.length - 1) {
        currentIndex = 0;
        document.querySelector(".active").classList.remove("active");
        slides[currentIndex].classList.add("active");
        return;
      }

      if (currentIndex < slides.length) {
        document.querySelector(".active").classList.remove("active");
        currentIndex++;
        slides[currentIndex].classList.add("active");
      }
    });

    prev.addEventListener("click", () => {
      if (currentIndex === 0) {
        currentIndex = slides.length - 1;
        document.querySelector(".active").classList.remove("active");
        slides[currentIndex].classList.add("active");
        return;
      }

      if (currentIndex < slides.length) {
        document.querySelector(".active").classList.remove("active");
        currentIndex--;
        slides[currentIndex].classList.add("active");
      }
    });
  }, []);
  return (
    <>
      <div className="slider">
        <button className="prev">
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button className="next">
          <FaArrowRight></FaArrowRight>
        </button>
        <div className="slides-container">
          <div className="slide active">
            <div className="col-left">
              <h2>Vegeta</h2>
              <p>
                Vegeta is the prince of an extraterrestrial warrior race known
                as the Saiyans. He is extremely arrogant, proud and hardworking;
                constantly referring to his heritage and royal status throughout
                the series.
              </p>
            </div>
            <div className="col-right">
              <img src="/assets/images/vegeta.png" alt="" />
            </div>
          </div>
          <div className="slide">
            <div className="col-left">
              <h2>GOKU</h2>
              <p>
                Goku is introduced as an eccentric, monkey-tailed boy who
                practices martial arts and possesses superhuman strength. He
                meets Bulma and joins her on a journey to find the magical seven
                Dragon Balls that can grant the user one wish.
              </p>
            </div>
            <div className="col-right">
              <img src="/assets/images/goku.png" alt="" />
            </div>
          </div>
          <div className="slide">
            <div className="col-left">
              <h2>MASTER ROSHI</h2>
              <p>
                Master Roshi's first appearance is in chapter #3 of the Dragon
                Ball manga. Roshi lives with his longtime companion, an
                anthropomorphic turtle referred to as Umigame (ウミガメ, "Sea
                Turtle"), on an island with a house built on it known as "Kame
                House".
              </p>
            </div>
            <div className="col-right">
              <img src="/assets/images/masterRoshi.png" alt="" />
            </div>
          </div>

          <div className="slide">
            <div className="col-left">
              <h2>CELL</h2>
              <p>
                In filler episodes of the anime, Cell makes numerous cameo
                appearances, usually as comic relief. Cell tries absorbing two
                siblings, but is prevented from doing so by Krillin, giving
                chase to the three and nearly killing Krillin before he notices
                Piccolo and Tien Shinhan on the way and escapes.
              </p>
            </div>
            <div className="col-right">
              <img src="/assets/images/cell.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
