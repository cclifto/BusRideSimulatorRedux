import Backbone from 'backbone'
import _ from 'underscore'
import Stats from './stats'


const STORE = _.extend(Backbone.Events,{
	_data: {
		attack: Stats.attack,
		defense: Stats.defense,
		intelligence: Stats.intelligence,
		speed: Stats.speed,
		love: Stats.love,
		miles_traveled: Stats.miles_traveled,
		event_display_text: "",
		event_choices:[],
		event_showing: false
	},
	_getData: function() {
		return this._data
	},
	_get: function(key) {
		return this._data[key]
	},
	_emitChange: function() {
		this.trigger('STOREChange')
	},
	_set: function(obj) {
		this._data = _.extend(this._data, obj)
		this._emitChange()
	}
})

window.STORE = STORE

export default STORE