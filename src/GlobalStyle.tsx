import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        background-color: ${(props) => props.theme.bgColor};
        color : ${(props) => props.theme.textColor}
    }

    svg {
        padding : 8px;
    }

    a:hover,
    li:hover,
    svg:hover {
        box-shadow: 0 2px 5px 1px ${(props) => props.theme.textColor};
        border-radius: 8px;
        cursor: pointer;
    }
`;

export default GlobalStyle;
