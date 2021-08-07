import React from 'react';
import { Link } from 'react-router-dom';
import NotFoudImage from '../../assets/img/404.png';
import './style.scss';

export const NotFound = () => {
  return (
    <main className="not-found-view">
      <div className="content">
        <img src={NotFoudImage} alt="404" />
        <h1>OOPS!!!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Go Home</Link>
      </div>
    </main>
  );
};
