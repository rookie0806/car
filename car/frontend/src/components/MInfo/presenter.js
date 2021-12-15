import React,{useEffect} from "react";
import PropTypes from "prop-types";
import {Router,Link } from "react-router-dom";
import styles from "./styles.module.scss";

import {
  ComposedChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Navigation from "../Navigation";
import ReactLoading from 'react-loading';
import Helmet from 'react-helmet';
import ReactRotatingText from 'react-rotating-text';

const MInfo = (props, context) => (
  <div>
  <Navigation/>
  <div className={styles.summoner}>
      <div className={styles.box}>
        
        <div className={styles.top}>
        
          <div className={styles.showmmr} >


            <div className={styles.infobox}>
                <div className={styles.name}>
               <ReactRotatingText items={['MMR 멀티서치는 PC버전에서 이용하실 수 있습니다.', '이용해주셔서 감사합니다. MYMMR.KR']} />
               </div>
            </div>

          </div>
        
          </div>
       
      </div>
  </div>
  </div>
);

MInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  data : PropTypes.array.isRequired,
  summonername : PropTypes.string.isRequired,
  mmr : PropTypes.array.isRequired,
  mmrdate : PropTypes.array.isRequired,
};

export default MInfo;