import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="Home">
      <section className="home-showcase">
        <div className="home-video-container">
          <video
            src="https://traversymedia.com/downloads/video.mov"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="home-content">
          <h1 className="home-h1">Shoot For The Stars</h1>
          <h3>Full screen video landing page</h3>
          <Link to="/login" className="home-btn home-a">
            Login
          </Link>
        </div>
      </section>

      {/* <section id="about">
        <h1>About</h1>
        <p>
          This is a landing page with a full screen video background. Feel free
          to use this landing page in your projects. keep adding sections,
          change the video, content , etc
        </p>

        <h2>Follow Me On Social Media</h2>

        <div class="social">
          <a href="https://twitter.com/traversymedia" target="_blank">
            <i class="fab fa-twitter fa-3x"></i>
          </a>
          <a href="https://facebook.com/traversymedia" target="_blank">
            <i class="fab fa-facebook fa-3x"></i>
          </a>
          <a href="https://github.com/bradtraversy" target="_blank">
            <i class="fab fa-github fa-3x"></i>
          </a>
          <a href="https://www.linkedin.com/in/bradtraversy" target="_blank">
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
