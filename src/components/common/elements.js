import React from 'react';
import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
`;

export const H2 = styled.h2`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
`;

export const H3 = styled.h3`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
`;

export const H4 = styled.h4`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
`;

export const A = styled.a`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  }
`;

export const Strong = styled.strong`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  font-weight: bold;
`;

export const P = styled.p`
  font-family: 'Rajdhani', sans-serif;
`;

export const Ul = styled.ul`
    font-family: 'Rajdhani', sans-serif;
`;

export const NonStyleUl = styled.ul`
    font-family: 'Rajdhani', sans-serif;
    list-style-type: none;
`;

export const JustifiedP = ({ children }) => (
  <P style={{ textAlign: 'justify' }}>
    { children }
  </P>
)

export const CenteredP = ({ children }) => (
  <P style={{ textAlign: 'center' }}>
    { children }
  </P>
)

export const MainPanel = styled.div`
transform: translateY(-60px);
transition: all .4s ease-in;
@media (max-width: 800px) {
  transform: translateY(0px);
}
`;
