import { useState, useRef, useEffect } from "react";
import "./App.css";
import bgDesktop from "./images/bg-intro-desktop.png";
import bgMobile from "./images/bg-intro-mobile.png";
import iconError from "./images/icon-error.svg";

export default function App() {
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPasword] = useState("");

  const [isActiveFirstName, setIsActiveFirstName] = useState(false);
  const [isActiveLastName, setIsActiveLastName] = useState(false);
  const [isActiveEmail, setIsActiveEmail] = useState(false);
  const [isActivePassword, setIsActivePassword] = useState(false);

  const inputRefFirstName = useRef(null);
  const inputRefLastName = useRef(null);
  const inputRefEmail = useRef(null);
  const inputReftPassword = useRef(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const submitForm = (event) => {
    event.preventDefault();

    if (inputRefFirstName.current.value === "") {
      setErrorFirstName("First Name cannot be empty");
      console.log("ERROR: First Name is empty");
      setIsActiveFirstName(true);
    } else {
      setErrorFirstName("");
      console.log("correct First Name");
      setIsActiveFirstName(false);
    }

    if (inputRefLastName.current.value === "") {
      setErrorLastName("Last Name cannot be empty");
      console.log("ERROR: Last Name is empty");
      setIsActiveLastName(true);
    } else {
      setErrorLastName("");
      console.log("correct Last Name");
      setIsActiveLastName(false);
    }

    if (inputRefEmail.current.value === "") {
      setErrorEmail("Email cannot be empty");
      console.log("ERROR: Email is empty");
      setIsActiveEmail(true);
    } else if (!isValidEmail(inputRefEmail.current.value)) {
      setErrorEmail("Looks like this is not an email");
      console.log("ERROR: Email is not valid");
      setIsActiveEmail(true);
    } else {
      setErrorEmail("");
      console.log("correct Email");
      setIsActiveEmail(false);
    }

    if (inputReftPassword.current.value === "") {
      setErrorPasword("Password cannot be empty");
      console.log("ERROR: Password is empty");
      setIsActivePassword(true);
    } else {
      setErrorPasword("");
      console.log("corect Password");
      setIsActivePassword(false);
    }
  };

  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return windowWidth;
  };

  const backgroundImage = useWindowWidth() > 875 ? bgDesktop : bgMobile;

  const iconErrorFIrstName = isActiveFirstName ? iconError : "";
  const iconErrorLastName = isActiveLastName ? iconError : "";
  const iconErrorEmail = isActiveEmail ? iconError : "";
  const iconErrorPassword = isActivePassword ? iconError : "";

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="left-content">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="right-content">
        <button>
          Try it free 7 days <span>then $20/mo. thereafter</span>
        </button>
        <div className="input-box">
          <div className="wrapper">
            <picture>
              <img src={iconErrorFIrstName} />
            </picture>
            <input
              ref={inputRefFirstName}
              type="text"
              placeholder="First Name"
              style={{
                borderColor: isActiveFirstName ? "hsl(0, 100%, 74%)" : ""
              }}
            />
            <span className="error-state">{errorFirstName}</span>
          </div>
          <div className="wrapper">
            <picture>
              <img src={iconErrorLastName} />
            </picture>
            <input
              ref={inputRefLastName}
              type="text"
              placeholder="Last Name"
              style={{
                borderColor: isActiveLastName ? "hsl(0, 100%, 74%)" : ""
              }}
            />
            <span className="error-state">{errorLastName}</span>
          </div>
          <div className="wrapper">
            <picture>
              <img src={iconErrorEmail} />
            </picture>
            <input
              ref={inputRefEmail}
              type="text"
              placeholder="Email Address"
              style={{ borderColor: isActiveEmail ? "hsl(0, 100%, 74%)" : "" }}
            />
            <span className="error-state">{errorEmail}</span>
          </div>
          <div className="wrapper">
            <picture>
              <img src={iconErrorPassword} />
            </picture>
            <input
              ref={inputReftPassword}
              type="password"
              placeholder="Password"
              style={{
                borderColor: isActivePassword ? "hsl(0, 100%, 74%)" : ""
              }}
            />
            <span className="error-state">{errorPassword}</span>
          </div>
          <button onClick={submitForm}>Claim Your free trial</button>
          <p>
            By clicking the button, you are agreeing to our{" "}
            <span>Terms and Services</span>
          </p>
        </div>
      </div>
    </div>
  );
}
