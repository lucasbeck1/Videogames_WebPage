import React from "react";
import Vectors_React from "../assets/vectors";
import s from "./styles/footer.module.css";


export function Footer () {

  const year = new Date().getFullYear().toString();
  
  return(
    <React.Fragment>
      <div className={s.footer}>
        <div>
          <span className={s.text}>Made by </span>
          <span className={s.textBold}>Lucas Beckford</span>
        </div>

        <div className={s.links}>
          <a href='https://lucasbeck1.github.io/Portfolio/'target='blank'>
          {Vectors_React.person}   
          </a>
          <a href='https://www.linkedin.com/in/lucas-jbec/'target='blank'>
          {Vectors_React.linkedIn}   
          </a>
          <a href='https://github.com/lucasbeck1' target='blank'>
          {Vectors_React.git}
          </a>
        </div>
        <p className={s.text}>{year} - All rights reserved</p>
      </div>
    </React.Fragment>
  )
};
