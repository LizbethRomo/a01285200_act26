let random_number = 0
let count_even = 0
let count_odd = 0
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        random_number = randint(1, 100)
        basic.showNumber(random_number)
    }
    if (random_number / 2 == 0) {
        basic.showString("Even")
        count_even += 1
    } else {
        basic.showString("Odd")
        count_odd += 1
    }
    basic.showNumber(count_even)
    basic.showNumber(count_odd)
})
basic.forever(function () {
	
})
