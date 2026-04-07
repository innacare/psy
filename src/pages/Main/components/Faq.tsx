import React from 'react';
import styled from 'styled-components';

const Faq = () => {
  console.log('Faq');

  return (
    <Wrapper>
      Faq
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 72rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

export default Faq;
