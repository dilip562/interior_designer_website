import React from 'react';
import style from './index.module.scss';

export const NavBar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>Logo</div>
      <div className={style.navs}>
        <div className={style.nav}>About Us</div>
        <div className={style.nav}>Teams</div>
        <div className={style.nav}>Projects</div>
        <div className={style.nav}>Products</div>
        <div className={style.nav}>Contact Us</div>
      </div>
    </div>
  );
};
