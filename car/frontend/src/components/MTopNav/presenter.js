import React from "react";
import PropTypes from "prop-types";
import {Router, Link} from "react-router-dom";
import styles from "./styles.module.scss";
import Modal from 'react-modal'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const MTopNav = (props, context) => (
    <div className={styles.TopNav}>
        <div className={styles.item}>
            <div className={styles.logobox}>
                <Link to="/" className={styles.link}>
                    <div className={styles.logo}>
                      전주팔복자동차공업사
                    </div>
                    <div className={styles.explain}>
                      063-252-4949
                    </div>
                </Link>
            </div>
            
            
        </div>
    </div>
);

MTopNav.propTypes = {
  scrollToLocation: PropTypes.func.isRequired,
  scrollToFooter : PropTypes.func.isRequired,
};

MTopNav.contextTypes = {
    t: PropTypes.func.isRequired
};

export default MTopNav;