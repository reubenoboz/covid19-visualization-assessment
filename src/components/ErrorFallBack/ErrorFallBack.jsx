import React from 'react';
import { useHistory } from 'react-router-dom';
import ErrorFallbackAvatar from '../../assets/img/error_avatar.svg';
import './style.scss';

export const ErrorFallBack = ({
  error
}) => {
  const history = useHistory();
  const goBack = () => {
    console.error(error.message);
    history.goBack();
  };

  return (
    <main className="error-fallback-view">
      <div className="content">
        <img src={ErrorFallbackAvatar} alt="Error fallback" />
        <h1>OOPS!!!</h1>
        <p>Seems you encountered an error!</p>
        <button onClick={goBack}>Go back</button>
      </div>
    </main>
  );
};
