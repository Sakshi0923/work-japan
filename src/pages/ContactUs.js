import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const navigate = useNavigate();

  const onJobListingTextClick = useCallback(() => {
    navigate("/job-listing");
  }, [navigate]);

  const onAboutJapanTextClick = useCallback(() => {
    navigate("/about-japan");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.contactUs}>
      <div className={styles.footerContactus}>
        <div className={styles.footerContactusChild} />
        <div className={styles.contactUsEmailContainer}>
          <span className={styles.contactUsEmailContainer1}>
            <p className={styles.emailAbcgmailcom}>{`Contact Us: `}</p>
            <p className={styles.emailAbcgmailcom}>Email : abc@gmail.com</p>
            <p className={styles.emailAbcgmailcom}>Call us : 1234567890</p>
          </span>
        </div>
      </div>
      <div className={styles.navbarTech}>
        <b className={styles.jobListing} onClick={onJobListingTextClick}>
          Job Listing
        </b>
        <b className={styles.aboutJapan} onClick={onAboutJapanTextClick}>
          About Japan
        </b>
        <b className={styles.contactUs2}> Contact Us</b>
        <b className={styles.home} onClick={onHomeTextClick}>
          Home
        </b>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <img className={styles.image9Icon} alt="" src="/logo@2x.png" />
      </div>
      <div className={styles.feedbackform}>
        <div className={styles.feedbackbox}>
          <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
          <div className={styles.feedbackboxChild} />
        </div>
        <div className={styles.feedbacktext}>
          <div className={styles.feedbacktextChild} />
          <b className={styles.feedback}>Feedback</b>
        </div>
        <div className={styles.lastName}>
          <div className={styles.lastNameChild} />
          <b className={styles.lastName1}>Last Name :</b>
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionChild} />
          <b className={styles.lastName1}>Description:</b>
        </div>
        <div className={styles.firstName}>
          <div className={styles.firstNameChild} />
          <b className={styles.lastName1}>First Name :</b>
        </div>
        <div className={styles.submitButton}>
          <div className={styles.submitButtonChild} />
          <b className={styles.submit}>Submit</b>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
