import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';
import Search from 'semantic-ui-react/dist/commonjs/modules/Search/Search';
import ducatur from './logo.png';

class Header extends React.Component {
  render() {
    return (
      <Wrap>
        <Logo>
          <img src={ducatur} />
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
    margin-bottom:40px;
`;

const Logo = styled.div` 
    padding: 20px 50px;
    flex: 0 0 250px;
`;
const SearchInput = styled.div`
padding: 30px 50px;
    flex: 0 0 250px;
`;
