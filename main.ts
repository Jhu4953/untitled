input.onButtonPressed(Button.A, function () {
    led.plot(x_value, y)
})
input.onButtonPressed(Button.B, function () {
    x_value = randint(0, 4)
    y = randint(0, 4)
    if (y == 0) {
        number += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let y = 0
let x_value = 0
let number = 0
if (number == 3) {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . . . . .
        `)
}
