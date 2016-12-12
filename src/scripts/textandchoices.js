var TextAndChoices = {
	devil: {
		display_text: "You have arrived at your destination: Hell. The Devil is here and he is looking to fight. He notices you and decides he is gonna throw down",
		choices: [{buttonText: "ATTACK",
				   buttonValue: 'attack'},
				   {buttonText: "CHARM",
					buttonValue: "love"}]
	},

	save: {
		display_text: "Would you like to save your game? (pick a save slot)",
		choices: [{
			buttonText: 'slot 1',
			buttonValue: 'slot_1',
			callback: ACTIONS._saveToSlot
		}, {
			buttonText: 'cancel',
			buttonValue: 'cancel',
			callback: ACTIONS._hideEvent
			}
		]
	},

	load: {
		display_text: "Load a previous game? (pick a slot)",
		choices: [{
			buttonText: 'slot 1',
			buttonValue: 'slot_1',
			callback: ACTIONS._loadFromSlot
		}, {
			buttonText: 'cancel',
			buttonValue: 'cancel',
			callback: ACTIONS._hideEvent
			}]
	}
}

export default TextAndChoices