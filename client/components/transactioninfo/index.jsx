import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import FA from 'react-fontawesome';
import { fetchTransactionsInfo } from '../../actions/transactioninfo';

const data = [
    {
        address: 'AZT9LnyHkFgmvwPpbeLVmzWko6KwZi8Tjo',
        value: '100 NEO',
    },
    {
        address: 'AZT9LnyHkFgmvwPpbeLVmzWko6KwZi8Tjo',
        value: '100 NEO',
    }, {
        address: 'AZT9LnyHkFgmvwPpbeLVmzWko6KwZi8Tjo',
        value: '100 NEO',
    },


];

class TransactionsInfo extends React.Component {
    componentWillMount() {
        this.props.fetchTransactionsInfo(this.props.match.params.id);
    }


    info(scriptinfo, disassemble) {
        return (
            <Fragment>
                <Title>
                    <h2>
                        Transaction info
            {' '}
                    </h2>
                    <h3>
                        {scriptinfo.type}
                        {' '}
                        |
            {' '}
                        {scriptinfo.txid}
                        {' '}
                    </h3>
                </Title>
                <BlockInfo>
                    <Block>
                        <h4>
                        List of instructions
              {' '}
                        </h4>
                        <BlockInstructions>
                            {disassemble.map(item => (
                                <p>
                                    {item.name}
                                </p>
                            ))}
                        </BlockInstructions>
                    </Block>
                    <Block>
                        <TitleStatus>
                            Status : SUCCESS
            </TitleStatus>
                        <Scroll>
                            <Table > 
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>
                                        Sent to
                      {' '}
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>
                                            Amount
                    </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {data.map(item => (
                                        <Table.Row>
                                            <Table.Cell>
                                                {item.address}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item.value}
                                            </Table.Cell>
                                        </Table.Row>))}

                                </Table.Body>
                            </Table>
                        </Scroll>
                    </Block>

                </BlockInfo>
            </Fragment>
        );
    }

    render() {
        const { scriptinfo, disassemble } = this.props;
        if (this.props.preloader) {
            return (
                <Wrap>
                    <LoadingWrap>
                        <FA name="spinner" size="4x" spin />
                    </LoadingWrap>
                </Wrap>
            );
        }
        return (
            <Wrap>
                {this.info(scriptinfo, disassemble)}

            </Wrap>
        );
    }
}

const mapDispatchtoProps = dispatch => bindActionCreators({ fetchTransactionsInfo }, dispatch);
const mapStateToProps = state => ({
    preloader: state.transactioninfo.preloader,
    scriptinfo: state.transactioninfo.scriptinfo,
    disassemble: state.transactioninfo.disassemble,
});


export default connect(mapStateToProps, mapDispatchtoProps)(TransactionsInfo);
const LoadingWrap = styled.div`
    height: 400px;
    text-align: center;
    padding-top: 200px;
    
`;

const Wrap = styled.div`
 width:100%;
 color:white;
`;

const Title = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;
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
`;
const TitleStatus = styled.span`
color:green;
font-size:22px;
margin-bottom:50px;
`;

