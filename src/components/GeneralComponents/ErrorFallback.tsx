import {FC} from 'react';
import styled from 'styled-components';
import {FallbackProps} from 'react-error-boundary';
import {FlexCenterStyles} from 'services/GlobalStyled';
import Consts from 'services/GlobalConstants';
import {font_display_med_md} from 'theme/fonts';

const {SOMETHING_WRONG, TRY_AGAIN} = Consts;

const ErrorFallback: FC<FallbackProps> = ({resetErrorBoundary}) => (
  <Wrapper>
    <div>{SOMETHING_WRONG}:</div>
    <Button onClick={resetErrorBoundary}>{TRY_AGAIN}</Button>
  </Wrapper>
);

const Wrapper = styled.div`
  ${FlexCenterStyles};
  ${font_display_med_md};
  flex-direction: column;
  height: 100vh;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 8px 36px;
  background-color: rgb(255, 255, 255);
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export default ErrorFallback;
