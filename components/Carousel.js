import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

const MyCarousel = (props) => {
  return (
    <Carousel fade controls={false} pause={'hover'}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel/rsz_keyboard-5017973_1920.jpg"
          alt="Second slide"
          style={{ height: '500px' }}
        />
        <Carousel.Caption>
          <h3>slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel/rsz_laptop-2620118_1920.jpg"
          alt="Third slide"
          style={{ height: '500px' }}
        />

        <Carousel.Caption>
          <h3>slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel/rsz_laptop-5842509_1920.jpg"
          alt="Fourd slide"
          style={{ height: '500px' }}
        />

        <Carousel.Caption>
          <h3>slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel/rsz_stock-1863880_1920.jpg"
          alt="Six slide"
          style={{ height: '500px' }}
        />

        <Carousel.Caption>
          <h3>slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default MyCarousel
