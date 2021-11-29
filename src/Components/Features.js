import React from "react";
import { UserPlus } from "react-feather";
import { Link } from "react-router-dom";
import "./Features.css";
function Features() {
  return (
    <div className="bg-color">
      <div className="container px-4 py-4 bg-color" id="featured-3">
        <h3 className="pb-2 border-bottom text-center">It's that easy</h3>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
          <div className="feature col hvr-icon-grow-rotate">
            <div className="feature-icon bg-primary bg-gradient  hvr-icon">
              <i className="fas fa-hamburger"></i>
            </div>
            <h2>1. Put dishes in the basket</h2>
            <p>
              What would you like? See today's dishes here, or go to the{" "}
              <Link to="/menu">menu</Link>.
            </p>
          </div>
          <div className="feature col hvr-icon-grow-rotate">
            <div className="feature-icon bg-primary bg-gradient hvr-icon">
              <UserPlus size={35} color="white"></UserPlus>
            </div>
            <h2>2. Log in</h2>
            <p>Log in quickly with google and enter your street name</p>
          </div>
          <div className="feature col hvr-icon-grow-rotate">
            <div className="feature-icon bg-primary bg-gradient  hvr-icon">
              <i className="fas fa-motorcycle"></i>
            </div>
            <h2>3. Pay and have your food delivered</h2>
            <p>Pay in cash or by credit card. Bon appetite!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
