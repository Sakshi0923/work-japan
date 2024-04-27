import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./JobListing.module.css";

const JobListing = () => {
  const navigate = useNavigate();

  const onAboutJapanTextClick = useCallback(() => {
    navigate("/about-japan");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.jobListing}>
      <img className={styles.icon} alt="" src="/11-1@2x.png" />
      <div className={styles.jobListingChild} />
      <div className={styles.joinUsLogo}>
        <div className={styles.needALogo}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.groupIcon1} alt="" src="/group1.svg" />
          <img className={styles.groupIcon2} alt="" src="/group2.svg" />
          <img className={styles.groupIcon3} alt="" src="/group3.svg" />
          <img className={styles.groupIcon4} alt="" src="/group4.svg" />
          <img className={styles.groupIcon5} alt="" src="/group5.svg" />
          <div className={styles.grabYourJobContainer}>
            <ul className={styles.grabYourJobFromJobHunt}>
              <li className={styles.grabYourJob}>
                Grab your Job from Job Hunt.
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <ul className={styles.grabYourJobFromJobHunt}>
              <li>Add your details to get a call.</li>
            </ul>
          </div>
        </div>
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <img className={styles.groupIcon6} alt="" src="/group6.svg" />
        <div className={styles.joinUsLogoChild} />
      </div>
      <div className={styles.joinUsLogo1}>
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
        <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
        <img className={styles.vectorIcon6} alt="" src="/vector6.svg" />
        <img className={styles.vectorIcon7} alt="" src="/vector7.svg" />
        <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
        <img className={styles.vectorIcon9} alt="" src="/vector9.svg" />
        <img className={styles.vectorIcon10} alt="" src="/vector10.svg" />
        <img className={styles.vectorIcon11} alt="" src="/vector11.svg" />
        <img className={styles.vectorIcon12} alt="" src="/vector12.svg" />
        <img className={styles.vectorIcon13} alt="" src="/vector13.svg" />
        <img className={styles.vectorIcon14} alt="" src="/vector14.svg" />
        <img className={styles.vectorIcon15} alt="" src="/vector15.svg" />
        <img className={styles.vectorIcon16} alt="" src="/vector16.svg" />
        <img className={styles.vectorIcon17} alt="" src="/vector17.svg" />
        <img className={styles.groupIcon7} alt="" src="/group7@2x.png" />
        <img className={styles.groupIcon8} alt="" src="/group8@2x.png" />
        <img className={styles.vectorIcon18} alt="" src="/vector18.svg" />
        <img className={styles.groupIcon9} alt="" src="/group9@2x.png" />
        <div className={styles.joinUsOn}>
          Join Us on your very own journey to get a job
        </div>
      </div>
      <div className={styles.navbar}>
        <b className={styles.jobListing1}>Job Listing</b>
        <b className={styles.aboutJapan} onClick={onAboutJapanTextClick}>
          About Japan
        </b>
        <b className={styles.contactUs} onClick={onContactUsTextClick}>
          {" "}
          Contact Us
        </b>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <b className={styles.home} onClick={onHomeTextClick}>
          Home
        </b>
        <img className={styles.icon1} alt="" src="/icon@2x.png" />
      </div>
    </div>
  );
};

export default JobListing;
