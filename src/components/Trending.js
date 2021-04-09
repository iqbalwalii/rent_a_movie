import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";
// import '../Skeleton/css/skeleton.css';
// import '../Skeleton/css/normalize.css';
import "./Trending.css";
const Trending = () => {
  return (
    <div>
      <h2 className="head">TRENDING</h2>
      <div className="row ">
        <div className="eight columns">
          <div className="trending_row">
            <div className="progress_bar">
              <Link to="detail/123">
                <h4>JOHN WICK</h4>
              </Link>
              <h6>Keanu Himself, Scarlett Johanson</h6>
              <h6>10.0</h6>
              <button className="btn btn-trending">WATCH</button>
            </div>
          </div>
          <div className="trending_row">
            <div className="progress_bar">
              <h4>JOHN WICK</h4>
              <h6>Keanu Himself, Scarlett Johanson</h6>
              <h6>10.0</h6>
              <button className="btn btn-trending">WATCH</button>
            </div>
          </div>
          <div className="trending_row">
            <div className="progress_bar">
              <h4>JOHN WICK</h4>
              <h6>Keanu Himself, Scarlett Johanson</h6>
              <h6>10.0</h6>
              <button className="btn btn-trending">WATCH</button>
            </div>
          </div>
          <div className="trending_row">
            <div className="progress_bar">
              <h4>JOHN WICK</h4>
              <h6>Keanu Himself, Scarlett Johanson</h6>
              <h6>10.0</h6>
              <button className="btn btn-trending">WATCH</button>
            </div>
          </div>
          <div className="trending_row">
            <div className="progress_bar">
              <h4>JOHN WICK</h4>
              <h6>Keanu Himself, Scarlett Johanson</h6>
              <h6>10.0</h6>
              <button className="btn btn-trending">WATCH</button>
            </div>
          </div>
        </div>
        <div className="four columns">
          <Card className="trending-card" />
        </div>
      </div>
    </div>
  );
};
export default Trending;
