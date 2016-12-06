import React from "react"
import Footer from './footer'
import STORE from '../store'
import stats from '../stats'
import ACTIONS from '../actions'
import Events from './events'


var AppView = React.createClass({	

	componentWillMount: function(){
		STORE.on("STOREChange",()=>{
			this.setState(STORE._getData())
		})
	},

	getInitialState: function(){
		return STORE._getData()
	},

	render: function(){
		// FIRST, BEFORE ANY OTHER WORK
		// you need to champagne-waterfall your initial state down to the components that need it
		// and render accordingly in those components.
		return (
			<div className="body">
				<div className="main-container">
					<div className="textbox">
						<p>You have taken your seat on the bus. You've got a long road ahead of you.</p>
					</div>
					<div className="game-container">
						<Events choices={this.state.event_choices} display_text={this.state.event_display_text} showing={this.state.event_showing} />
						<div className="option-box">
							<button onClick={ACTIONS._readBook}>Read Book</button>
							<button onClick={ACTIONS._talkToNeighbor}>Talk to Neighbor</button>
							<button onClick={ACTIONS._exercise}>Work Out</button>
							<button onClick={ACTIONS._doNothing}>Do Nothing</button>
						</div>
						<div className="status-container">
							<div className="stats">
								<p>ATK: {this.state.attack}</p>
								<p>DEF: {this.state.defense}</p>
								<p>INT: {this.state.intelligence}</p>
								<p>SPD: {this.state.speed}</p>
								<p>LUV: {this.state.love}</p>
								<p>Miles Traveled: {this.state.miles_traveled}</p>
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