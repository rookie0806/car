import React,{useEffect} from "react";
import PropTypes from "prop-types";
import {Router,Link } from "react-router-dom";
import styles from "./styles.module.scss";

import {
  ComposedChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Navigation from "../Navigation";
import ReactLoading from 'react-loading';

const LOGIN = (props, context) => (
  <div>
    <div className={styles.summoner}>
        <div className={styles.box}>
          dd
        </div>
    </div>
  </div>
);

LOGIN.propTypes = {
  average : PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  loading2: PropTypes.bool.isRequired,
  data : PropTypes.array.isRequired,
  summonername : PropTypes.string.isRequired,
  mmr : PropTypes.array.isRequired,
  mmrdate : PropTypes.array.isRequired,
  onKeyPress:PropTypes.func.isRequired,
  onClick:PropTypes.func.isRequired
};

export default LOGIN;