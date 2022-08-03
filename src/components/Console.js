import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';

const StyledConsol = styled.textarea`
width: 100%;
height: 70vh;
background: darkslategray;
font-size: 24px;
border: none;
color: ${props => props.color || props.theme.colors.primary};
resize: none;


&:focus{
    outline: none;
};


@media ${props => props.theme.media.phone}{
    border: 1px solid red;
}
@media ${props => props.theme.media.tablet}{
    border: 1px solid green;
}
`

const Console = ({color, ...props}) => {
    const [lines, setLines] = useState(['root@uebertimei~$'])

    const onKeyPress = e => {
        if(e.charCode === 13){
            setLines([...lines, 'root@uebertimei~$'])
        }
    }

    return (
        <Flex>
            <Flex direction='column' m='0 10px'>
                {lines.map(line => 
                    <Line color={color}>{line}</Line>
                )}
            </Flex>
            <StyledConsol onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    )
};

export default Console;