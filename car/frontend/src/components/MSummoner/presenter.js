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
function KakaoShareButton({ image = '', url = '', title = '', description = '', children }) {
  function createShareButton() {
    console.log(window.Kakao)
    if (window.Kakao) {
      const kakao = window.Kakao
      console.log("Dd");

      kakao.init("a5f7b39eb81abef517528d4c6f5cb75e")

      kakao.Link.createDefaultButton({
        container: '.kakaoBtn',
        objectType: 'feed',
        content: {
          title: title || 'title = string',
          description: description || 'description = string',
          imageUrl: image || 'image = string',
          link: {
            mobileWebUrl: url || 'url = string',
            webUrl: url || 'url = string'
          }
        },
        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: url,
              webUrl: url
            }
          }
        ]
      })
    } else {
      console.log('KaKao CDN fetch error')
    }
  }

  useEffect(() => {
    createShareButton()
  }, [])

  return (
    <>
      <button className="kakaoBtn">{children}</button>
    </>
  )
}

const MSummoner = (props, context) => (
  <div>
  <Navigation/>
  <div className={styles.summoner}>
      <div className={styles.box}>
        
        <div className={styles.top}>
        
          <div className={styles.showmmr} >

          {!props.loading && (
            <div>
            {props.mmr[0].mmrtotier=="-1" &&(
              <div className={styles.infobox}>
               <div className={styles.name}>{props.summonername}님의 <br/> mmr을 찾을 수 없습니다.</div>
               <div className={styles.warning}>※ 솔로 랭크 기준으로 계산됩니다. 진행한 게임의 수가 적은 경우 mmr 계산이 불가 할 수 있습니다.※ </div>
               </div>
            )}
            {props.mmr[0].mmrtotier!="-1" && (
               <div className={styles.name}>"{props.mmr[0].summoner_name}" <br/> <div className={styles.solo}>SOLO RANK MMR</div></div>
            )}

            </div>
            
          )}
          {props.loading &&(
            <div className={styles.infobox}>
              <div className={styles.name2}>{props.summonername}님의 <br/> 정보를  불러오는 중입니다.</div>
              <ReactLoading type={"spinningBubbles"} height={'20%'} width={'20%'} className={styles.loading}/>
            </div>

          )}
            {!props.loading && props.mmr[0].mmrtotier!="-1" && ( 
              <div>
            <div className={styles.warning}>※ 솔로 랭크 기준으로 계산됩니다. 듀오 게임이 많은 경우 부정확 할 수 있습니다. ※ </div>
            <div className={styles.tier}>
              <div className={styles.right}>
                <img
                    src={require("../../images/"+ props.mmr[0].mmrtotiershort + ".png").default}
                    alt={"Logo"}
                    className={styles.logo}
                  />
                <div className={styles.mmrtotier}>
                  MMR TO TIER : {props.mmr[0].mmrtotier}
                </div>  
                <div className={styles.mmr}>
                  MY MMR : {props.mmr[0].mmr}
                </div>
                
              </div>
            </div>
            {
              props.mmr[0].mmr-props.mmr[0].tiermmr>=0 && (
                <div className={styles.explain}>티어 평균 MMR보다 {props.mmr[0].mmr-props.mmr[0].tiermmr} 높습니다.</div>
              )
              
            }
            {
              props.mmr[0].mmr-props.mmr[0].tiermmr<0 && (
                <div className={styles.explain2}>티어 평균 MMR보다 {props.mmr[0].tiermmr-props.mmr[0].mmr} 낮습니다.</div>
              )
              
            }
            
            <div className={styles.chartdiv}>
              <div className={styles.title}>MMR 변화 그래프</div>
              <LineChart
                width={250}
                height={200}
                data={props.mmrdate}
                className={styles.chart}
              >
              
                <XAxis dataKey="created_at" tickLine={false} />
                <YAxis domain={['auto', 'auto']} mirror />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mmr" stroke="#E4373C" activeDot={{ r: 8 }} />
              </LineChart>
            </div>
             

            
            </div>
             )}  

          </div>
        
          </div>
       
      </div>
  </div>
  </div>
);

MSummoner.propTypes = {
  loading: PropTypes.bool.isRequired,
  data : PropTypes.array.isRequired,
  summonername : PropTypes.string.isRequired,
  mmr : PropTypes.array.isRequired,
  mmrdate : PropTypes.array.isRequired,
};

export default MSummoner;