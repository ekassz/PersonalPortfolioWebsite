import styled from 'styled-components';

// main container
export const Container = styled.div`
  width: 90%;
  max-width: 768px;
  margin: 0 auto;
`;

// styled heading / section heading
export const SectionTitle = styled.h1`
  color:brown;
  font-weight: 600;
  position: relative;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  margin-top: 1em;

  /* &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 16px;
    background-color: var(--underline);
    z-index: -1;
  } */
`;
