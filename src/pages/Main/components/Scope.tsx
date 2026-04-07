import React from 'react';
import styled from 'styled-components';

const Scope = () => {
  console.log('Scope');

  return (
    <Wrapper>
      Scope
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

export default Scope;
