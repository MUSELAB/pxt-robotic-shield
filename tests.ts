serial.onDataReceived(serial.delimiters(Delimiters.NewLine), () => {
    OLED.showString(serial.readLine())
})
input.onButtonPressed(Button.A, () => {
    MuseRover.control180Servo(MuseRover.Servo.Servo5, 0)
    MuseRover.control360Servo(MuseRover.Servo.Servo6, MuseRover.ServoDirection.clockwise, 100)
})
input.onButtonPressed(Button.B, () => {
    MuseRover.control180Servo(MuseRover.Servo.Servo5, 180)
    MuseRover.control360Servo(MuseRover.Servo.Servo6, MuseRover.ServoDirection.anticlockwise, 100)
})
MuseIoT.initializeWifi()
OLED.init(32, 128)
basic.forever(() => {
    MuseRover.motorOn(MuseRover.Motors.Motor1, MuseRover.MotorDirection.Forward, 100)
    MuseRover.motorOn(MuseRover.Motors.Motor2, MuseRover.MotorDirection.Forward, 100)
    basic.pause(500)
    MuseRover.motorOn(MuseRover.Motors.Motor1, MuseRover.MotorDirection.Backward, 100)
    MuseRover.motorOn(MuseRover.Motors.Motor2, MuseRover.MotorDirection.Backward, 100)
    basic.pause(500)
})
