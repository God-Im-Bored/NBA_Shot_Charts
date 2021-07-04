import React from "react";
import styles from "./Card.module.css";
import logo from './loader.gif'

const Card = ({ playerInfo }) => {
  console.log(playerInfo);
  return (
    <div>
      <h3>Card</h3>

      {!playerInfo ? (
        <img src={logo} alt='Loading' />
      ) : (
        <pre>{playerInfo.name}</pre>
      )}
    </div>
  );
};

export default Card;
