import React from "react"
import Carousel from "../Carousel/Carousel"
import HorizontalDivider from "../horizontalDivider/HorizontalDivider"
import Divider from "../Divider/Divider.js"
import styles from "./Client.module.css"

import IMG1 from "../../assets/Home/logo2.png"
import IMG2 from "../../assets/Home/logo3.jpg"
import IMG3 from "../../assets/Home/logo4.png"
import IMG4 from "../../assets/Home/logo5.png"
import IMG5 from "../../assets/Home/logo6.png"

const MOBILE_SCREENS = [
  {
    screen: [IMG1, IMG2]
  },
  {
    screen: [IMG2, IMG3]
  },
  {
    screen: [IMG3, IMG4]
  },
  {
    screen: [IMG4, IMG5]
  },
  {
    screen: [IMG5, IMG1]
  }
]

const TAB_SCREENS = [
  {
    screen: [IMG1, IMG2, IMG3]
  },
  {
    screen: [IMG2, IMG3, IMG4]
  },
  {
    screen: [IMG3, IMG4, IMG5]
  },
  {
    screen: [IMG4, IMG5, IMG1]
  },
  {
    screen: [IMG5, IMG1, IMG2]
  }
]

const DESKTOP_SCREENS = [
  {
    screen: [IMG1, IMG2, IMG3, IMG4, IMG5]
  },
  {
    screen: [IMG2, IMG3, IMG4, IMG5, IMG1]
  },
  {
    screen: [IMG3, IMG4, IMG5, IMG1, IMG2]
  },
  {
    screen: [IMG4, IMG5, IMG1, IMG2, IMG3]
  },
  {
    screen: [IMG5, IMG1, IMG2, IMG3, IMG4]
  }
]

class Client extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.client}>Our clients</div>
        <HorizontalDivider />
        <p className={styles.client_para}>
          SOME OF THE COMPANIES THAT EXPERIENCED OUR EVENT
        </p>

        {/* MOBILE SLIDER */}
        <div className={styles.mobile_slider}>
          <Carousel>
            {MOBILE_SCREENS.map((screen, index) => (
              <div key={index} className={styles.image_box}>
                {screen.screen.map((image, index) => (
                  <img className={styles.image} src={image} alt="client-logo" />
                ))}
              </div>
            ))}
          </Carousel>
        </div>

        {/* TAB and Small laptop slider */}
        <div className={styles.tab_slider}>
          <Carousel>
            {TAB_SCREENS.map((screen, index) => (
              <div className={styles.image_box} key={index}>
                {screen.screen.map((image, index) => (
                  <img className={styles.image} src={image} alt="client-logo" />
                ))}
              </div>
            ))}
          </Carousel>
        </div>

        {/* Desktop Slider */}
        <div className={styles.desktop_slider}>
          <Carousel>
            {DESKTOP_SCREENS.map((screen, index) => (
              <div className={styles.image_box} key={index}>
                {screen.screen.map((image, index) => (
                  <img className={styles.image} src={image} alt="client-logo" />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
        <HorizontalDivider />
        <Divider />
      </div>
    )
  }
}
export default Client
