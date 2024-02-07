import React from "react";
import "./history.css";
import Time from "./timeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import BackToTopButton from "./backtotop";

const History = () => {
  const scrollToYear = (year) => {
    const element = document.getElementById(year);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="history-section-container">
      <div className="history-top_section">
        <div className="history-left-side">
          <div className="history-lsh1">History</div>
          <div className="history-lsh2">
            {" "}
            <div className="history-lsh21">of our </div> Firm
          </div>
        </div>
        <div className="history-right-side">
          <p className="history-subheader">
            Since our formation in 1926, Lokarpan has operated as a single
            global partnership united by a strong set of values, and the drive
            to deliver positive, enduring change.
          </p>
          <p className="history-subheader1">
            Today, we continue to combine bold strategies and transformative
            technologies to support organizations to innovate more sustainably,
            achieve lasting gains in performance, and build workforces that will
            thrive for this generation and the next.
          </p>
        </div>
      </div>
      <div className="history-jumto">Jump to :</div>

      <div className="history-buttons">
        <button onClick={() => scrollToYear("2020")}>2020's</button>

        <button>2010's</button>
        <button>2000's</button>
        <button>1990's</button>
      </div>
      <div class="history-down">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <Time />

      <BackToTopButton />
    </div>
  );
};

export default History;
