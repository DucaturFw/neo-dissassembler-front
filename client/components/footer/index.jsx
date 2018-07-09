import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
  render() {
    return (
      <Wrap>
        <a href="https://ducatur.com/"> Created with ❤️ by Ducatur on 🌎 in 2018</a>
      </Wrap>
    );
  }
}
export default Footer;

const Wrap = styled.div`
  display: flex;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto Mono;
  color: white;
`;
