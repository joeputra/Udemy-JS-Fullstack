import React, { Component } from 'react'
import Header from '../Common/Header'
import image from '../assets/img/header-bg.jpg'

// Re-useable component
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio'
import Timeline from '../Common/Timeline'
import Team from '../Common/Team'

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title='Welcome To Out Website'
          subtitle='LOCK DOWN!!!!'
          buttonText='Tell Me More'
          link='/services'
          showButton={true}
          image={image}
        />

        <Services />
        <Portfolio />
        <Timeline />
        <Team />
      </div>
    )
  }
}

export default Home
