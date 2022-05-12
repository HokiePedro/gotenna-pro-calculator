import React from 'react';

function Results(props) {
	function BAC(bodyMass, terrainCoefficient) {
		return (terrainCoefficient) * (bodyMass);
	}

	var calculatedBAC = BAC((props.bodyMass), props.terrainCoefficient);

	const buttonbackground = {
		backgroundColor: '#1bbc35 !important',
		borderColor: '#7f7f7f !important'
	};

	return (

		<output className="row">

			<div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
				<div style={buttonbackground} className="btn btn-block btn-info button-background">
					<p className="h4">{(Math.ceil(calculatedBAC) != 1) ? "You will need " + Math.ceil(calculatedBAC) + " goTenna Pro X devices" :
						"You will need " + Math.ceil(calculatedBAC) + " goTenna Pro X device"} </p>
				</div>
			</div>
			<div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
				<div style={buttonbackground} className="btn btn-block btn-info button-background">
					<p className="h4">{(Math.ceil(calculatedBAC/30) != 1) ? "You will need " + Math.ceil(calculatedBAC/30) + " goKits" :
						"You will need " + Math.ceil(calculatedBAC/30) + " goKit"}</p>
				</div>
			</div>
		</output>)
}

export default Results;
