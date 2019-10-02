import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const capitlize = word => word.charAt(0).toUpperCase() + word.slice(1)

const GenderDropdown = ({gender, genderSelected}) => (
	<Dropdown>
		<Dropdown.Toggle variant="info" id="dropdown-basic">
			{capitlize(gender)}
		</Dropdown.Toggle>

		<Dropdown.Menu>
			{gender !== 'men' ?
				<Dropdown.Item onSelect={() => genderSelected('men')}>
					Men
				</Dropdown.Item>
				:
				<Dropdown.Item onSelect={() => genderSelected('women')}>
					Women
				</Dropdown.Item>
			}
		</Dropdown.Menu>
	</Dropdown>
)

export default GenderDropdown
