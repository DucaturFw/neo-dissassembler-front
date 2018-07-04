import React from "react";
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';
import FA from 'react-fontawesome';
const data = [
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    },
    {
        type: 'contract',
        transaction: '8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c',
        time: '04-07-2018 | 15:30:05'
    }
]

class Transactions extends React.Component {
    state = {
        loading: true,
    }

    componentWillMount() {
        this.setState({
            loading: false
        })
    }


    get table() {
        return (
            <Scroll>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Transaction id</Table.HeaderCell>
                        <Table.HeaderCell >Completed on</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    {data.map((item) => {
                        return(
                        <Table.Row>
                            <Table.Cell>{item.type}</Table.Cell>
                            <Table.Cell>
                            <StyledLink
                        to={'/'}
                       
                    >
                        {item.transaction}
                    </StyledLink></Table.Cell>
                            <Table.Cell >{item.time}</Table.Cell>
                        </Table.Row>);
                    })}

                </Table.Body>
              
            </Table>
            </Scroll>
        );
    }

    render() {

        if (this.state.loading) {
            return (
                <Wrap>
                    <LoadingWrap>
                        <FA name="spinner" size="4x" spin />
                    </LoadingWrap>
                </Wrap>
            )
        }
        return (
            <Wrap>
                {this.table}

            </Wrap>
        )
    }
}
export default withRouter(Transactions);
const LoadingWrap = styled.div`
    height: 400px;
    text-align: center;
    padding-top: 200px;
`;

const Wrap = styled.div`
 width:60rem;

`;
const Scroll = styled.div`
overflow-x: hidden;
height:75vh;
`
const StyledLink = styled(Link)`
    color: ${props => props.active ? '#8BE7FF' : '#6987B9'};
    &:hover, &:active {
        color: #8BE7FF;
        text-decoration: none;
    }
`;