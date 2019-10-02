import React, {Component} from 'react'
import D3Chart from './D3Chart'

class ChartWrapper extends Component {
	componentDidMount() {
		this.setState({
			chart: new D3Chart(this.refs.chart)
		})
	}

	shouldComponentUpdate() {
		return false
	}

	// This method is now deprecated.
	// "UNSAFE_" prefix suppresses the WARNING from console
	UNSAFE_componentWillReceiveProps(nextProps) {
		this.state.chart.update(nextProps.gender)
	}

	render() {
		return (<div ref="chart"></div>);
	}
}

export default ChartWrapper;
