import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const GenderDropdown = ({genderSelected}) => (
	<Dropdown>
		<Dropdown.Toggle variant="info" id="dropdown-basic">
			Please Select Gender
		</Dropdown.Toggle>

		<Dropdown.Menu>
			{['Men', 'Women'].map(gender => (
				<Dropdown.Item key={gender} onSelect={() => genderSelected(gender.toLocaleLowerCase())}>
					{gender}
				</Dropdown.Item>
			))}
		</Dropdown.Menu>
	</Dropdown>
)

export default GenderDropdown
