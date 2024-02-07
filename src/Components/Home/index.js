import { Component } from "react";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import "./index.css";

const row1 = [
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1706087979/Google_da5gas.svg",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1706087979/Google_da5gas.svg",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1706087979/Google_da5gas.svg",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1706087979/Google_da5gas.svg",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1706087979/Google_da5gas.svg",
];

class Home extends Component {
  state = { isPaused: false, isAnimationPaused: false };

  handlePauseClick = () => {
    this.setState((prevState) => ({
      isPaused: !prevState.isPaused,
    }));
  };
  toggleAnimation = () => {
    this.setState((prevState) => ({
      isAnimationPaused: !prevState.isAnimationPaused,
    }));
  };

  render() {
    const { isPaused, isAnimationPaused } = this.state;
    return (
      <div className="home-container">
        <div className="home-banner">
          <p>
            Transform entire communities with your support.
            <a href="#">Take action</a>
          </p>
        </div>
        <div className="home-top-container">
          <p className="home-head1">The Mission</p>
          <h1 className="home-head3">
            Commitment beyond conventional boundaries
          </h1>
          <p className="home-para1">
            Lokarpan is India's leading non-profit with a mission to offer
            solutions to empower communities living in stress. We work to enable
            poor, rural communities to improve their social and economic
            conditions through participatory projects in health, education,
            income generation, and veterinary care.
          </p>
        </div>
        <div className="home-full-img">
          <img
            src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
            alt="home-img"
            className="home-img"
          />
          {/* Animation-section */}
        </div>

        <div className="who-we-are">
          <p className="lokarpan-head4">Our Approach</p>
          <h1 className="home-head3">
            Big change is impossible without a little help. For 27 years, we
            have worked closely with communities to identify their needs and
            aspirations in order to serve them.
          </h1>
        </div>
        <div className="row-container">
          <div className="row-element">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
              className="design-img"
            />
            <div className="under-cont">
              <h3>Understanding our approach to Rural Design Principles</h3>
              <button className="read-btn">Read Now</button>
            </div>
          </div>
          <div className="row-element">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
              className="design-img"
            />
            <div className="under-cont">
              <h3>Understanding our approach to Rural Design Principles</h3>
              <button className="read-btn">Read Now</button>
            </div>
          </div>
        </div>
        <div className="home-images-container">
          <div className="lok-head-cont">
            <p className="home-head3">The Lokarpan Fellowship</p>
            <p className="lokarpan-head4 color">
              The Lokarpan Fellowship is a pro bono program that matches
              Lokarpan employees with beneficiaries and civic entities for up to
              six months on full-time technical and research projects. Fellows
              may leave their day jobs to work alongside the organization’s
              staff to build scalable solutions, or opt for working remotely as
              a team to ensure that the work has sustained and lasting impact.
            </p>
          </div>

          <div className="images-container">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704820084/image_177_gagtm0.png"
              alt="lokarpan-image2"
              className="img2"
            />
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704820096/image_178_wjbsby.png"
              alt="lokarpan-image3"
              className="img3"
            />
          </div>
        </div>
        <div className="get-in-touch-container">
          <h3 className="home-head3">Take the next step</h3>
          <p className="lokarpan-head4">
            Join hands with us, and let's weave stories of change together.
          </p>
          <button className="get-in-touch-btn">Get in touch</button>
        </div>
        <div className="lokarpan-container">
          <p className="lokarpan-head5">Our Leadership</p>
          <h1 className="home-head3">
            Keeping people safe and making a positive impact
          </h1>
          <p className="lokarpan-para1">
            Since our formation in 1996, Lokarpan has strived to organise and
            empower rural poor to promote development as a liberating force
            aimed at social justice, economic growth and self-reliance
          </p>
        </div>
        <div className="carousal-container">
          <div className="arrows-cont">
            <button className="button" onClick={this.handlePauseClick}>
              {!isPaused ? (
                <FaRegCirclePause className="carousal-icon" />
              ) : (
                <FaRegCirclePlay className="carousal-icon" />
              )}
            </button>
          </div>
          <Marquee play={!isPaused} className="marquee">
            <div className="each-carousal">
              <div className="carousal">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  alt="Slide 1"
                  className="carousal-img"
                />
                <div className="link-cont">
                  <button className="link">Home</button>
                </div>
              </div>

              <p className="lokarpan-para2">Home</p>
            </div>

            <div className="each-carousal">
              <div className="carousal">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  alt="Slide 1"
                  className="carousal-img"
                />
                <div className="link-cont">
                  <button className="link">Education</button>
                </div>
              </div>

              <p className="lokarpan-para2">Education</p>
            </div>
            <div className="each-carousal">
              <div className="carousal">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  alt="Slide 1"
                  className="carousal-img"
                />
                <div className="link-cont">
                  <button className="link">Career</button>
                </div>
              </div>

              <p className="lokarpan-para2">Career</p>
            </div>
            <div className="each-carousal">
              <div className="carousal">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  alt="Slide 1"
                  className="carousal-img"
                />
                <div className="link-cont">
                  <button className="link">Livelihood</button>
                </div>
              </div>

              <p className="lokarpan-para2">Livelihood</p>
            </div>
          </Marquee>
        </div>
        <div className="app-container-m">
          <div className="wrapper-m">
            <h1 className="text-m">Our Supporters</h1>
            <h1 className="note-m">Follow the leaders</h1>
            <div className="marquee-m">
              <div
                className="marquee-group-m"
                style={{
                  animationPlayState: isAnimationPaused ? "paused" : "running",
                }}
              >
                {row1.map((each) => (
                  <div className="image-group-m">
                    <img src={each} className="image-m" />
                  </div>
                ))}
              </div>
              <div
                className="marquee-group-m"
                style={{
                  animationPlayState: isAnimationPaused ? "paused" : "running",
                }}
              >
                {row1.map((each) => (
                  <div className="image-group-m">
                    <img src={each} className="image-m" />
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee-m">
              <div
                className="marquee-group2-m"
                style={{
                  animationPlayState: isAnimationPaused ? "paused" : "running",
                }}
              >
                {row1.map((each) => (
                  <div className="image-group-m">
                    <img src={each} className="image-m" />
                  </div>
                ))}
              </div>
              <div
                className="marquee-group2-m"
                style={{
                  animationPlayState: isAnimationPaused ? "paused" : "running",
                }}
              >
                {row1.map((each) => (
                  <div className="image-group-m">
                    <img src={each} className="image-m" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button onClick={this.toggleAnimation} className="animation-btn-m">
            {!isAnimationPaused ? (
              <FaRegCirclePause
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              />
            ) : (
              <FaRegCirclePlay
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              />
            )}
          </button>
        </div>
        <div className="next-step-section1">
          <h1 className="lokarpan-head6">
            Keeping people safe and making a positive impact
          </h1>
          <p className="lokarpan-head4 lok">
            Since our formation in 1996, Lokarpan has strived to organise and
            empower rural poor to promote development as a liberating force
            aimed at social justice, economic growth and self-reliance
          </p>
          <a href="#">Learn More</a>
          <button type="button" className="home-donate-btn">
            Donate Now
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
