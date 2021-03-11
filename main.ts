function convertCtoF (num: number) {
    return num * 1.8 + 32
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    radio.sendNumber(input.temperature())
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(convertCtoF(input.temperature()))
    radio.sendNumber(convertCtoF(input.temperature()))
    radio.sendString("whats up")
})
radio.setGroup(53)
