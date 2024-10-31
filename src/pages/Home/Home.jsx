import React from 'react'
import Button from '../../components/Button/Button'
import './home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  window.scrollTo(0, 0)

  return (
    <>
      <div className="slide"></div>
      <div className="section home" data-aos="fade-up">
        <div className="color-block"></div>
        <div className="home__img">
          <div className="home__img-wrap"></div>
        </div>
        <div className="home__text">
          <div className="home__text-wrap">
            <h1>Hello, I'm
              <span>Vu Xuan An</span>
            </h1>
            <p>
              Nice to meet you! My name is Xuan An. I'm a front-end developer with over two years of experience in web
              development, specializing in creating intuitive and engaging user
              interfaces. With a strong foundation in UX/UI design, I enjoy solving
              complex problems and crafting seamless user experiences. I'm
              committed to continuous learning, exploring new technologies, and
              adopting best practices to grow as an engineer.
            </p>
            <Button
              className="portfolio-btn"
            >
              <Link to="/portfolio">
                <span className="btn-text">Portfolio</span>
                <span className="btn-icon">
                  <i className='bx bx-right-arrow-alt'></i>
                </span>
              </Link>
            </Button>
            <Button
              className="about-btn"
            >
              <Link to="/about">
                <span className="btn-text">About</span>
                <span className="btn-icon">
                  <i className='bx bx-right-arrow-alt'></i>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home