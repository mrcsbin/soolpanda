import styled from "styled-components";
import logo from "./logo_soolpanda.png";
import Categories from "./Categories";

const Headerblock = styled.div`
  display: flex;
  padding: 0;
  width: 80vw;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <>
      <Headerblock>
        <a href="http://localhost:3000">
          <img
            src={logo}
            alt=""
            style={{
              height: "56px",
              margin: "1rem",
            }}
          />
        </a>
      </Headerblock>
      <Headerblock>
        <Categories />
      </Headerblock>
    </>
  );
};

export default Header;
