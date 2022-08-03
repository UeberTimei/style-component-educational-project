import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
100% {
    transform: rotateZ(360deg);
}
`

const StyledButton = styled.button`
border: none;
padding: 10px 15px;
font-size: 18px;
cursor: pointer;

&:focus{
    outlined: none;
};
&:hover{
    animation: ${rotateAnimation} 1s infinite linear;
}


align-self: ${({self}) => self || 'stretch'};
${props => props.primary && css`
    color: ${({color}) => color || 'white'};
    background: ${({bg}) => bg || 'white'};
`};

${({outlined}) => outlined && css`
    color: ${({color}) => color || 'white'};
    border: 1px solid ${({color}) => color || 'white'};
    background: transparent;
`};
`

const LargeButton = styled(StyledButton)`
font-size: 32px;
`

const Button = (props) => {
    return <StyledButton {...props}/>
};

export default Button;