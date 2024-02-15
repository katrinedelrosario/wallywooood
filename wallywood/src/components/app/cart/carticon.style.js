import styled from "styled-components";

export const CartIconStyle = styled.div`
    border: solid 1px #000;

    svg {
        &:hover {
            fill: ${props => props.theme.colors.secondary};
        }
    }
`