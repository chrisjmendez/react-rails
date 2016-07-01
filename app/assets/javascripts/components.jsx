class Main extends React.Component {
	render(){
		return (
			<h1>Hello from Main</h1>
		);
	}
}


class NewMain extends React.Component {
	render(){
		return (
			<h2>Hello from NewMain</h2>
		);
	}
}

let documentReady = () => {
	ReactDOM.render(
		<Main />,
		document.getElementById('react')
	)
};


$(documentReady);
