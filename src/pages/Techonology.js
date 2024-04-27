import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Techonology.module.css";

const Techonology = () => {
  const navigate = useNavigate();

  const onFooterTechnologyContainerClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onJobListingTextClick = useCallback(() => {
    navigate("/job-listing");
  }, [navigate]);

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
    <div className={styles.techonology}>
      <div
        className={styles.footerTechnology}
        onClick={onFooterTechnologyContainerClick}
      >
        <div className={styles.footerTechnologyChild} />
        <div className={styles.contactUsEmailContainer}>
          <span className={styles.contactUsEmailContainer1}>
            <p className={styles.contactUs}>{`Contact Us: `}</p>
            <p className={styles.contactUs}>Email : abc@gmail.com</p>
            <p className={styles.contactUs}>Call us : 1234567890</p>
          </span>
        </div>
      </div>
      <div className={styles.textboxTech}>
        <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
        <div className={styles.textboxTechChild} />
        <div className={styles.japanIsRenownedContainer}>
          <p className={styles.contactUs}>
            Japan is renowned for its cutting-edge technology, shaping global
            innovations across various sectors.
          </p>
          <p className={styles.contactUs}>&nbsp;</p>
          <p className={styles.contactUs}>
            From robotics and automotive engineering to electronics and
            high-speed trains,Japanese technology sets the standard for
            precision and efficiency.
          </p>
          <p className={styles.contactUs}>&nbsp;</p>
          <p className={styles.japansCommitmentTo}>
            {" "}
            Japan's commitment to innovation is evident in advancements like
            humanoid robots, bullet trains (Shinkansen), and the development of
            supercomputers.
          </p>
        </div>
      </div>
      <div className={styles.logoTech}>
        <img className={styles.stIcon} alt="" src="/st@2x.png" />
        <div className={styles.technology}>TECHNOLOGY</div>
      </div>
      <div className={styles.navbarTech}>
        <b className={styles.jobListing} onClick={onJobListingTextClick}>
          Job Listing
        </b>
        <b className={styles.aboutJapan} onClick={onAboutJapanTextClick}>
          About Japan
        </b>
        <b className={styles.contactUs1} onClick={onContactUsTextClick}>
          {" "}
          Contact Us
        </b>
        <b className={styles.home} onClick={onHomeTextClick}>
          Home
        </b>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <img className={styles.image9Icon} alt="" src="/logo@2x.png" />
      </div>
    </div>
  );
};

export default Techonology;
