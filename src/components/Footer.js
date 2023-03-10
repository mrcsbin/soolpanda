import f_logo from "../images/logo_font.png";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="f-left">
        <img src={f_logo} alt=""></img>
      </div>
      <p>@copyright 7조</p>
      <div className="f-right">
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
