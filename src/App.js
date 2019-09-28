import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import ChartWrapper from './ChartWrapper'

function App() {
	return (
		<div className="App">
			<Navbar bg="light">
				<Navbar.Brand>Charts &amp; Co.</Navbar.Brand>
			</Navbar>
			<Container>
				<ChartWrapper />
			</Container>
		</div>
	);
}

export default App;
