import React from "react";

function BodyConfig(props) {
	return <div className="form-inline well selector">
		<div className="form-group">
		<label htmlFor="body-mass">Area (Sq. Miles):&nbsp;</label>
			<input id="body-mass" className="form-control" type="number" min="1" max="1000"
				value={props.distance}
				onChange={props.handleDistanceChange} />
			<input className="form-control" type="range" min="1" max="1000"
				value={props.distance}
				onChange={props.handleDistanceChange} />
		
				</div>
		<div className="form-group">
			<label>Terrain:&nbsp;</label>
			<label className="form-control">Flat&nbsp;
				<input 
					type="radio" 
					value="Flat"
					checked={ props.terrain === "Flat" }
					onChange={props.handleTerrainChange}
				/>
			</label>
			<label className="form-control">Hilly&nbsp;
				<input 
					type="radio" 
					value="Hilly"
					checked={ props.terrain === "Hilly" }
					onChange={props.handleTerrainChange}
				/>
			</label>
			<label className="form-control">Forested&nbsp;
				<input
						type="radio"
						value="Forested"
						checked={ props.terrain === "Forested" }
						onChange={props.handleTerrainChange}
				/>
			</label>
			<label className="form-control">Mountain&nbsp;
				<input
						type="radio"
						value="Mountain"
						checked={ props.terrain === "Mountain" }
						onChange={props.handleTerrainChange}
				/>
			</label>
		</div>
	</div>
}


export default BodyConfig
