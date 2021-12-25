import axios from "axios";
import React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import "./Header.css";
import "./Home.css";

import { useParams } from "react-router-dom";

function Home() {
  const { userEmail } = "unknown";
  return (
    <div>
      <header>
        <nav className="main-nav">
          <div className="logo">
            <img src="./images/logo4.png" alt="" />
          </div>
          <ul className="el-list">
            <li className="el">
              <Link className="el" to={`/viewFlights/${userEmail}`}>
                Our Flights
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/reserved/${userEmail}`}>
                My Reservations
              </Link>
            </li>
            <li className="el">
              <Link className="el" to="/search">
                Search
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/wishlist/${userEmail}`}>
                WISHLIST
              </Link>
            </li>
            <li className="el">
              <Link className="el" to={`/profile/${userEmail}`}>
                MY PROFILE
              </Link>
            </li>
          </ul>
          <ul className="el-list2">
            <li className="el">
              <Link className="el" to="/login">
                Login
              </Link>
            </li>
            <span>/</span>
            <li className="el">
              <Link className="el" to="/register">
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="main-container">
        <div className="intro">
          <div className="intro-caption">
            <p className="intro-quote">Its time to travel the world!</p>
            <p className="intro-quote-small">
              The world is now YOURS, enjoy our airlines
            </p>
          </div>
        </div>
        <div className="connective">
          <h1>About Us</h1>
          <hr className="line" />
        </div>
        <div className="about-main">
          <div className="about-paragraph">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos explicabo ab corporis iusto voluptas adipisci
              praesentium ad laborum rerum nobis, quia dolores, soluta odio
              fugit quisquam debitis enim magni. Ullam! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Dignissimos explicabo ab
              corporis iusto voluptas adipisci praesentium ad laborum rerum
              nobis, quiadolores, soluta odio fugit quisquam debitis enim magni.
              Ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos explicabo ab corporis iusto voluptas adipisci
              praesentium ad laborum rerum nobis, quia dolores, soluta odio
              fugit quisquam debitis enim magni. Ullam!
            </p>
          </div>
          <div className="about-img">
            <img src="./images/airplan4.jpg" alt="" />
          </div>
        </div>
        <div className="connective">
          <h1>Special Lines</h1>
          <hr className="line" />
        </div>
        <div className="main-courses">
          <div className="program">
            <div className="photo">
              <img src="./images/nature.jpg" alt="" />
            </div>
            <div className="desc">
              <h3>Georgia</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                modi cupiditate, aut itaque, ut corrupti, nam velit molestiae
                earum laudantium alias dolorum nobis officiis quia atque
                mollitia quo provident voluptates.
              </p>
            </div>
          </div>

          <div className="program">
            <div className="photo">
              <img src="./images/city.jpg" alt="" />
            </div>
            <div className="desc">
              <h3>New York</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                modi cupiditate, aut itaque, ut corrupti, nam velit molestiae
                earum laudantium alias dolorum nobis officiis quia atque
                mollitia quo provident voluptates.
              </p>
            </div>
          </div>

          <div className="program">
            <div className="photo">
              <img src="./images/mal.jpg" alt="" />
            </div>
            <div className="desc">
              <h3>Maldives</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                modi cupiditate, aut itaque, ut corrupti, nam velit molestiae
                earum laudantium alias dolorum nobis officiis quia atque
                mollitia quo provident voluptates.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="connective">
        <h1>Contact Us</h1>
        <hr class="line" />
      </div>
      <div class="contact-info-main">
        <div class="office">
          <h2>Header Office:</h2>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            The location of the GAir office
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            +02 70506958
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            0100200300 - 01225687423
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-open"
              viewBox="0 0 16 16"
            >
              <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
            </svg>
            info@Gair.com
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            future-academy4782
          </p>
        </div>
        <div class="why">
          <h2>why GAir?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            corrupti laboriosam mollitia dolores ab sequi nisi aliquam, unde
            minima alias possimus eum veniam rerum, cumque delectus
            necessitatibus ipsa? Amet, esse.consectetur adipisicing elit. Nemo,
            corrupti laboriosam mollitia dolores ab sequi nisi aliquam,veniam
            rerum, cumque delectus necessitatibus ipsa? Amet, esse.consectetur
            adipisicing elit adipisicing elit. Nemo, corrupti laboriosam
            mollitia dolores ab sequi nisi aliquam,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
