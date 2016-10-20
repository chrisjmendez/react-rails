import Greet from './greet';

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
			<Greet />
		);
	}
}


let documentReady = () => {
	//Render the Main class on #react
	ReactDOM.render(
		<Main />,
		document.getElementById('react')
	)
};

$(documentReady);