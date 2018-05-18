import React, { Component } from 'react';
import logo from './logo.svg';
import ReactClass from 'create-react-class';
import './App.css';

const GreeterMessage = ReactClass({
	render: function () {
		const name = this.props.name;
		const message = this.props.message;

		return (
			<div className='greeter-message'>
				<h1>Some {name}!</h1>
				<p>{message}</p>
			</div>
		)
	}
});

const GreeterForm = ReactClass({
	getInitialState: function () {
		return {
			name: this.props.name,
			message: this.props.message,
		}
	},
	onFormSubmit: function (e) {
		const updates = {};
		const name = this.refs.name.value;
		const message = this.refs.message.value;

		if (name.length > 0) {
			this.refs.name.value = '';
			this.refs.message.value = '';
			updates.name = name;
			updates.message = message;
		}

		this.props.onNewName(updates);
		e.preventDefault();
	},
	render: function () {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type='text' ref='name' placeholder='Enter name' />
				<textarea ref='message' placeholder='Enter message' />
				<button type='submit'>Set form values</button>
			</form>
		)
	}
});

const Greeter = ReactClass({
	getDefaultProps: function () {
		return {
			name: 'Hello Default',
			message: 'This is a form component! default'
		}
	},
	getInitialState: function () {
		return {
			name: this.props.name,
			message: this.props.message,
		}
	},
	handleNewData: function (update) {
		this.setState({
			name: update.name,
			message: update.message,
		});
	},
	render: function () {
		const aName = this.state.name;
		const aMessage = this.state.message;

		return (
			<div>
				<h1 className="App-title">{aName} React</h1>
				<p>{aMessage}</p>

				<GreeterMessage name={aName} message={aMessage} />
				<GreeterForm onNewName={this.handleNewName} />
			</div>
		)
	}
})

class App extends Component {
	render () {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<Greeter name='Hello' message='This is a form component!'/>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
