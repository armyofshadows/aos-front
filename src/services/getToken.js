const Axios = require("axios");
const qs = require("qs");
require("dotenv").config();

module.exports = {
	getToken: function () {
		Axios({
			method: "post",
			url: "https://us.battle.net/oauth/token",
			data: qs.stringify({
				grant_type: "client_credentials",
				client_id: process.env.CLIENT_ID,
				client_secret: process.env.CLIENT_SECRET,
			}),
		})
			.then(function (response) {
				console.log("Token Res : ", response.data);
				return response.data.access_token;
			})
			.catch((err) => {
				console.log("Token Error : ", {
					error: err.response.data.error,
					error_description: err.response.data.error_description,
					message: err.message,
				});
				console.log("Throw");
				throw err;
			});
		return "Error";
	},
};
//getToken;
