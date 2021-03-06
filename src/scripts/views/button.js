import React from 'react'

const Button = React.createClass({
	getInitialState: function() {
		return {
			cooldownWidth: 0,
			buttonAvailable: true
		}
	},

	_concludeCooldown: function() {
		this.setState({
			buttonAvailable: true
		})
	},

	_getWidthChange: function() {
		return 1600/this.props.cooldownTime
	},

	_initCooldown: function(event) {
		//exit if disabled
		if (!this.state.buttonAvailable) {
			console.log('button unavailable')
			return 
		}

		//action to modify store
		this.props.action()
		
		//cooldown animation
		this.setState({
			buttonAvailable: false,
			cooldownWidth: 100
		})

		var reduceCooldown = () => {
			console.log('reducing cooldown')
			if (this.state.cooldownWidth > 0) {
				this.setState({
					cooldownWidth: this.state.cooldownWidth - this._getWidthChange()
				})
				setTimeout(reduceCooldown,17)
				return
			}
			this._concludeCooldown()
		}
		setTimeout(reduceCooldown, 17)
	},

	render: function() {
		var cooldownStyle = {width: this.state.cooldownWidth + '%'}
		return (
			<button className={this.state.buttonAvailable ? '' : 'disabled'} onClick={this._initCooldown}>
				{this.props.text}
				<div style={cooldownStyle} className="cooldown"></div>
			</button>
			)
	}
})

export default Button