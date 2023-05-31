import React from 'react'
import Watch from './Watch'

const Iphone = () => {
  return (
    <div style={{ height: "100vh"}}>
      <div className="container">
      <p className="heading2">
        iPhone 14
      </p>
      <p className="sub-heading2">
        Wonderfull.
      </p>
      <div className="links">
        <a href="#" className="link1">Learn more <i className="bi bi-chevron-right arrow"></i></a>
        <a href="#" className="link2">Buy <i className="bi bi-chevron-right arrow"></i></a>
      </div>
        <img src="public/images/iphone.jpg" />
      </div>
      <Watch/>
    </div>
  )
}

export default Iphone
