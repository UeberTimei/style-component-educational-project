import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Console from './components/Console';
import Flex from './components/Flex';
import Title from './components/Title';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: darkslategray;
`

const App = () => {
  return (
    <AppWrapper>
      <Flex justify='center'>
        <Title >Console cmd 2022. ÜberTimei</Title>
      </Flex>
      <Flex direction="column" m='20px 0'>
        <Console />
        <Button self='flex-end' outlined color='darkkhaki'>bebras</Button>
      </Flex>
    </AppWrapper>
  );
};

export default App;