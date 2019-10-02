import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const GenderDropdown = ({gender, genderSelected}) => (
	<Dropdown>
		<Dropdown.Toggle variant="info" id="dropdown-basic">
			{gender.toUpperCase()}
		</Dropdown.Toggle>

		<Dropdown.Menu>
			{gender !== 'men' ?
				<Dropdown.Item onSelect={() => genderSelected('men')}>
					MEN
				</Dropdown.Item>
				:
				<Dropdown.Item onSelect={() => genderSelected('women')}>
					WOMEN
				</Dropdown.Item>
			}
		</Dropdown.Menu>
	</Dropdown>
)

export default GenderDropdown
