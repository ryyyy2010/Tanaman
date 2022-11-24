basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.Yes)
    } else {
        music.playTone(262, music.beat(BeatFraction.Breve))
        basic.pause(1000)
        basic.showIcon(IconNames.No)
    }
})
