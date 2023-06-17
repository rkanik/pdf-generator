import React from 'react'

const SimulatorForm = ({ form: { field } }) => {
	return field ? (
		<form className='simulator-form' data-type='simulator'>
			<table>
				<thead>
					<tr>
						<th className="text-center red" rowSpan="3" style={{ width: "10%" }}>
							<img
								style={{
									height: '150px',
									width: '150px',
									objectFit: 'cover',
									objectPosition: 'center'
								}} 
								src={field.logo} alt="Brand Logo" 
							/>
						</th>
						<th className="text-center red bold" rowSpan="2" style={{ width: "80%" }}>
							<span className="text-md">{field.clientName}</span> <br />
							<span>{field.department}</span>
						</th>
						<th className="red" style={{ width: "10%" }}>{field.header1}</th>
					</tr>
					<tr>
						<th className="red">{field.header2}</th>
					</tr>
					<tr>
						<th className="text-center bold">Simulator Training / Check Record</th>
						<th className="red">{field.header3}</th>
					</tr>
				</thead>
			</table>

			<table>
				<tbody>
					<tr>
						<td className="text-center red bold">{field.formName}</td>
					</tr>
				</tbody>
			</table>

			<table>
				<tbody>
					<tr>
						<td colSpan="4" className="p-0 border-0">
							<table className="m-0">
								<tbody>
									<tr>
										<td>
											<div className="flex">
												<label>Date:</label>
												<input type="text" />
											</div>
										</td>
										<td>
											<div className="flex">
												<label>Duration:</label>
												<input type="text" defaultValue={field.duration} />
											</div>
										</td>
										<td>
											<div className="flex">
												<label>Fleet:</label>
												<input type="text" defaultValue={field.fleetName} />
											</div>
										</td>
									</tr>
									<tr>
										<td className="border-bottom-0">
											<div className="flex">
												<label>Sim Type:</label>
												<input type="text" />
											</div>
										</td>
										<td className="border-bottom-0">
											<div className="flex">
												<label>Sim Location:</label>
												<input type="text" />
											</div>
										</td>
										<td className="border-bottom-0">
											<div className="flex">
												<label>Sim Registration:</label>
												<input type="text" />
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
					<tr>
						<td style={{ width: "22.5%" }}>
							<div className="flex">
								<label>Trainer ID:</label>
								<input type="text" />
							</div>
						</td>
						<td style={{ width: "22.5%" }}>
							<div className="flex">
								<label>Rank</label>
								<input type="text" />
							</div>
						</td>
						<td style={{ width: "32.5%" }}>
							<div className="flex">
								<label>Name</label>
								<input type="text" />
							</div>
						</td>
						<td className="adjust-left" style={{ width: "22.5%" }}>
							<div className="flex">
								<label>Licence</label>
								<input type="text" />
							</div>
						</td>
					</tr>
					<tr>
						<td style={{ width: "22.5%" }}>
							<div className="flex">
								<label>Trainee ID:</label>
								<input type="text" />
							</div>
						</td>
						<td style={{ width: "22.5%" }}>
							<div className="flex">
								<label>Rank</label>
								<input type="text" />
							</div>
						</td>
						<td style={{ width: "32.5%" }}>
							<div className="flex">
								<label>Name</label>
								<input type="text" />
							</div>
						</td>
						<td className="adjust-left" style={{ width: "22.5%" }}>
							<div className="flex">
								<label>Licence</label>
								<input type="text" />
							</div>
						</td>
					</tr>
				</tbody>
			</table>

			<table>
				<thead>
					<tr>
						<th colSpan="2" className="bold text-center">EVALUATION OF NON TECHNICAL COMPETENCIES</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="bold" style={{ width: "20%" }}>Knowledge</td>
						<td className="text-xs bold">Application of procedures (AOP), Technical knowledge (TK)</td>
					</tr>
					<tr>
						<td colSpan="2" style={{ width: "80%" }}>
							<textarea name="knowledge" rows="16"></textarea>
						</td>
					</tr>
					<tr>
						<td className="bold" style={{ width: "20%" }}>Skill</td>
						<td className="text-xs bold">Flight path – Automation (FPA),  Flight path – Manual (FPM)</td>
					</tr>
					<tr>
						<td colSpan="2" style={{ width: "80%" }}>
							<textarea name="skill" rows="16"></textarea>
						</td>
					</tr>
					<tr>
						<td className="bold" style={{ width: "20%" }}>Attitude</td>
						<td className="text-xs bold">Communication (COM), Leadership & teamwork (LTW), Decision making (DM),
					Situational awareness (SA), Workload management (WLM)</td>
					</tr>
					<tr>
						<td colSpan="2" style={{ width: "80%" }}>
							<textarea name="attitude" rows="16"></textarea>
						</td>
					</tr>
				</tbody>
			</table>

			<table>
				<thead>
					<tr>
						<th colSpan="10" className="bold text-center">NON TECHNICAL COMPETENCIES GRADES</th>
					</tr>
					<tr>
						<th className="bold" style={{ width: "10%" }}>APP</th>
						<th className="bold" style={{ width: "10%" }}>TKN</th>
						<th className="bold" style={{ width: "10%" }}>FPA</th>
						<th className="bold" style={{ width: "10%" }}>FPM</th>
						<th className="bold" style={{ width: "10%" }}>COM</th>
						<th className="bold" style={{ width: "10%" }}>LTW</th>
						<th className="bold" style={{ width: "10%" }}>PDM</th>
						<th className="bold" style={{ width: "10%" }}>SAW</th>
						<th className="bold" style={{ width: "10%" }}>WLM</th>
						<th className="bold" style={{ width: "10%" }}>Cal Score</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><input name="APP" /></td>
						<td><input name="TKN" /></td>
						<td><input name="FPA" /></td>
						<td><input name="FPM" /></td>
						<td><input name="COM" /></td>
						<td><input name="LTW" /></td>
						<td><input name="PDM" /></td>
						<td><input name="SAW" /></td>
						<td><input name="WLM" /></td>
						<td><input name="Cal Score" /></td>
					</tr>
				</tbody>
			</table>

			<table>
				<tbody>
					<tr>
						<td className="bold text-center">
							OVERALL REMARKS
					<textarea name="overall remarks" rows="18"></textarea>
						</td>
					</tr>
				</tbody>
			</table>

			<table>
				<thead>
					<tr>
						<th colSpan="5" className="text-center bold">EVALUATION OF TECHNICAL COMPETENCIES</th>
					</tr>
					<tr>
						<th className="bold" style={{ width: "5%" }}>#</th>
						<th className="bold" style={{ width: "20%" }}>Phase</th>
						<th className="bold" style={{ width: "60%" }}>Technical competency</th>
						<th className="bold" style={{ width: "5%" }}>Sit</th>
						<th className="bold" style={{ width: "10%" }}>Score</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
					<tr>
						<td><input type="number" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
						<td><input type="text" /></td>
					</tr>
				</tbody>
			</table>

			<table>
				<thead>
					<tr>
						<th colSpan="4" className="bold text-center">RESULT (Tick one)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="bold bg-light-green" style={{ width: "35%" }}>Satisfactory</td>
						<td style={{ width: "15%" }}></td>
						<td className="bold bg-light-pink" style={{ width: "35%" }}>Unsatisfactory</td>
						<td style={{ width: "15%" }}></td>
					</tr>
				</tbody>
			</table>

			<table>
				<tbody>
					<tr>
						<td style={{ width: "40%" }}>
							<label>Trainees signature:</label>
							<textarea rows="8"></textarea>
						</td>
						<td style={{ width: "60%" }}>
							<label>Trainers Signature:</label>
							<textarea rows="8"></textarea>
						</td>
					</tr>
				</tbody>
			</table>

			<table>
				<tbody>
					<tr>
						<td className="bold text-center">
							Regulatory Information
							  <textarea rows="28" defaultValue={field.regularity}></textarea>
						</td>
					</tr>
				</tbody>
			</table>

			<table>
				<tbody>
					<tr>
						<td className="bold text-center">
							Training manager’s remarks:
					<textarea rows="8"></textarea>
						</td>
					</tr>
				</tbody>
			</table>

			<table>
				<tbody>
					<tr>
						<td className="bold" style={{ width: "10%" }}>Rank:</td>
						<td style={{ width: "45%" }}><input type="text" /></td>
						<td rowSpan="3" style={{ width: "45%" }}><textarea rows="6"></textarea></td>
					</tr>
					<tr>
						<td className="bold" style={{ width: "10%" }}>Name:</td>
						<td style={{ width: "45%" }}><input type="text" /></td>
					</tr>
					<tr>
						<td className="bold" style={{ width: "10%" }}>Date:</td>
						<td style={{ width: "45%" }}><input type="text" /></td>
					</tr>
				</tbody>
			</table>
		</form>
	) : null
}

export default SimulatorForm