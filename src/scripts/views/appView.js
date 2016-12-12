import React from "react"
import Footer from './footer'
import STORE from '../store'
import ACTIONS from '../actions'
import Events from './events'
import Button from "./button"
import Stat from "./stat"

Array.prototype.includes = function(el) {
	return this.indexOf(el) !== -1
}

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
					<div className="text-box">
						<p>You have taken your seat on the bus. You've got a long road ahead of you.</p>
					</div>
					<div className="game-container">
						<div className="option-box">
							<Button cooldownTime={2000} text={'Read Book'} action={ACTIONS._readBook} />
							<Button cooldownTime={3000} text={'Talk To Neighbor'} action={ACTIONS._talkToNeighbor} />
							<Button cooldownTime={4000} text={'Work Out'} action={ACTIONS._exercise} />
							<Button cooldownTime={1000} text={'Do Nothing'} action={ACTIONS._doNothing} />
						</div>
					</div>
					<Status {...this.state} />
				</div>
				<Footer />
				<Events 
					choices={this.state.event_choices} 
					display_text={this.state.event_display_text} 
					showing={this.state.event_showing} 
					/>
			</div>
		)
	}
})

const Status = React.createClass({

	render: function(){
		var stats = ['ATK','DEF','INT','LUV', 'Miles Traveled']
		var statComponents = stats.map(statStr => <Stat statVal={this.props[statStr]} statName={statStr} />)
		return(
			<div className="status-container">
				<div className="stats">
					{statComponents}
				</div>
				<div className="inventory">
					<p>Book</p>
					<p>Lunch</p>
					<p>Wrench</p>
					<p>Exercise Trainer</p>
				</div>
			</div>
		)
	}
})

export default AppView