input.onButtonPressed(Button.A, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    160,
    SuperBit.enMotors.M2,
    -250
    )
    basic.pause(2000)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    250,
    SuperBit.enMotors.M2,
    -160
    )
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorStopAll()
})
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
