import SupportSubNav from "../Navbar/SupportSubNav/SupportSubNav";
import "./WaysToGive.css";
const WaysToGive = () => {
  return (
    <>
      <SupportSubNav />
      <div className="ways-top">
        <h1>Ways to give</h1>
      </div>
      <div className="ways-page">
        <div className="give-card">
          <div>
            <img src="https://www.colorhexa.com/ebebeb.png" alt="" />
          </div>
          <div className="give-card-text">
            <h1>Make a Gift</h1>
            <p>
              The work of the Harvard Art Museums would not be possible without
              the support of an international community of generous alumini and
              friends, includung our Friends and Fellows. Contributions help
              ensure that the museums remain an active, innovative centre for
              teaching, learning and research.
            </p>
            <a href="/">Annual Fund</a>
          </div>
        </div>
        <div className="give-card give-card-reverse">
          <div className="give-card-text">
            <h1>Friends Circle</h1>
            <p>
              By becoming a Friends Circle member, you are supporting our
              mission to make art accessiblr to everyone! Our community of
              Friends recieves unparalleled access to our collections and
              special opportunities to engage with art throughout the year.
            </p>
            <a href="/">Friends Circle Benifits</a>
            <a href="/">Free Membership</a>
          </div>
          <div>
            <img src="https://www.colorhexa.com/ebebeb.png" alt="" />
          </div>
        </div>
        <div className="give-card">
          <div>
            <img src="https://www.colorhexa.com/ebebeb.png" alt="" />
          </div>
          <div className="give-card-text">
            <h1>Fellows</h1>
            <p>
              By becoming a Friends Circle member, you are supporting our
              mission to make art accessiblr to everyone! Our community of
              Friends recieves unparalleled access to our collections and
              special opportunities to engage with art throughout the year.
            </p>
            <a href="/">Friends Circle Benifits</a>
            <a href="/">Free Membership</a>
          </div>
        </div>
        <div className="give-card give-card-reverse">
          <div className="give-card-text">
            <h1>Corporate Support</h1>
            <p>
              By becoming a Friends Circle member, you are supporting our
              mission to make art accessiblr to everyone! Our community of
              Friends recieves unparalleled access to our collections and
              special opportunities to engage with art throughout the year.
            </p>
            <a href="/">Friends Circle Benifits</a>
            <a href="/">Free Membership</a>
          </div>
          <div>
            <img src="https://www.colorhexa.com/ebebeb.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WaysToGive;
