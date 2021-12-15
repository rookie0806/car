import React from "react";
import PropTypes from "prop-types";
import {Router,Link } from "react-router-dom";
import styles from "./styles.module.scss";
import ReactApexChart from 'react-apexcharts'
import SimpleImageSlider from "react-simple-image-slider";
const MSummary = (props, context) => (
  <div className={styles.main}>
      <div className={styles.content}>
        {props.loading && (
          <>
          <div className={styles.title}>
            <span className={styles.bigTitle}>수리내역 조회</span>
            <span className={styles.samllTitle}>차량번호로 수리진행 내역을 조회할 수 있습니다.</span>
          </div>
          <div className={styles.lookup}>
            <input pattern="[0-9]+" className={styles.inputtext} name="cn" maxlength="20" placeholder="차량번호 전체를 입력해주세요"  onChange={props.handleInputChange}/>
            <button className={styles.lookupButton}  onClick={props.handleSubmit}>조회하기</button>
          </div>
          {props.warning && (
            <span className={styles.warning}>해당하는 수리내역을 찾을 수 없습니다.</span>
          )}
          </>
          )
        }
        {!props.loading && (
          <>
          <div className={styles.selectBox}>
          <label className={styles.selecttext}>수리 일자 선택</label>
          <select className={styles.selectDate} onChange={props.selectOnChange}>
              {props.data.map((data,i) => (
                <option
                  key={i}
                  value={i}
                >
                  {data.date}
                </option>
              ))}
          </select>
          </div>
          <div className={styles.imageBox}>
            {props.show && (
              <SimpleImageSlider
              width={300}
              height={200}
              images={props.image}
              showBullets={true}
              loop={true}
              autoPlay={true}
              slideDuration={0.5}
            />
            )}
            
          </div>
          
          </>
          )
        }
        
      </div>
  </div>
  
);

MSummary.propTypes = {
  series : PropTypes.array.isRequired,
  options : PropTypes.array.isRequired,
  loading:PropTypes.bool.isRequired,
  warning:PropTypes.bool.isRequired,
  summary : PropTypes.object.isRequired,
  onKeyPress:PropTypes.func.isRequired,
  image : PropTypes.array.isRequired,
  onClick:PropTypes.func.isRequired,
  handleInputChange:PropTypes.func.isRequired,
  selectOnChange:PropTypes.func.isRequired,
  handleSubmit:PropTypes.func.isRequired,
  show:PropTypes.bool.isRequired,
};

export default MSummary;