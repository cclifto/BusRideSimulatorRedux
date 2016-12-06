import STORE from "./store"
import TextAndChoices from "./textandchoices"
//below is the import syntax when importing something by name from a file,
//and that thing is not the default export


var ACTIONS = {
	_incrementMiles: function(input){
		console.log("okie dokie")
		STORE._set({
			miles_traveled: STORE._get('miles_traveled') + input	
		})
		if(STORE._data.miles_traveled >= 10){
			ACTIONS._triggerDevil()
		}
	},

	_readBook: function(buttonValue){
		console.log("reading")
		STORE._set({
			intelligence: STORE._data.intelligence + 1
		})
		ACTIONS._incrementMiles(1)
	},

	_talkToNeighbor: function(buttonValue){
		STORE._set({
			love: STORE._data.love + 3
		})
		ACTIONS._incrementMiles(3)
	},

	_exercise: function(buttonValue){
		STORE._set({
			attack: STORE._data.attack + 1
		})
		ACTIONS._incrementMiles(1)
	},

	_doNothing: function(buttonValue){
		ACTIONS._incrementMiles(1)
	},

	_triggerDevil: function(){
		STORE._set({
			event_display_text: TextAndChoices.devil.display_text,
			event_choices: TextAndChoices.devil.choices.buttonText,
			event_showing: true
		})
	}
}
export default ACTIONS