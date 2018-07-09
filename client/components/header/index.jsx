import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';
import ducatur from './logo.png';

class Header extends React.Component {
  render() {
    return (
      <Wrap>
        <Logo>
          <a href="https://ducatur.com/">
            <img src={ducatur} />
          </a>
        </Logo>
        <SearchInput>
          <Input style={{ width: '400px' }} focus placeholder="Search..." />
        </SearchInput>
      </Wrap>
    );
  }
}
export default withRouter(Header);

const Wrap = styled.div`
  color: white;
  font-size: 16px;
  height: 100px;
  display: flex;
  margin-bottom: 40px;
`;

const Logo = styled.div`
  padding: 20px 50px;
  flex: 0 0 250px;
`;
const SearchInput = styled.div`
  padding: 30px 50px;
  flex: 0 0 250px;
`;
