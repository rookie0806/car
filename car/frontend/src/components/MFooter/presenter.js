import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import styles from "./styles.module.scss";
import FadeIn from 'react-fade-in';
import PropTypes from "prop-types";
import { SiNaver } from 'react-icons/si';
const MFooter = (props, context) => (
    
    <div id="Footer" className={styles.middleback}>
        <div class={styles.wrapper}>
            <div class={styles.bottomcontent}>
                    <div class={styles.big}>전주팔복자동차공업사</div>
                    <div class={styles.small}>
                        <div class={styles.middle}>H.P 010-3664-4949</div>
                        <div class={styles.middle}>TEL 063-252-4949</div>
                        <div class={styles.middle}>FAX 063-211-6738</div>
                    </div>
                   
            </div>
            <div class={styles.right}>
                <a class={styles.button} href="https://blog.naver.com/pbcar">	
                    <SiNaver  size="48"  color="#fff"/>	
                    <div class={styles.big}>네이버블로그 바로가기</div>
                </a>
            </div>
        </div>
    </div>
);
MFooter.propTypes = {
    scroll: PropTypes.bool.isRequired,
    first: PropTypes.bool.isRequired,
    second: PropTypes.bool.isRequired,
    third: PropTypes.bool.isRequired,

};
export default MFooter;