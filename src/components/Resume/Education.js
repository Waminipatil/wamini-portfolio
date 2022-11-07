import React from "react";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline_wrapper}>
        <div className={styles.timeline_icon}>
          <FaGraduationCap />
        </div>
        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              SavitriBai Phule Pune University,Pune
            </h4>
            <p className={styles.timeline_date}>2016-2020</p>
            <p className={styles.timeline_desc}>
              Bachelor of Engineering (Computer)
            </p>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              Delhi Public School,Bhilai
            </h4>
            <p className={styles.timeline_date}>2014-2016</p>
            <p className={styles.timeline_desc}>12th (CBSE Board)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
