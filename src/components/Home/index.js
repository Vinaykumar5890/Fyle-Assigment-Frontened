import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import ImageSlider from '../ImageSlider'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="App">
      <div className="bg-container">
        <div>
          <p class="award-winning-text"> AWARD WINNING </p>
          <h1 class="digital-marketing-heading"> DIGITAL MARKETING AGENCY </h1>
          <p class="home-section-description">
            {' '}
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum{' '}
          </p>
          <button onClick={handleShow} className="iljh">
            CONTACT US
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/detqp9dxl/image/upload/v1717304221/hero_cduqvu.png"
          alt="image1"
          className="image1"
        />
      </div>

      <div className="slideContainer">
        <div className="bg-container">
          <div>
            <p class="award-winning-text p-size"> WHAT WE DO </p>
            <h1 class="digital-marketing-heading h-size">
              {' '}
              SERVICES PROVIDE FOR YOU{' '}
            </h1>
          </div>
          <p class="wwd-description">
            {' '}
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum{' '}
          </p>
        </div>
        <ImageSlider />

        <div class="d-flex flex-row justify-content-center">
          <div>
            <p class="award-winning-text p-size text-center"> WHY CHOOSE US </p>
            <h1 className="digital-marketing-heading h-size text-center">
              {' '}
              WHY WE ARE BEST{' '}
            </h1>
          </div>
        </div>
        <div class="WCU-section-cards-container mt-4 d-flex flex-row justify-content-center">
          <div class="WCU-section-card1 mr-5 pt-3 pl-4 pr-4" id="wcuCard1">
            <img
              src="https://res.cloudinary.com/detqp9dxl/image/upload/v1717314317/1_gnmrdx.png"
              class="card-style"
              alt="cardstyle"
            />
            <h1 class="card-heading mt-3"> Clarified Vision &amp; Target </h1>
            <p class="card-description mt-3">
              {' '}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.{' '}
            </p>
          </div>
          <div class="WCU-section-card1 pt-3 pl-4 pr-4 mr-5" id="wcuCard2">
            <img
              src="https://res.cloudinary.com/detqp9dxl/image/upload/v1717314237/2_rl1mcz.png"
              class="card-style"
              alt="cardstyle"
            />
            <h1 class="card-heading mt-3"> High Performance </h1>
            <p class="card-description mt-3">
              {' '}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.{' '}
            </p>
          </div>
          <div class="WCU-section-card1 pl-4 pt-3 pr-4 mr-5" id="wcuCard3">
            <img
              src="https://res.cloudinary.com/detqp9dxl/image/upload/v1717314237/3_ilcm4z.png"
              class="card-style"
              alt="cardstyle"
            />
            <h1 class="card-heading mt-3"> Maintain Security </h1>
            <p class="card-description mt-3">
              {' '}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.{' '}
            </p>
          </div>
          <div class="WCU-section-card1 pl-4 pr-4 pt-3" id="wcuCard4">
            <img
              src="https://res.cloudinary.com/detqp9dxl/image/upload/v1717314237/4_ztct9a.png"
              class="card-style"
              alt="cardstyle"
            />
            <h1 class="card-heading mt-3"> Better Strategy &amp; Quality </h1>
            <p class="card-description mt-3">
              {' '}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.{' '}
            </p>
          </div>
        </div>
      </div>

      <div id="OPSection" class="pt-5">
        <div class="OP-section-bg-container pt-5 pb-5">
          <div class="d-flex flex-row justify-content-center">
            <div>
              <p class="award-winning-text p-size text-center"> OUR PROJECT </p>
              <h1 class="digital-marketing-heading h-size text-center">
                {' '}
                WHY WE ARE BEST{' '}
              </h1>
            </div>
          </div>
          <div class="OP-cards-img-container d-flex flex-row justify-content-center mt-5">
            <div>
              <img
                src="https://img.freepik.com/free-photo/front-view-fresh-red-strawberries-mellow-fruits-berries-inside-plate-dark-blue-surface-berry-fruit-mellow-summer_140725-39919.jpg?t=st=1717362584~exp=1717366184~hmac=373e0d1981037e8c5211b48ec999ec0e659c40a5c91b417e6ac504606153150c&amp;w=740"
                class="OP-img-style"
                id="changableImage"
                alt="cardstyle"
              />
            </div>
            <div class="OP-cards-container ml-4">
              <div class="OP-card1 p-4" id="project1">
                <h1 class="OP-card-heading1" id="pheading1">
                  {' '}
                  Genderless Kei – Japan’s Hot{' '}
                </h1>
                <p class="OP-card-description1 mt-3" id="pdescriptiion1">
                  {' '}
                  Set to launch on the manufacturer’s new A330neo aircraft in
                  2017, it’s offering lots of{' '}
                </p>
              </div>
              <div class="OP-card p-4" id="project2">
                <h1 class="OP-card-heading" id="pheading2">
                  {' '}
                  Better Strategy &amp; Quality{' '}
                </h1>
                <p class="OP-card-description mt-3" id="pdescriptiion2">
                  {' '}
                  Set to launch on the manufacturer’s new A330neo aircraft in
                  2017, it’s offering lots of{' '}
                </p>
              </div>
              <div class="OP-card p-4" id="project3">
                <h1 class="OP-card-heading" id="pheading3">
                  {' '}
                  Genderless Kei – Japan’s Hot{' '}
                </h1>
                <p class="OP-card-description mt-3" id="pdescriptiion3">
                  {' '}
                  Set to launch on the manufacturer’s new A330neo aircraft in
                  2017, it’s offering lots of{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="EGSection" class="pt-5">
        <div class="EG-section-bg-container pt-5 pb-5">
          <div class="d-flex flex-row justify-content-center">
            <div>
              <p class="award-winning-text p-size text-center">
                {' '}
                EXPERTS GROWTHS{' '}
              </p>
              <h1 class="digital-marketing-heading ocg-size text-center">
                {' '}
                OUR COMPANY GROWTH{' '}
              </h1>
            </div>
          </div>
          <div class="EG-section-cards-container d-flex flex-row justify-content-center mt-4">
            <div class="EG-section-card p-3 text-center" id="card1">
              <img
                src="https://res.cloudinary.com/detqp9dxl/image/upload/v1717321140/heart_2_hybeeg.png"
                alt="cardstyel"
              />
              <p class="number-style mt-2"> 199 + </p>
              <p class="text-style"> Staticfied Customers </p>
            </div>
            <div class="EG-section-card p-3 text-center" id="card2">
              <img
                src="https://res.cloudinary.com/detqp9dxl/image/upload/v1717321149/clock_3_jdr79q.png"
                alt="cardstyel"
              />
              <p class="number-style mt-2"> 1591 + </p>
              <p class="text-style"> Days Of Operation </p>
            </div>
            <div class="EG-section-card p-3 text-center" id="card3">
              <img
                src="https://res.cloudinary.com/detqp9dxl/image/upload/v1717321149/Path_4402_cb2rmm.png"
                alt="cardstyel"
              />
              <p class="number-style mt-2"> 283 + </p>
              <p class="text-style"> Complete Project </p>
            </div>
            <div class="EG-section-card p-3 text-center" id="card4">
              <img
                src="https://res.cloudinary.com/detqp9dxl/image/upload/v1717321140/Path_4406_ekirdo.png"
                alt="cardstyel"
              />
              <p class="number-style mt-2"> 75 + </p>
              <p class="text-style"> Win Awards </p>
            </div>
          </div>
        </div>
      </div>

      <div id="CFSection" class="pt-5">
        <div class="CF-section-bg-container pt-5 pb-5">
          <div class="d-flex flex-row justify-content-center">
            <div>
              <p class="award-winning-text p-size text-center">
                {' '}
                CLIENT'S FEEDBACK{' '}
              </p>
              <h1 class="digital-marketing-heading1">
                {' '}
                PEOPLE SAY'S ABOUT US !{' '}
              </h1>
              <div class="CF-section-description mt-5">
                <p>
                  {' '}
                  Jannat Tumpa The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested. Sections
                  Bonorum et Malorum original.{' '}
                </p>
              </div>
              <div class="mt-5 pl-3 d-flex flex-row">
                <p class="text-style-name"> JANNAT TUMPA </p>
                <p class="pl-1 text-style-add">
                  {' '}
                  - COO, AMERIMAR ENTERPRISES, INC.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="Footer-section-bg-container d-flex flex-row justify-content-center pt-5 pb-5">
        <div class="d-flex flex-column justify-content-center">
          <img
            src="https://res.cloudinary.com/detqp9dxl/image/upload/v1717326211/Group_500_yztrwi.png"
            class="footer-img"
          />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a vertically centered modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Home
