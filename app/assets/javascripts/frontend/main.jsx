import Greet from './greet.jsx';

class Main extends React.Component {
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