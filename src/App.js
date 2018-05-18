import React, { Component } from 'react';
import logo from './logo.svg';
import ReactClass from 'create-react-class';
import './App.css';

const GreeterMessage = ReactClass({
	render: function() {
		return (
			<div className='greeter-message'>
				<h1>Some H1</h1>
				<p>Some paragraph</p>
			</div>
		)
	}
});

const Greeter = ReactClass({
	getDefaultProps: function() {
		return {
			name: 'Hello Default',
			message: 'This is a form component! default'
		}
	},
	getInitialState: function() {
		return {
			name: this.props.name
		}
	},
	onButtonClick: function(e) {
		const nameRef = this.refs.name;
		const name = nameRef.value;
		nameRef.value = '';

		if(typeof name === 'string' && name.length > 0) {
			this.setState({
				name: name
			});
		}

		e.preventDefault();
	},
  render: function() {
  	const aName = this.state.name;
  	const aMessage = this.props.message;

		return(
  		<div>
				<h1 className="App-title">{aName} React</h1>
				<p>{aMessage}</p>

				<GreeterMessage />
				<p>Hello</p>

				<form onSubmit={this.onButtonClick}>
					<input type='text' ref='name' />
					<button type='submit'>Submit</button>
				</form>
			</div>
		)
	}
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
					<Greeter name='Hello' message='This is a form component!' />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
