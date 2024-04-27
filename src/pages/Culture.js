import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Culture.module.css";

const Culture = () => {
  const navigate = useNavigate();

  const onContactUsEmailClick = useCallback(() => {
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
    <div className={styles.culture}>
      <div className={styles.footerCulture}>
        <div className={styles.footerCultureChild} />
        <div
          className={styles.contactUsEmailContainer}
          onClick={onContactUsEmailClick}
        >
          <span className={styles.contactUsEmailContainer1}>
            <p className={styles.contactUs}>{`Contact Us: `}</p>
            <p className={styles.contactUs}>Email : abc@gmail.com</p>
            <p className={styles.contactUs}>Call us : 1234567890</p>
          </span>
        </div>
      </div>
      <div className={styles.navbarCulture}>
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
        <img className={styles.image5Icon} alt="" src="/logo@2x.png" />
      </div>
      <div className={styles.logoCulture}>
        <img className={styles.cultureIcon} alt="" src="/culture@2x.png" />
        <div className={styles.culture1}>CULTURE</div>
      </div>
      <div className={styles.textboxCulture}>
        <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
        <div className={styles.textboxCultureChild} />
        <div className={styles.japaneseCultureSeamlesslyContainer}>
          <p className={styles.contactUs}>
            Japanese culture seamlessly blends tradition with modernity, from
            serene tea ceremonies to bustling cities. Respect for nature and
            attention to detail are evident in everything from gardens to
            sushi-making.
          </p>
          <p className={styles.contactUs}>&nbsp;</p>
          <p
            className={styles.contactUs}
          >{`The kimono, a timeless garment, symbolizes elegance and tradition, worn on occasions like weddings and festivals. Adorned with symbolic motifs, it reflects Japan's rich cultural heritage. `}</p>
          <p className={styles.contactUs}>&nbsp;</p>
          <p className={styles.contactUs}>
            Festivals like cherry blossom viewing and summer matsuri celebrate
            its rich heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Culture;
