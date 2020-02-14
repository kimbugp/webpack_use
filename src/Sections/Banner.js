import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const banner = props => {
  return (
    // Banner section start

    <div>
      <section className="banner">
        <div className="spa-img">
          <img src={require("../images/spa.png")} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-content">
                <span> spa & beauty center </span>
                <h2> Beauty and success starts here. </h2>
                <p>
                  {" "}
                  Together creeping heaven upon third dominion be upon won 't
                  darkness rule behold it created good saw after she'd Our set
                  living.{" "}
                </p>
                <Link to="#" className="btn">
                  {" "}
                  reserve now{" "}
                </Link>
                <a
                  className="video-btn"
                  data="fancybox"
                  href="https://www.youtube.com/watch?v=QWUPm0ND7HY"
                ></a>
                <i className="ti-control-play"> </i>
                <a>Watch our story </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default banner;
