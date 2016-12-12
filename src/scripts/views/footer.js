import React from "react"

var Footer = React.createClass({
	render: function(){
		return (
			<footer>
				<div className="options">
					<button onClick={ACTIONS._showSaveEvent}>save</button>
					<button onClick={ACTIONS._showLoadEvent}>load</button>
				</div>
				<nav>
				<p>Bus Ride Simulator Redux by Conner Clifton</p>
				<p>github</p>
				</nav>
			</footer>
			)
	}
})

export default Footer