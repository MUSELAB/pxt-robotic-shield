serial.onDataReceived(serial.delimiters(Delimiters.NewLine), () => {
    OLED.showString(serial.readLine())
})
input.onButtonPressed(Button.A, () => {
    MuseRobotic.control180Servo(MuseRobotic.Servo.Servo5, 0)
    MuseRobotic.control360Servo(MuseRobotic.Servo.Servo6, MuseRobotic.ServoDirection.clockwise, 100)
})
input.onButtonPressed(Button.B, () => {
    MuseRobotic.control180Servo(MuseRobotic.Servo.Servo5, 180)
    MuseRobotic.control360Servo(MuseRobotic.Servo.Servo6, MuseRobotic.ServoDirection.anticlockwise, 100)
})
MuseIoT.initializeWifi()
OLED.init(32, 128)
basic.forever(() => {
    MuseRobotic.motorOn(MuseRobotic.Motors.Motor1, MuseRobotic.MotorDirection.Forward, 100)
    MuseRobotic.motorOn(MuseRobotic.Motors.Motor2, MuseRobotic.MotorDirection.Forward, 100)
    basic.pause(500)
    MuseRobotic.motorOn(MuseRobotic.Motors.Motor1, MuseRobotic.MotorDirection.Backward, 100)
    MuseRobotic.motorOn(MuseRobotic.Motors.Motor2, MuseRobotic.MotorDirection.Backward, 100)
    basic.pause(500)
})
