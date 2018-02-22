namespace MuseRobotic {		
		
    export enum MotorDirection {
        //% block="forward"
        Forward,
        //% block="backward"
        Backward
    }

    export enum Motors {
        //% blockId=muselab_motor_one
        //% block="motor 1"
        Motor1,
        //% blockId=muselab_motor_two
        //% block="motor 2"
        Motor2
    }
	
	export enum ServoDirection {
        //% block="clockwise"
        clockwise,
        //% block="anti-clockwise"
        anticlockwise
    }

    export enum Servo {
        //% blockId=muselab_servo_five
        //% block="5"
        5,
        //% blockId=muselab_servo_six
        //% block="6"
        6,
		//% blockId=muselab_servo_seven
        //% block="7"
        7,
		//% blockId=muselab_servo_eight
        //% block="8"
        8
		
    }

	/**
     * Turns on motor specified by eMotors in the direction specified
     * by eDirection, at the requested speed 
     *
	 * @param motor which motor to turn on
	 * @param dir   which direction to go
	 * @param speed how fast to spin the motor
     */
    //% blockId=muselab_motor_on
    //% block="Turn on %motor| direction %dir|speed %speed"
    //% speed.min=0 speed.max=100
	//% weight=70	
	//% blockGap=7
    export function motorOn(motor: Motors, dir: MotorDirection, speed: number): void {
		
        let OutputVal = Math.clamp(0, 100, speed) * 10;

        switch (motor) {
            case Motors.Motor1: /*Motor 1 uses Pins 12 and 13*/
                switch (dir) {
                    case MotorDirection.Forward:
                        pins.analogWritePin(AnalogPin.P12, OutputVal);
                        pins.analogWritePin(AnalogPin.P13, 0); 
                        break
                    case MotorDirection.Backward:
                        pins.analogWritePin(AnalogPin.P13, OutputVal);
                        pins.analogWritePin(AnalogPin.P12, 0);
                        break
                }

                break;
            case Motors.Motor2: /*Motor 2 uses Pins 14 and 15*/
                switch (dir) {
                    case MotorDirection.Forward:
                        pins.analogWritePin(AnalogPin.P14, OutputVal);
                        pins.analogWritePin(AnalogPin.P15, 0); 
                        break
                    case MotorDirection.Backward:
                        pins.analogWritePin(AnalogPin.P15, OutputVal);
                        pins.analogWritePin(AnalogPin.P14, 0);
                        break
                }

                break;
        }
    }
	/**
     * Turns off the motor specified by eMotors
     * @param motor :which motor to turn off
     */
    //% blockId=muselab_motor_off
    //% block="Turn off %motor"
	//% weight=60	
    export function motorOff(motor: Motors): void {
        switch (motor) {
            case Motors.Motor1:
                pins.analogWritePin(AnalogPin.P12, 0);
                pins.analogWritePin(AnalogPin.P13, 0);
                break
            case Motors.Motor2:
                pins.analogWritePin(AnalogPin.P14, 0);
                pins.analogWritePin(AnalogPin.P15, 0);
                break
        }
    }
	
    //%blockId=muselab_180servo
    //% block="Control 180° servo pin %pin| degree %degree"
	//% degree.min=0 degree.max=180
	//% weight=50
	//% blockGap=7	
    export function control180Servo(pin: Servo, degree: number): void {
        serial.writeLine("(AT+servo_180?pin="+pin+"&degree="+degree+")");
    }	
	
    //%blockId=muselab_360servo
    //% block="Control 360° servo pin %pin| direction %direction| speed %speed"
	//% speed.min=0 speed.max=100
	//% weight=45	
    export function control360Servo(pin: Servo, direction: ServoDirection, speed: number): void {
        serial.writeLine("(AT+servo_360?pin="+pin+"&direction="+direction+"&speed="+speed+")");
    }
	
	//% blockId="readjoystick_x" block="Joystick x-axis value"
	//% weight=44
	//% blockGap=7
    export function ReadJoystick_x(): number {
        return pins.analogReadPin(AnalogPin.P0);
    }
	
	//% blockId="readjoystick_y" block="Joystick y-axis value"
	//% weight=43
	//% blockGap=7
    export function ReadJoystick_y(): number {
        return pins.analogReadPin(AnalogPin.P1);
    }
	
	//% blockId="readredbutton" block="Red press button"
	//% weight=42
	//% blockGap=7
    export function ReadRedbutton(): number {
        return pins.digitalReadPin(DigitalPin.P12);
    }
	
	//% blockId="readgreenbutton" block="Green press button"
	//% weight=41
	//% blockGap=7
    export function ReadGreenbutton(): number {
        return pins.digitalReadPin(DigitalPin.P8);
    }
	
}