// import { Route, Routes } from "react-router-dom";
// import React, { Component } from "react";
// import Home from "./Components/Home/index";
// import Navbar from "./Components/Navbar/Navbar";
// import Career from "./Components/Career/index";
// import Leadership from "./Components/About/Leadership/Leadership";
// import Board from "./Components/About/Leadership/Board/board";
// import Staff from "./Components/About/Leadership/Staff/Staff";
// import Educators from "./Components/About/Leadership/Educators/Educators";
// import Fellows from "./Components/About/Leadership/Fellows/Fellows";
// import OurRole from "./Components/OurRole";
// import Footer from "./Components/Footer/Footer";
// import Fellowship from "./Components/Fellowship/Fellowship";
// import Health from "./Components/Health";
// import Financials from "./Components/Financial/Financial";
// import Publications from "./Components/Financial/Publications/Publications";
// import Faqs from "./Components/Faqs";
// import Subscribebtn from "./Components/SubscribeButton/Subscribebtn";
// import Application from "./Components/Application/Application";
// import Approach from "./Components/Approach";
// import DigitalTool from "./Components/DigitalTool";
// import Impact from "./Components/Impact/Impact";
// import Environemnt from "./Components/Environment";
// import Livelihood from "./Components/Livelihood";
// import Moonshots from "./Components/Moonshots/Moonshots";
// import WaysToGive from "./Components/WaysToGive/WaysToGive";
// import MakeAGift from "./Components/MakeAGift/MakeAGift";
// import Donate from "./Components/Donate/Donate";
// import WhyDonate from "./Components/WhyDonate/WhyDonate";
// import BeingAVolunteer from "./Components/BeingAVolunteer/BeingAVolunteer";
// import PodCasts from "./Components/PodCasts";
// import ContactUs from "./Components/ContactUs";
// import OurSupporter from "./Components/OurSupporter";
// import "./styles.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDropdownVisible: false,
//     };
//   }

//   handleDropdownVisibility = (isVisible) => {
//     this.setState({ isDropdownVisible: isVisible });
//   };

//   render() {
//     const { isDropdownVisible } = this.state;
//     return (
//       <div className="App">
//         <Navbar
//           isDropdownVisible={isDropdownVisible}
//           handleDropdownVisibility={this.handleDropdownVisibility}
//         />
//         <Routes isDropdownVisible={isDropdownVisible}>
//           <Route path="/" element={<Home />}></Route>
//           <Route
//             path="/about"
//             element={<OurRole isDropdownVisible={isDropdownVisible} />}
//           ></Route>

//           <Route
//             path="/leadership"
//             element={<Leadership isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/career"
//             element={<Career isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/board"
//             element={<Board isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/staff"
//             element={<Staff isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/educators"
//             element={<Educators isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/fellows"
//             element={<Fellows isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/fellowship"
//             element={<Fellowship isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/our-role"
//             element={<OurRole isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/health"
//             element={<Health isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/financials"
//             element={<Financials isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/faqs"
//             element={<Faqs isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/publications"
//             element={<Publications isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/application"
//             element={<Application isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/approach"
//             element={<Approach isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/digital-tool"
//             element={<DigitalTool isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/impact"
//             element={<Impact isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/environment"
//             element={<Environemnt isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/livelihood"
//             element={<Livelihood isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/moonshots"
//             element={<Moonshots isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/make-a-gift"
//             element={<MakeAGift isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/ways-to-give"
//             element={<WaysToGive isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/donate"
//             element={<Donate isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/why-donate"
//             element={<WhyDonate isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/being-a-volunteer"
//             element={<BeingAVolunteer />}
//           ></Route>
//           <Route
//             path="/podcasts"
//             element={<PodCasts isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/contact-us"
//             element={<ContactUs isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//           <Route
//             path="/our-supporter"
//             element={<OurSupporter isDropdownVisible={isDropdownVisible} />}
//           ></Route>
//         </Routes>

//         <Subscribebtn />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Home from "./Components/Home/index";
import Navbar from "./Components/Navbar/Navbar";
import Career from "./Components/Career/index";
import Leadership from "./Components/About/Leadership/Leadership";
import Board from "./Components/About/Leadership/Board/board";
import Staff from "./Components/About/Leadership/Staff/Staff";
import Educators from "./Components/About/Leadership/Educators/Educators";
import Fellows from "./Components/About/Leadership/Fellows/Fellows";
import OurRole from "./Components/OurRole";
import Footer from "./Components/Footer/Footer";
import Fellowship from "./Components/Fellowship/Fellowship";
import Health from "./Components/Health";
import Financials from "./Components/Financial/Financial";
import Publications from "./Components/Financial/Publications/Publications";
import Faqs from "./Components/Faqs";
import Subscribebtn from "./Components/SubscribeButton/Subscribebtn";
import Application from "./Components/Application/Application";
import Approach from "./Components/Approach";
import DigitalTool from "./Components/DigitalTool";
import Impact from "./Components/Impact/Impact";
import Environemnt from "./Components/Environment";
import Livelihood from "./Components/Livelihood";
import Moonshots from "./Components/Moonshots/Moonshots";
import WaysToGive from "./Components/WaysToGive/WaysToGive";
import MakeAGift from "./Components/MakeAGift/MakeAGift";
import Donate from "./Components/Donate/Donate";
import WhyDonate from "./Components/WhyDonate/WhyDonate";
import BeingAVolunteer from "./Components/BeingAVolunteer/BeingAVolunteer";
import PodCasts from "./Components/PodCasts";
import ContactUs from "./Components/ContactUs";
import OurSupporter from "./Components/OurSupporter";
import Education from "./Components/Education";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<OurRole />}></Route>
          <Route path="/leadership" element={<Leadership />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/staff" element={<Staff />}></Route>
          <Route path="/educators" element={<Educators />}></Route>
          <Route path="/fellows" element={<Fellows />}></Route>
          <Route path="/fellowship" element={<Fellowship />}></Route>
          <Route path="/our-role" element={<OurRole />}></Route>
          <Route path="/health" element={<Health />}></Route>
          <Route path="/financials" element={<Financials />}></Route>
          <Route path="/faqs" element={<Faqs />}></Route>
          <Route path="/publications" element={<Publications />}></Route>
          <Route path="/application" element={<Application />}></Route>
          <Route path="/approach" element={<Approach />}></Route>
          <Route path="/digital-tool" element={<DigitalTool />}></Route>
          <Route path="/impact" element={<Impact />}></Route>
          <Route path="/environment" element={<Environemnt />}></Route>
          <Route path="/livelihood" element={<Livelihood />}></Route>
          <Route path="/moonshots" element={<Moonshots />}></Route>
          <Route path="/make-a-gift" element={<MakeAGift />}></Route>
          <Route path="/ways-to-give" element={<WaysToGive />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/why-donate" element={<WhyDonate />}></Route>
          <Route
            path="/being-a-volunteer"
            element={<BeingAVolunteer />}
          ></Route>
          <Route path="/podcasts" element={<PodCasts />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/our-supporter" element={<OurSupporter />}></Route>
          <Route path="/education" element={<Education />}></Route>
        </Routes>

        <Subscribebtn />
        <Footer />
      </div>
    );
  }
}

export default App;
