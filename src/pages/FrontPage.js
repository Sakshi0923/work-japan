import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrontPage.module.css";

const FrontPage = () => {
  const navigate = useNavigate();

  const onFrontPageContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onJobListingTextClick = useCallback(() => {
    navigate("/job-listing");
  }, [navigate]);

  const onAboutJapanTextClick = useCallback(() => {
    navigate("/about-japan");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onContactUsClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className={styles.frontpage} onClick={onFrontPageContainerClick}>
      <img
        className={styles.icon}
        alt=""
        src="/1@2x.png"
        data-scroll-to="image"
      />
      <div className={styles.headline}>
        <div className={styles.headlineChild} />
        <b className={styles.exploreJobOpportunities}>
          Explore Job opportunities in Japan!
        </b>
      </div>
      <div className={styles.navbar}>
        <b className={styles.jobListing} onClick={onJobListingTextClick}>
          Job Listing
        </b>
        <b className={styles.aboutJapan} onClick={onAboutJapanTextClick}>
          About Japan
        </b>
        <b className={styles.contactUs} onClick={onContactUsTextClick}>
          {" "}
          Contact Us
        </b>
        <b className={styles.home}>Home</b>
        <img className={styles.icon1} alt="" src="/icon@2x.png" />
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <div className={styles.frontpageChild} />
      <div className={styles.frontpageItem} />
      <b className={styles.contactUsContainer} onClick={onContactUsClick}>
        <p className={styles.emailAbcgmailcom}>Contact Us :</p>
        <p className={styles.emailAbcgmailcom}>Email : abc@gmail.com</p>
        <p className={styles.emailAbcgmailcom}>Contact no : 1234567890</p>
      </b>
    </div>
  );
};

export default FrontPage;
