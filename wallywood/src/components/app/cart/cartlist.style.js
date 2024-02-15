import styled from 'styled-components'

export const CartListStyle = styled.div`
	&>div {
		&:first-child, &:last-child {
			font-weight: bold;
		}
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		grid-row-gap: 0;
		padding: 0.5rem 0;
		border-bottom: solid 1px #ccc;
		}
		div {
			text-align: right;

			&:first-child {
				text-align: left;
			}
	}

.button {
-webkit-appearance: none;
display: inline-block;
border-radius: 4px;
background-color: #f4511e;
border: none;
color: #FFFFFF;
text-align: center;
font-size: 100%;
padding: 25px;
width: 155px;
transition: all 0.5s;
cursor: pointer;
margin-left: 80%;
margin-top: 2%;
}

.button span {
	cursor: pointer;
	display: inline-block;
	position: relative;
	transition: 0.5s;
}
.button span:after {
  content: ' >>' ;
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;

}
.button:hover span {
	padding-right: 22px;
}
.button:hover span:after {
	opacity: 1;
	right: 0;
	color: blue;
}


`