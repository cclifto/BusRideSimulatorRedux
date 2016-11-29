import React from "react"
import Footer from './footer'


var AppView = React.createClass({	


	render: function(){
		console.log("this is working")
		// FIRST, BEFORE ANY OTHER WORK
		// you need to champagne-waterfall your initial state down to the components that need it
		// and render accordingly in those components.
		return (
			<div>
				<div className="main-container">
					<div className="textbox">
						<p>You have taken your seat on the bus. You've got a long road ahead of you.</p>
					</div>
					<div className="game-container">
						<div className="option-box">
							<div className="option">Read Book</div>
							<div className="option">Talk to Neighbor</div>
							<div className="option">Do Nothing</div>
						</div>
						<div className="status-container">
							<div className="stats">
								<p>ATK: 4</p>
								<p>DEF: 5</p>
								<p>INT: 4</p>
								<p>WIS: 3</p>
								<p>LUV: 1</p>
								<p>Miles Traveled: 23</p>
							</div>
							<div className="inventory">
								<p>Book</p>
								<p>Lunch</p>
								<p>Wrench</p>
								<p>Exercise Trainer</p>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
})


export default AppView