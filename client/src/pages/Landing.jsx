import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <h1>
          job <span>tracking</span> app
        </h1>
        <p>
          I&apos;m baby ennui bespoke vegan, cray DSA tattooed 
          succulents sus skateboard retro tousled mixtape. 
          Wayfarers activated charcoal chartreuse farm-to-table, 
          selfies hot chicken disrupt offal hammock bespoke blue bottle pok pok taxidermy 8-bit. 
        </p>
        <Link
          to="/register"
          className="btn register-link"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="btn"
        >
          Login / Demo User
        </Link>
      </div>
      <img
        src={main}
        alt="job hunt"
        className="img main-img"
      />
    </Wrapper>
  )
};

export default Landing;