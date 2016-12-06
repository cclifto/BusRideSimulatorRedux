import React from "react"
import TextAndChoices from "../textandchoices"

var Events = React.createClass({


//Study the below code... maybe I'll find the answer to the button choice puzzle

// 	_handleChoice: function(eventObj) {
// 		var buttonValue = eventObj.target.value
// 		ACTIONS.nextScript(buttonValue)
// 	},

// 	_getButtonsArray: function() {
// 		var choiceObjs = this.props.choices
// 		var buttsArray = []
// 		for(var i = 0; i < choiceObjs.length; i++){
// 			buttsArray.push(<button onClick={this._handleChoice} value={choiceObjs[i].buttonValue}>{choiceObjs[i].buttonText}</button>)
// 		}
// 		return buttsArray
// 	},


// 	render: function(){
// 		console.log(this, "these are buttons")
// 		return (
// 			<footer>
// 				{this._getButtonsArray()}
// 				{/*this.props.choices.map(buttonObj => <button value={buttonObj.buttonValue}>{buttonObj.buttonText}</button>)*/}
// 			</footer>
// 			)
// 	}
// })



	render: function(){
		var classString = "event-box"
		if(!this.props.showing){
			classString += " hidden"
		}
		return(
			<div className={classString}>
				<div className="event-content">
					<p>{this.props.display_text}</p>
					<button choices={this.props.choices}/>
				</div>
			</div>
		)
	}
})

export default Events

