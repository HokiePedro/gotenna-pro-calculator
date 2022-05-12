import React from 'react';

function Results(props) {

	function calc(mass, terrain){
		return (mass/terrain)**2
	}

	var calculatedBAC = BAC((props.bodyMass), props.terrainCoefficient);
	var calcGoTenna = calc(props.bodyMass,props.terrainCoefficient);

	const buttonbackground = {
		backgroundColor: '#1bbc35 !important',
		borderColor: '#7f7f7f !important'
	};

	return (

		<output className="row">

			<div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
				<div style={buttonbackground} className="btn btn-block btn-info button-background">
					<p className="h4">{(Math.ceil(calcGoTenna) != 1) ? "You will need " + Math.ceil(calcGoTenna) + " goTenna Pro X devices" :
						"You will need " + Math.ceil(calcGoTenna) + " goTenna Pro X device"} </p>
				</div>
			</div>
			<div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
				<div style={buttonbackground} className="btn btn-block btn-info button-background">
					<p className="h4">{(Math.ceil(calcGoTenna/30) != 1) ? "You will need " + Math.ceil(calcGoTenna/30) + " goKits" :
						"You will need " + Math.ceil(calcGoTenna/30) + " goKit"}</p>
				</div>
			</div>
		</output>)
}

export default Results;
