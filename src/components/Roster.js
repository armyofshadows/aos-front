import React, { Component } from "react";
import { getToken } from "../services/getToken";
require("dotenv").config();


class Roster extends Component {
	render() {
		return (
			<div>
				<button onClick={getToken}>Get API TOKEN</button>
				<p>API TOKEN : </p>
			</div>
		);
	}
}

export default Roster;
