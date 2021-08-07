import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../Card";
import "./CovidCard.scss";

const CovidCard = ({ title, subtitle }) => {
  return (
    <Card>
      <div className="covid_card">
        <div className="covid_card_details">
          <h2 className="covid_title">{title}</h2>
          <h2 className="covid_subtitle">{subtitle}</h2>
        </div>
      </div>
    </Card>
  );
};

export default CovidCard;
