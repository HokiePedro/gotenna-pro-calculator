import React from 'react';

function Results(props) {
	function BAC(bodyMass, terrainCoefficient) {
		return (terrainCoefficient) * (bodyMass);
	}

	var calculatedBAC = BAC((props.bodyMass), props.terrainCoefficient);

	return (
		<output className="row">
			<div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
				<div className="btn btn-block btn-info">
					<p className="h4">You will neeed: {Math.ceil(calculatedBAC)} goTenna X Devices </p>
				</div>
			</div>
			<div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
				<div className="btn btn-block btn-info">
					<p className="h4">You will neeed: {Math.ceil(calculatedBAC/30)} Gotenna X Devices </p>
				</div>
			</div>
		</output>)
}

export default Results;
