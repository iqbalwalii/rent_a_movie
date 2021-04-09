import React from "react";
import "./About.css";
import { FaHeart } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="about">
          <h2 className="head">The Dropout Project</h2>
          <p className="about-des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            adipisci, nobis ad dicta at doloribus delectus repudiandae illum
            eveniet asperiores architecto unde quia ullam placeat ducimus
            consequatur dolore inventore magnam cupiditate tenetur aspernatur
            quisquam illo. Deleniti, cum. Culpa, delectus quia libero eum amet
            nihil dignissimos quibusdam asperiores repudiandae officia at harum
            commodi magni accusantium incidunt fugit debitis labore dolor quae
            sapiente, minus error perspiciatis corporis beatae. Aliquam,
            temporibus beatae. Tempora recusandae odit quo fugiat error totam
            quas voluptatum ex voluptas mollitia, iure veritatis a esse facere
            consequuntur impedit magni quae assumenda! Iste cum alias iusto
            ducimus, quibusdam exercitationem fuga ad?
          </p>
          <h5 style={{ textAlign: "center", marginTop: "2rem" }}>
            Made With <FaHeart color="red" /> by King ragnar
          </h5>
        </div>
      </div>
    </div>
  );
};

export default About;
