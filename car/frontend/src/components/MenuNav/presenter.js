import React from "react";
import PropTypes from "prop-types";
import {Router,Link } from "react-router-dom";
import styles from "./styles.module.scss";
import store, { history } from "../../redux/configureStore"
const MenuNav = (props, context) => (
  <nav className={styles.nav}> 
    <div className={styles.menuBox}> 
      <ul > 
        <li>
          <a href="/">솔로랭크 MMR</a>
        </li> 
        <li>
          <a href="/multisearch">MMR 멀티서치</a>
        </li> 
      </ul> 
    </div> 
  </nav>
);

MenuNav.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

MenuNav.contextTypes = {
  t: PropTypes.func.isRequired
};

export default MenuNav;