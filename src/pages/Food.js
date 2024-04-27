import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Food.module.css";

const Food = () => {
  const navigate = useNavigate();

  const onFooterFoodContainerClick = useCallback(() => {
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
    <div className={styles.food}>
      <div className={styles.footerFood} onClick={onFooterFoodContainerClick}>
        <div className={styles.footerFoodChild} />
        <div className={styles.contactUsEmailContainer}>
          <span className={styles.contactUsEmailContainer1}>
            <p className={styles.contactUs}>{`Contact Us: `}</p>
            <p className={styles.contactUs}>Email : abc@gmail.com</p>
            <p className={styles.contactUs}>Call us : 1234567890</p>
          </span>
        </div>
      </div>
      <div className={styles.navbarFood}>
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
      <div className={styles.logoFood}>
        <img className={styles.foodIcon} alt="" src="/food@2x.png" />
        <div className={styles.food1}>FOOD</div>
      </div>
      <div className={styles.textBoxFood}>
        <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
        <div className={styles.textBoxFoodChild} />
        <div className={styles.japaneseCuisineOffersContainer}>
          <p
            className={styles.contactUs}
          >{`Japanese cuisine offers a diverse array of flavors and textures, captivating food enthusiasts worldwide. From delicate sushi and savory ramen to crispy tempura, each dish showcases meticulous craftsmanship and attention to detail. `}</p>
          <p className={styles.contactUs}>&nbsp;</p>
          <p
            className={styles.contactUs}
          >{`Traditional ingredients like fresh seafood, rice, and seasonal vegetables form the basis of Japanese cooking. `}</p>
          <p className={styles.contactUs}>&nbsp;</p>
          <p
            className={styles.contactUs}
          >{`The art of presentation is equally important, with dishes arranged to please both the eyes and palate. `}</p>
        </div>
      </div>
    </div>
  );
};

export default Food;
