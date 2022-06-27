const identityPlayer = ({ name, firstName, lastName, dateOfBirth, nationality, position, shirtNumber }) => {
	const render = () => {
		return `
			  <table class="table-auto ">
				  <thead>
				    <tr>
				    </tr>
				  </thead>
				  <tbody class ="border-0">
				    <tr>
				      <td>Name Player</td>
				      <td>${name}</td>
				    </tr>
				    <tr>
				      <td>First Name</td>
				      <td>${firstName}</td>
				    </tr>
				    <tr>
				      <td>Last Name</td>
				      <td>${lastName}</td>
				    </tr>
				    <tr>
				      <td>Date of Birth</td>
				      <td>${dateOfBirth}</td>
				    </tr>
				    <tr>
				      <td>Nationality</td>
				      <td>${nationality}</td>
				    </tr>
				    <tr>
				      <td>Position</td>
				      <td>${position}</td>
				    </tr>
				    <tr>
				      <td>Shirt Number</td>
				      <td>${shirtNumber}</td>
				    </tr>
				  </tbody>
				</table>`;
	};

	return render();
}

export default identityPlayer;