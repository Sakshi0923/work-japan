import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutJapan.module.css";

const AboutJapan = () => {
  const navigate = useNavigate();

  const onJobListingTextClick = useCallback(() => {
    navigate("/job-listing");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onContactUsEmailClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className={styles.aboutJapan}>
      <div className={styles.navbar}>
        <img className={styles.image3Icon} alt="" src="/logo@2x.png" />
        <b className={styles.jobListing} onClick={onJobListingTextClick}>
          Job Listing
        </b>
        <b className={styles.aboutJapan1}>About Japan</b>
        <b className={styles.contactUs} onClick={onContactUsTextClick}>
          {" "}
          Contact Us
        </b>
        <b className={styles.home}>Home</b>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      </div>
      <img className={styles.aboutJapanIcon} alt="" src="/about-japan@2x.png" />
      <img className={styles.logosIcon} alt="" src="/logos@2x.png" />
      <div className={styles.text}>
        <div className={styles.technology}>TECHNOLOGY</div>
        <div className={styles.food}>FOOD</div>
        <div className={styles.culture}>CULTURE</div>
      </div>
      <div className={styles.footerAboutjapan}>
        <div className={styles.footerAboutjapanChild} />
        <div
          className={styles.contactUsEmailContainer}
          onClick={onContactUsEmailClick}
        >
          <span className={styles.contactUsEmailContainer1}>
            <p className={styles.emailAbcgmailcom}>{`Contact Us: `}</p>
            <p className={styles.emailAbcgmailcom}>Email : abc@gmail.com</p>
            <p className={styles.emailAbcgmailcom}>Call us : 1234567890</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutJapan;
