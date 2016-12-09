import Backbone from 'backbone'
import _ from 'underscore'


const STORE = _.extend(Backbone.Events,{
	_data: {
		ATK: 4,
		DEF: 5,
		INT: 4,
		SPD: 3,
		LUV: 1,
		'Miles Traveled': 0,
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