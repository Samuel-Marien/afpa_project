import React from 'react'
import PropTypes from 'prop-types'

import Carousel from 'react-bootstrap/Carousel'

const MiddleCarousel = (props) => {
  const { src, alt, src1, alt1, src2, alt2 } = props
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={src}
          alt={alt}
          style={{ height: '500px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={src1}
          alt={alt1}
          style={{ height: '500px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={src2}
          alt={alt2}
          style={{ height: '500px' }}
        />
      </Carousel.Item>
    </Carousel>
  )
}

MiddleCarousel.propTypes = {
  src: PropTypes.string
}

MiddleCarousel.propTypes = {
  alt: PropTypes.string
}

MiddleCarousel.propTypes = {
  src1: PropTypes.string
}

MiddleCarousel.propTypes = {
  alt1: PropTypes.string
}

MiddleCarousel.propTypes = {
  src2: PropTypes.string
}

MiddleCarousel.propTypes = {
  alt2: PropTypes.string
}
export default MiddleCarousel
