import React, { Component } from "react";

const Review = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          Name <span className="float-right">:</span>
        </div>
        <div className="col-md-6">{props.name.toUpperCase()}</div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <span className="float-right">:</span>
        </div>
        <div className="col-md-6">{props.name.toUpperCase()}</div>
      </div>
    </div>
  );
};
