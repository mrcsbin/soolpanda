import f_logo from "./logo_font.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="left">
        <div className="f-logo">
          <img src={f_logo} alt=""></img>
        </div>
      </div>
      <p>@copyright 7조</p>
      <div className="right">
        <ul>
          <li>나해성</li>
          <li>박혜리</li>
          <li>송경세</li>
          <li>전채은</li>
          <li>조성빈</li>
          <li>조한식</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
