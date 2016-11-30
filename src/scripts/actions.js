import STORE from "./store"
//below is the import syntax when importing something by name from a file,
//and that thing is not the default export


var ACTIONS = {
	_readBook: function(buttonValue){
		STORE._set({
			intelligence: STORE._data.intelligence + 1,
			miles_traveled: STORE._data.miles_traveled + 1
		})
	},

	_talkToNeighbor: function(buttonValue){
		STORE._set({
			love: STORE._data.love + 3,
			miles_traveled: STORE._data.miles_traveled + 5
		})
	},

	_doNothing: function(buttonValue){
		STORE._set({
			miles_traveled: STORE._data.miles_traveled + 1
		})
	}
}
export default ACTIONS