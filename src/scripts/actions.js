import STORE from "./store"
import TextAndChoices from "./textandchoices"
//below is the import syntax when importing something by name from a file,
//and that thing is not the default export


var ACTIONS = {
	_incrementMiles: function(input){
		console.log("okie dokie")
		STORE._set({
			'Miles Traveled': STORE._get('Miles Traveled') + input	
		})
		if(STORE._data['Miles Traveled'] >= 10){
			ACTIONS._triggerDevil()
		}
	},

	_readBook: function(buttonValue){
		console.log("reading")
		STORE._set({
			INT: STORE._data.INT + 1
		})
		ACTIONS._incrementMiles(1)
	},

	_talkToNeighbor: function(buttonValue){
		STORE._set({
			LUV: STORE._data.LUV + 3
		})
		ACTIONS._incrementMiles(3)
	},

	_exercise: function(buttonValue){
		STORE._set({
			ATK: STORE._data.ATK + 1
		})
		ACTIONS._incrementMiles(1)
	},

	_doNothing: function(buttonValue){
		ACTIONS._incrementMiles(1)
	},

	_triggerDevil: function(){
		STORE._set({
			event_display_text: TextAndChoices.devil.display_text,
			event_choices: TextAndChoices.devil.choices,
			event_showing: true
		})
	}
}
export default ACTIONS