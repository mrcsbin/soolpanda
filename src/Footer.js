import f_logo from "./logo_font.png";


const Footer = () => {
  return (
    <Footer>
      <div className="left">
        <div className="f-logo">{f_logo}</div>
      </div>      
      <p>@copyright 7조</p>
      <div className="right">
        <p>나해성</p>
        <p>박혜리</p>
        <p>송경세</p>
        <p>전채은</p>
        <p>조성빈</p>
        <p>조한식</p>
      </div>
    </Footer>
  )
};

export default Footer;