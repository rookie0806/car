import React,{useEffect} from "react";
import PropTypes from "prop-types";
import {Router,Link } from "react-router-dom";
import styles from "./styles.module.scss";

import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import {
  ComposedChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Navigation from "../Navigation";
import ReactLoading from 'react-loading';
import Helmet from 'react-helmet';
import { NaverMap, Marker } from 'react-naver-maps';

const MLocation = (props, context) => (
  
  <div id="Location"  className={styles.Location}>
    
    <div className={styles.map}>
      <div className={styles.title}>
            <span className={styles.bigTitle}>오시는 길</span>
            <span className={styles.samllTitle}>전라북도 전주시 덕진구 팔복동1가 134-22</span>
      </div>
      <RenderAfterNavermapsLoaded	   // Render후 Navermap로드
                ncpClientId={'awv4p02rug'} // 자신의 네이버 계정에서 발급받은 Client ID
                error={<p>Maps Load Error</p>}
                loading={<p>Maps Loading...</p>}
            >
                <NaverMap
                    id="react-naver-maps-introduction"
                    style={{ width: '100%', height: '200px' }}
                    center={{ lat: 35.85322971930631, lng: 127.10766175605855 }}
                    defaultZoom={15}
                    
                >
                  
                  <Marker
                  key={1}
                  position={{ lat: 35.85322971930631, lng: 127.10766175605855}}
                  animation={2}
                />
                </NaverMap>
        </RenderAfterNavermapsLoaded>  
    </div>
    
  </div>
);

MLocation.propTypes = {
  loading: PropTypes.bool.isRequired,
  data : PropTypes.array.isRequired,
  summonername : PropTypes.string.isRequired,
  mmr : PropTypes.array.isRequired,
  mmrdate : PropTypes.array.isRequired,
};

export default MLocation;