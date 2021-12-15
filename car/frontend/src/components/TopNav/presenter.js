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

const TopNav = (props, context) => (
    <div className={styles.TopNav}>
        <div className={styles.item}>
            <div className={styles.logobox}>
                <Link to="/" className={styles.link}>
                    <div className={styles.logo}>
                      전주팔복자동차공업사
                    </div>
                </Link>
            </div>
            <nav>
                <a class=""  href="/">수리내역 조회</a>
                <a class=""  onClick={props.scrollToLocation}  href="/">오시는 길</a>
                <a class=""  onClick={props.scrollToFooter}  href="/">연락처</a>
            </nav>
            
        </div>
    </div>
);

TopNav.propTypes = {
  scrollToLocation: PropTypes.func.isRequired,
  scrollToFooter : PropTypes.func.isRequired,
};

TopNav.contextTypes = {
    t: PropTypes.func.isRequired
};

export default TopNav;