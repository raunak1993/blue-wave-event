import React from "react"
import styles from "./carousel.module.css"

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      activeIndex: 0,
      transition: "transform  ease-in-out"
    }
    this.interval = ""
  }

  componentDidMount() {
    let newSlides = React.Children.toArray(this.props.children)

    const firstElement = newSlides[0]
    const lastElement = newSlides[newSlides.length - 1]
    newSlides = [lastElement, ...newSlides, firstElement]

    this.setState({
      data: newSlides,
      activeIndex: 1
    })

    this.interval = setInterval(this.goNext, 2000)
  }
  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval)
  }
  goNext = async () => {
    await this.setState(prevState => {
      const { activeIndex, data } = prevState

      if (activeIndex === data.length - 2) {
        setTimeout(() => {
          this.setState({
            activeIndex: 1,
            transition: "none"
          })
        }, 500)

        return {
          activeIndex: activeIndex + 1,
          transition: "transform  ease-in-out"

        }
      }

      return {
        activeIndex: activeIndex + 1,
        transition: "transform  ease-in-out"
      }
    })
  }

  render() {
    const { activeIndex, data, transition } = this.state
    return (
      <div className={styles.container}>
        {data.map((child, index) => {
          return React.cloneElement(child, {
            style: {
              transform: `translateX(${-activeIndex * 100}%)`,
              transition
            },
            key: `${child}-${index}`
          })
        })}
      </div>
    )
  }
}

export default Carousel
