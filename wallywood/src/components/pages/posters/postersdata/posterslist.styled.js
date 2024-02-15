import styled from "styled-components";

export const PostersListStyle = styled.section`
	margin: 0;
	padding: 0;
    display: inline;
    max-width: 100%;
    ul {
        padding: 0;
        margin: 0 0 1.5em 1em;
        position: relative;
        display: grid; 
        grid-template-columns: repeat(3, 1fr); 
        grid-template-rows: 1fr; 
        grid-column-gap: -2em;
        grid-row-gap: 4em; 

        li {
        }
        figure {
        margin: 2em 1em;
        display: block;
        justify-content: center;
		max-width: 20%;

        img {
        max-width: auto;
        max-height: 40vh;
        display: block;
        }
        figcaption {
            align-items: center;
            position: absolute;
            display: block;
            h2 {
                font-size: 20px;
                margin-top: 0;
                max-width: 90%;
                color: ${props => props.theme.colors.tertiary};
            }
            p {
                font-size: auto;
                color: ${props => props.theme.colors.tertiary};
                max-width: 100%;
                margin-bottom: 2em;
                padding-bottom: 1em;
            }
            button {
            font-size: 16px;
            color: ${props => props.theme.colors.tertiary};
            border: 1px solid ${props => props.theme.colors.tertiary};
            position: absolute;
            max-width: 6em;
            min-height: 2em;
            align-items: left;
            border-radius: 3px;
            opacity: 1;
            bottom: 0;
            background-color: ${props => props.theme.colors.quinary};
            ::first-letter {
                text-transform: capitalize;
            }
            &:hover {
                background-color: ${props => props.theme.colors.senary};
                color: ${props => props.theme.colors.light};
            }
        }

        }
    }

    }

`
