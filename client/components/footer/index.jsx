import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
  render() {
    return (
      <Wrap>
        <p> Created by Ducatur</p>
      </Wrap>
    );
  }
}
export default Footer;

const Wrap = styled.div`
    display:flex;
    height: 30px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
`;
