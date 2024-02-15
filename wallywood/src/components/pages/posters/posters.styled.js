// import styled from 'styled-components'

// export const PostersStyle = styled.div`
// 	display: flex;
// 	margin: 0;
// 	padding: 0;
// 	section {
// 		border-right: 1px solid ${props => props.theme.colors.secondary};
// 		padding-right: 5em;
// 		h2 {
// 		color: ${props => props.theme.colors.primary};
// 		font-size: 20px;
// 		padding-bottom: 0.5em;
// 		margin-top: -0.5em;
// 	}

// 	h4 {
// 		color: ${props => props.theme.colors.primary};
// 		font: 14px semibold;
// 		margin: 0;
// 	}
// 	}

// 	ul {
// 		text-align: left;
// 		margin: 0;
// 		padding: 0;
// 		li {
// 			list-style: none;
// 			font-size: 14px;
// 			a {
// 				text-transform: none;
// 				text-decoration: none;
// 				font: normal normal normal 14px/19px;
// 				color: ${props => props.theme.colors.secondary};

// 				&:hover {
// 					color: ${props => props.theme.colors.primary};

// 				}
// 			}
// 		}
// 	}
// `

import styled from "styled-components";

export const PostersStyle = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
	color: ${props => props.theme.colors.primary};
    
    // GENRE LIST
.genre{
    h2{
        font-size: 1.5em;
		margin-top: 0;
    }
    p{
        margin: 0;
		font: 14px semibold;
    }
    ul{
        list-style-type: none;
        padding: 0;
        margin: 0 3em 3em 0;

		li {
			margin-top: 0.2em;
			font-size: 14px;
			a{
        text-decoration: none;
        color: ${props => props.theme.colors.secondary};
        width: 100%;
        &:hover{
            color: ${props => props.theme.colors.primary};
        }
    }
		}

    }
}


    // DIV WITH IMAGES
    .box{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
        gap: 1em;
        margin: 0 0 1em 4em;
        border-left: solid 1px ${props => props.theme.colors.quinary};
		
        .images{
            margin-left: 4em;
        img{
            max-width: 100%;


        }
        h2, h3{
            margin: 0 0 0.5em 0;
            text-align: center;
			font-size: 20px;
			max-height: 90%;
			::first-letter {
                text-transform: capitalize;

            }
        }
    }
        div{
            text-align: center;
            button {
            font-size: 1em;
            color: ${props => props.theme.colors.tertiary};
            border: 1px solid ${props => props.theme.colors.tertiary};
            width: 101px;
            height: 34px;
            border-radius: 3px;
            background-color: ${props => props.theme.colors.quinary};
            &:hover {
                background-color: ${props => props.theme.colors.senary};
                color: ${props => props.theme.colors.light};

            }
        }
        }
    }
`