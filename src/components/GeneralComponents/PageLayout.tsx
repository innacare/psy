import {FC} from 'react';
import {Outlet} from 'react-router';
import styled from 'styled-components';
import Header from 'components/GeneralComponents/Header';

const PageLayout: FC = () => (
  <Wrapper>
    <Header />
    <Outlet />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

export default PageLayout;
