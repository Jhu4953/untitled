def on_button_pressed_a():
    led.plot(2, 2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    led.toggle(0, 0)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    led.unplot(2, 2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
