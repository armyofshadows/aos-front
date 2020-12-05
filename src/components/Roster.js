import React, { Component } from "react";
import Axios from "axios";
import qs from "qs";

class Roster extends Component {
	componentWillMount() {
		Axios({
			method: "post",
			url: "https://us.battle.net/oauth/token",
			data: qs.stringify({
				grant_type: "client_credentials",
				client_id: "",
				client_secret: "",
			}),
		}).then(function (response) {
			console.log("Res : ", response.data);
		});
	}
	render() {
		console.log("hey");
		return <div></div>;
	}
}

export default Roster;
