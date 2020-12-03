import React, { Component } from "react";
import capitalise from "../helper/capitalise";

const Review = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          Name <span className="float-right">:</span>
        </div>
        <div className="col-md-6">{capitalise(props.name)}</div>
      </div>
      <div className="row">
        <div className="col-md-6">
          Destination Preferences
          <span className="float-right">:</span>
        </div>
        <div className="col-md-6">{capitalise(props.destination)}</div>
      </div>
      <div className="row">
        <div className="col-md-6">
          Cities
          <span className="float-right">:</span>
        </div>
        <div className="col-md-6">
          {props.cities.map((e) => capitalise(e)).join()}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          Review
          <span className="float-right">:</span>
        </div>
        <div className="col-md-6">{props.rev}</div>
      </div>
    </div>
  );
};

export default Review;
