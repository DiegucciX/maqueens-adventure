input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pa_lante = !(pa_lante)
    if (pa_lante) {
        radio.sendNumber(0)
    } else {
        radio.sendNumber(1)
    }
})
let pa_lante = false
radio.setGroup(40)
basic.forever(function () {
	
})
basic.forever(function () {
	
})
