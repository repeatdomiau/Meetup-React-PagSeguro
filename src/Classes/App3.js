import React, { Component } from 'react';

class App3 extends Component {

  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
  }

  componentWillMount() {
    this.setState({ valor: 10 });
  }

  componentWillUnmount() {
    this.setState({});
  }

  addOne() {
    const currrent = this.state.valor;
    this.setState({ valor : currrent + 1 });
  }

  buttonStyle(){
    return {
      padding : 10,
      border : '1px solid silver',
      backgroundColor: '#f1f1f1',
      cursor: 'pointer'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.valor}</h1>
        <buton onClick={this.addOne} style={this.buttonStyle()}>click</buton>
      </div>
    );
  }
}

export default App3;