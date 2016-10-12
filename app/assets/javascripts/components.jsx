class Main extends React.Component {
	render(){
		return (
			<h1>Header 1</h1>
		);
	}
}


class NewMain extends React.Component {
	render(){
		return (
			<h2>Header 2</h2>
		);
	}
}


class NewMain2 extends React.Component {
	render(){
		return (
			<h3>Header 3</h3>
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

