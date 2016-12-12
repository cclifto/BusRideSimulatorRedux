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
		if(STORE._data['Miles Traveled'] >= 666){
			ACTIONS._triggerDevil()
		}
	},

	_incrementStat: function(statName) {
		var newData = {}
		newData[statName] = STORE._get(statName) + 1
		STORE._set(newData)
		STORE._set({
			flashingStats: [statName,'Miles Traveled']
		})
		STORE.trigger('flash')
		// actually set a new value for the stat
		// set the flashingStat on the store to be the stat name of what was just updated
	},

	_readBook: function(buttonValue){
		console.log("reading")
		ACTIONS._incrementStat('INT')
		ACTIONS._incrementMiles(1)
	},

	_talkToNeighbor: function(buttonValue){
		ACTIONS._incrementStat('LUV')
		ACTIONS._incrementMiles(3)
	},

	_exercise: function(buttonValue){
		ACTIONS._incrementStat('ATK')
		ACTIONS._incrementMiles(1)
	},

	_doNothing: function(buttonValue){
		ACTIONS._incrementMiles(1)
	},

	_hideEvent: function() {
		STORE._set({
			event_showing: false
		})
	},

	_saveToSlot: function(eventObj) {
		var stateAsString = JSON.stringify(STORE._getData())
		localStorage.set('busRideSimluator',stateAsString)
	},

	_unflash: function() {
		STORE._set({
			flashingStat: null
		})
	},

	//EVENTS

	_displayEvent: function(eventName) {
		STORE._set({
			event_display_text: TextAndChoices[eventName].display_text,
			event_choices: TextAndChoices[eventName].choices,
			event_showing: true
		})
	},

	_showLoadEvent: function() {
		this._displayEvent('load')
	},

	_showSaveEvent: function() {
		this._displayEvent('save')
	},

	_triggerDevil: function(){
		this._displayEvent('devil')
	},

	
}
export default ACTIONS