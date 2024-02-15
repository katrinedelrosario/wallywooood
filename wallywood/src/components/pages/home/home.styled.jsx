import styled from "styled-components"

const HomeStyle = styled.section`
    display: inline;
    div {
        display: inline-block;
        padding: 0;
        margin: 0 0 1.5em 0;
        position: relative;
        max-width: 50%;

        figure {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: left;

        img {
        max-width: auto;
        max-height: 27vh;
        align-items: left;
        }
        figcaption {
            align-items: right;
            padding-left: 1em;
            h2 {
                font-size: 20px;
                margin-top: 0;
                max-width: 90%;
                color: ${props => props.theme.colors.tertiary};
            }
            p {
                font-size: 14px;
                color: ${props => props.theme.colors.tertiary};
                max-width: 90%;
                margin-bottom: 2em;
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

export default HomeStyle