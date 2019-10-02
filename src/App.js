import React, { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import ChartWrapper from './ChartWrapper'
import GenderDropdown from './GenderDropdown'

function App() {
	const [gender, setGender] = useState('men');

	return (
		<div className="App">
			<Navbar bg="light" className="justify-content-center">
				<Navbar.Brand>The World's Tallest People</Navbar.Brand>
			</Navbar>
			<Container>
				<Row>
					<Col xs={12}>
						<GenderDropdown genderSelected={setGender} gender={gender} />
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<ChartWrapper gender={gender} />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default App;
