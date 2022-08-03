import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
display: flex;
flex-direction: ${({direction}) => direction || 'row'};
align-items: ${({items}) => items || 'stretch'};
justify-content: ${({justify}) => justify || 'stretch'};
margin: ${({m}) => m || '0'};
padding: ${({p}) => p || '0'}
`

const Flex = (props) => {
    return <StyledFlex {...props}/>
};

export default Flex;