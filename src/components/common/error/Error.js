import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  color: ${'red'};
`;

export const Error = ({error}) => (

  !error ? null : (
    <StyledError >
      {error}
    </StyledError>
  )
 
) 

export default Error;
