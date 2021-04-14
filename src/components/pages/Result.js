import React from "react";
import "./Result.css";
import { Card } from "../Card";
const Result = () => {
  return (
    <div className="container">
      <h1 className="head"> Result for SAOMETHING </h1>
      <div className="results">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Result;
