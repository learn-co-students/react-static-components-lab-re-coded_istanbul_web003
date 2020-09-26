import React, { Component } from 'react';
import CatComponent from "./CatComponent"
import GraceHopperQuoteComponent from "./GraceHopperQuoteComponent.js"
import MouseComponent from "./MouseComponent"
// import hoverEffect from "./hoverEffect"


class App extends Component {
	render() {
 
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
				{/* <hoverEffect /> */}
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
