import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --shape: #FFFFFF;
        --background: #F0F2F5;
        --blue: #1777f2;
        --green: #42b72a;
        --text-title: #1C1E21;
        --text-input: #9B9FA6;
        --input-border: #DDDFE2;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--background);
    }


    body, input, text-area, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    
    button {
        cursor: pointer;
    }

`