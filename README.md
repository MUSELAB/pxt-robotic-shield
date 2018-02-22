# Muselab Robotic plugin 

A PXT plugin library for Muselab wifi IoT Robotic shield

## Blocks

### 1. Turn on motor

```sig
MuseRobotic.motorOn(MuseRobotic.Motors.Motor1, MuseRobotic.MotorDirection.Forward, 50)
```

Here we turn on motor1 with forward direction in 50% speed.

### 2. Turn off motor

```sig
MuseRobotic.motorOff(MuseRobotic.Motors.Motor1)
```

### 3. Control 180° servo

```sig
MuseRobotic.control180Servo(MuseRobotic.Servo.Servo5, 90)
```

Here we control 180° servo (pin D5) to degree 90.

### 4. Control 360° servo

```sig
MuseRobotic.control360Servo(MuseRobotic.Servo.Servo6, MuseRobotic.ServoDirection.clockwise, 80)
```

Here we turn control 360° servo (pin D6) with clockwise direction in 80% speed.

### 5. Get the Joystick value (x-axis, y-axis, red button, green button)

```sig
x = MuseRobotic.ReadJoystick_x()
y = MuseRobotic.ReadJoystick_y()
red = MuseRobotic.ReadRedbutton()
green = MuseRobotic.ReadGreenbutton()
```

## License

MIT

## Supported targets

* for PXT/calliope
* for PXT/microbit

(The metadata above is needed for package search.)

