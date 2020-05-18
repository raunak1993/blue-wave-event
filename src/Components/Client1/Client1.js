import React from "react"
import Carousel from "../Carousel/Carousel"
import styles from "./Client1.module.css"

class Client1 extends React.Component {
  constructor(props){
    super(props);
  
    
    this.default=props.image
    console.log(this.default);
    

    
    this.MOBILE_SCREENS = [
      {
        screen: [this.default[0], this.default[1]]
      },
      {
        screen: [this.default[1], this.default[2]]
      },
      {
        screen: [this.default[2], this.default[3]]
      },
      {
        screen: [this.default[3], this.default[4]]
      },
      {
        screen: [this.default[4], this.default[0]]
      }
    ]
    
    this.TAB_SCREENS = [
      {
        screen: [this.default[0], this.default[1], this.default[2]]
      },
      {
        screen: [this.default[1], this.default[2], this.default[3]]
      },
      {
        screen: [this.default[2], this.default[3], this.default[4]]
      },
      {
        screen: [this.default[3], this.default[4], this.default[0]]
      },
      {
        screen: [this.default[4], this.default[0], this.default[1]]
      }
    ]
    
    this.DESKTOP_SCREENS = [
      {
        screen: [this.default[0], this.default[1], this.default[2], this.default[3], this.default[4]]
      },
      {
        screen: [this.default[1], this.default[2], this.default[3], this.default[4], this.default[0]]
      },
      {
        screen: [this.default[2], this.default[3], this.default[4], this.default[0], this.default[1]]
      },
      {
        screen: [this.default[3], this.default[4], this.default[0], this.default[1], this.default[2]]
      },
      {
        screen: [this.default[4], this.default[0], this.default[1], this.default[2], this.default[3]]
      }
    ]
  }
  render() {
    return (
      <div className={styles.main}>
        {/* <div className={styles.client}>Our clients</div>
        <HorizontalDivider />
        <p className={styles.client_para}>
          SOME OF THE COMPANIES THAT EXPERIENCED OUR EVENT
        </p> */}

        {/* DEFAULT SLIDER */}
        
        <div className={styles.default}>
          <Carousel>
            {this.default.map((item, index) => (
              <div key={item} className={styles.image_box_main}>
                
                  <img className={styles.image_main} src={item} alt="client-logo" />
               
              </div>
            ))}
          </Carousel>
        </div>
              


         <div className={styles.mobile_slider}>
          <Carousel>
            {this.MOBILE_SCREENS.map((screen, index) => (
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
            {this.TAB_SCREENS.map((screen, index) => (
              <div className={styles.image_box} key={index}>
                {screen.screen.map((image, index) => (
                  <img className={styles.image} src={image} alt="client-logo" />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.desktop_slider}>
          <Carousel>
            {this.DESKTOP_SCREENS.map((screen, index) => (
              <div className={styles.image_box} key={index}>
                {screen.screen.map((image, index) => (
                  <img className={styles.image} src={image} alt="client-logo" />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
        {/*-----------------------------------------------------------------------------------*/}
      </div>
    )
  }
}
export default Client1
