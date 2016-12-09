import React from "react"

const Stat = React.createClass({

	getInitialState: function(){
		return {
			flashing: false
		}
	},
	// flashprop: this.state.isFlashing:int ? <p className="flashing"> : <p>

	render: function(){
		return <p>{this.props.statName}: {this.props.statVal}</p>
	}
})

export default Stat