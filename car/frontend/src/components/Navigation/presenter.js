import React from "react";
import PropTypes from "prop-types";
import {Router,Link } from "react-router-dom";
import styles from "./styles.module.scss";
import TopNav from "../TopNav";
import MTopNav from "../MTopNav";
import MenuNav from "../MenuNav"
import MMenuNav from "../MMenuNav"

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
const Navigation = (props, context) => (
  <div className={styles.navigation}>
    {isBrowser && (<div>
      <TopNav/>
      </div>
      )
    }
    {isMobile && (<div>
      <MTopNav/>
      </div>
      )
    }
    
  </div>
);

Navigation.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Navigation;