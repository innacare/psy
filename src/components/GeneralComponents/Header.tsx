import {FC} from 'react';
import styled from 'styled-components';

const Header: FC = () => (
  <Wrapper>
    Header
  </Wrapper>
);

const Wrapper = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export default Header;
