import React, { Component } from "react";
import Roster from "./components/Roster";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Roster</h1>
				<Roster />
			</div>
		);
	}
}

export default App;
