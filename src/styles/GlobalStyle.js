import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --dark-slate-gray: #2F4858;
        --platinum: #E6E6E6;

    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    html {
        font-size: 10px;
    }
    body {
        font-size: 1.6rem;
        font-family: 'Open Sans', sans-serif;
        color: var(--dark-slate-gray);
        background-color: #f2f2f2;
    }
`;

export default GlobalStyle;
