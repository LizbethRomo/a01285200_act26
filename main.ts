let height = 0
let count_short = 0
let height_sum = 0
let count_medium = 0
let count_tall = 0
let dice = 0
let count_green = 0
let count_blue = 0
let count_red = 0
let random_number = 0
let count_even = 0
let count_odd = 0
let angle = 0
let count_obtuse = 0
let random_x = 0
let random_y = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 50; index++) {
        height = randint(100, 200)
        basic.showNumber(height)
        if (height <= 150) {
            basic.showString("Short person")
            count_short += 1
            height_sum = height_sum + height
        } else if (height == 151 && height <= 170) {
            basic.showString("Medium height")
            count_medium += 1
            height_sum = height_sum + height
        } else if (height >= 171) {
            basic.showString("Tall person")
            count_tall += 1
            height_sum = height_sum + height
        }
    }
    basic.showString("Totals")
    basic.showString("Short person:")
    basic.showNumber(count_short)
    basic.showString("Medium height:")
    basic.showNumber(count_medium)
    basic.showString("Tall person:")
    basic.showNumber(count_tall)
    basic.showString("Average height:")
    basic.showNumber(height_sum / 50)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 6; index++) {
        dice = randint(1, 6)
        basic.showNumber(dice)
        if (dice == 1 || dice == 3) {
            basic.showString("Team Green")
            count_green += 1
        } else if (dice == 2 || dice == 5) {
            basic.showString("Team Blue")
            count_blue += 1
        } else {
            basic.showString("Team Red")
            count_red += 1
        }
    }
    basic.showString("Totals")
    basic.showString("Team Green:")
    basic.showNumber(count_green)
    basic.showString("Team Blue:")
    basic.showNumber(count_blue)
    basic.showString("Team Red:")
    basic.showNumber(count_red)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        random_number = randint(1, 100)
        basic.showNumber(random_number)
        if (random_number % 2 == 0) {
            basic.showString("Even")
            count_even += 1
        } else {
            basic.showString("Odd")
            count_odd += 1
        }
    }
    basic.showString("Totals")
    basic.showString("Even:")
    basic.showNumber(count_even)
    basic.showString("Odd:")
    basic.showNumber(count_odd)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index <= 9; index++) {
        angle = randint(0, 180)
        basic.showNumber(angle)
        if (angle < 90) {
            basic.showString("Acute")
        } else if (angle == 90) {
            basic.showString("Straight")
        } else if (angle > 90) {
            basic.showString("Obtuse")
            count_obtuse += 1
        }
    }
    basic.showString("Total Obtuses angles:")
    basic.showNumber(count_obtuse)
    basic.clearScreen()
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P2)) {
        random_x = randint(0, 4)
        random_y = randint(0, 4)
        led.plot(random_x, random_y)
        basic.pause(300)
        if (random_x == random_y) {
            music.playMelody("F G A G F E F G ", 120)
        } else {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
        led.unplot(random_x, random_y)
    }
})
