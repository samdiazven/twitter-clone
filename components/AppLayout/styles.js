import css from "styled-jsx/css";
import { fonts, colors, breakpoints } from "../../styles/themes";
import { addOpacity } from "../../styles/utils";

const backgroundColor = addOpacity(colors.primary, 0.3);

export default css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  main {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
  }
  @media (min-width: ${breakpoints.desktop}) {
    main {
      width: ${breakpoints.desktop};
      height: 90vh;
    }
  }
`;

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, transparent 1px),
      radial-gradient(${backgroundColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  textarea,
  input {
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }
`;
