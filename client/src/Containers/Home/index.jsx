import React from 'react';
import style from './index.module.scss';
import rightArrow from '../../Assets/images/right-arrow.png';

const Box = ({ title, content, link }) => {
  return (
    <div className={style.box}>
      <div className={style.title}>{title}</div>
      <div className={style.content}>{content}</div>
      <div className={style.link}>
        {link} <img src={rightArrow} alt="view" />
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.boxContainer}>
        <Box title="PROJECTS" content="Lorem + Lorem" link="View" />
        <Box title="PRODUCTS" content="Lorem + Lorem" link="View" />
      </div>
    </div>
  );
};
