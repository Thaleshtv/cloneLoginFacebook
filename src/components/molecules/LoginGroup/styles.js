import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p {
        font-size: 0.75rem;

        a {
            color: var(--text-title);
            font-weight: 600;
        }
    }
`


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--shape);
    padding: 1rem;
    gap: 1rem;

    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    .green {
        color: var(--shape);
        background-color: var(--green);
        border: 0;
        padding: 0.75rem 1rem;
        font-weight: 500;
        font-size: 1rem;
        border-radius: 0.5rem;
        align-self: center;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    p {
        text-align: center;
        a {
            color: var(--blue);
            font-weight: 400;
            font-size: 0.875rem;
        }
    }

    hr {
        border: none;
        height: 1px;
        background-color: var(--input-border); /* Modern Browsers */
    }
`