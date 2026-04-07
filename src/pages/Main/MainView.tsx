import React from 'react';
import styled from 'styled-components';
import About from './components/About';
import Scope from './components/Scope';
import Price from './components/Price';
import Faq from './components/Faq';
import Contacts from './components/Contacts';

const MainView = () => {
  console.log('Main View');

  return (
    <Wrapper>
      <About />
      <Scope />
      <Price />
      <Faq />
      <Contacts />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 72rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

export default MainView;
