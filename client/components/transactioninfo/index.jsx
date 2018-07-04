import React, { Fragment } from "react";
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';
import FA from 'react-fontawesome';

const data = [
    {
        address: 'AZT9LnyHkFgmvwPpbeLVmzWko6KwZi8Tjo',
        value: '100 NEO'
    },
    {
        address: 'AZT9LnyHkFgmvwPpbeLVmzWko6KwZi8Tjo',
        value: '100 NEO'
    }, {
        address: 'AZT9LnyHkFgmvwPpbeLVmzWko6KwZi8Tjo',
        value: '100 NEO'
    },
    
   
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


    get info() {
        return (
            <Fragment>
                <Title>
                    <h2>Transaction info </h2>
                    <h3>Contract|8fb4a8c32b71f71db65acbb9e24d9a560f8d3ea8199c3cba4ea2b9ca6c21604c </h3>
                </Title>
                < BlockInfo >
                    <Block>
                        <h4>Список инструкций </h4>
                        <BlockInstructions>
                            <p>Инструкция1 </p>
                            <p>Инструкция1 </p>
                            <p>Инструкция1 </p>
                       
                        </BlockInstructions>
                    </Block>
                    <Block>
                        <TitleStatus>
                            Статус : SUCCESS
                    </TitleStatus>
                    <Scroll>
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Получатель </Table.HeaderCell>
                                    <Table.HeaderCell>Количество</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {data.map((item) => {
                                    return (
                                        <Table.Row>
                                            <Table.Cell >{item.address}</Table.Cell>
                                            <Table.Cell >{item.value}</Table.Cell>
                                        </Table.Row>);
                                })}

                            </Table.Body>
                        </Table>
                        </Scroll>
                    </Block>

                </ BlockInfo >
            </Fragment>
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
                {this.info}

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
 width:100%;
 color:white;
 font-size:1em;
`;

const Title = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const BlockInfo = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
margin-top:40px;
`;
const Block = styled.div`
display:flex;
flex-direction:column;
`;
const BlockInstructions = styled.div`
padding:10px 20px ;
margin-top:20px;
display:flex;
flex-direction:column;
border: solid white 4px; 
height: 45vh;
width: 30rem;
overflow-x: scroll;
`;
const Scroll = styled.div`
overflow-x: scroll;
height:40vh;
`
const TitleStatus = styled.span`
color:green;
font-size:22px;
margin-bottom:50px;
`;

const StyledLink = styled(Link) `
    color: ${props => props.active ? '#8BE7FF' : '#6987B9'};
    &:hover, &:active {
        color: #8BE7FF;
        text-decoration: none;
    }
`;