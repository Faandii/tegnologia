let Numero = 0
input.onButtonPressed(Button.A, function () {
    Numero = randint(1, 4)
    if (Numero == 1) {
        basic.showArrow(ArrowNames.North)
    }
    if (Numero == 2) {
        basic.showArrow(ArrowNames.West)
    }
    if (Numero == 3) {
        basic.showArrow(ArrowNames.East)
    }
    if (Numero == 4) {
        basic.showArrow(ArrowNames.South)
    }
})
