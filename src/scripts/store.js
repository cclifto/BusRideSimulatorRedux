import Backbone from 'backbone'
import _ from 'underscore'
import stats from './stats'


const STORE = _.extend(Backbone.Events,{
	_data: {
		attack: stats.attack,
		defense: stats.defense,
		intelligence: stats.intelligence,
		speed: stats.speed,
		love: stats.love,
		miles_traveled: stats.miles_traveled
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

export default STORE