import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeroContext } from "../DataStore/HeroContext";

export default function Hero(props) {
  const [hero, setHero] = useContext(HeroContext);

  return (
    <Link to='/'>
      <img
        onClick={(e) => {
          setHero(props.name);
        }}
        src={props.image}
        alt='..|..'
      />
    </Link>
  );
}