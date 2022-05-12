import React from "react";
import Title from "./title";
import BodyConfig from "./bodyconfig";
import Results from "./results";
import { render } from "react-dom";
import createClass from "create-react-class";

const terrainCoefficient = {
			"Flat": 15,
			"Hilly": 8,
			"Forested": 0.4,
			"Mountain": 3
		};


const App = createClass({
	getInitialState: function() {
		return {
			terrain: "Flat",
			distance: "1",
		}
	},

	handleDistanceChange: function(e) {
		this.setState({distance: e.target.value})
	},
	handleTerrainChange: function(e) {
		this.setState({terrain: e.target.value});
	},

	render: function() {
		return (
			<div>
				<Title />
				<BodyConfig
					handleTerrainChange={this.handleTerrainChange}
					handleDistanceChange={this.handleDistanceChange}
					distance={this.state.distance}
					terrain={this.state.terrain}
				/>
				<Results
						terrainCoefficient={ terrainCoefficient[this.state.terrain] }
					area={ this.state.distance }
				/>
			</div>			
		)
	}
});

render(<App />, document.querySelector("#app"));
