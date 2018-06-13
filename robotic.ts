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
	
	//% blockId="readjoystick_x" block="Joystick x-axis value"
	//% weight=44
	//% blockGap=7
    export function ReadJoystick_x(): number {
        return pins.map(pins.analogReadPin(AnalogPin.P0),0,1023,100,900);
    }
	
	//% blockId="readjoystick_y" block="Joystick y-axis value"
	//% weight=43
	//% blockGap=7
    export function ReadJoystick_y(): number {
        return pins.map(pins.analogReadPin(AnalogPin.P1),0,1023,100,900);
    }
	
	//% blockId="readredbutton" block="Red press button"
	//% weight=42
	//% blockGap=7
    export function ReadRedbutton(): number {
        return pins.digitalReadPin(DigitalPin.P12);
    }
	
	//% blockId="readgreenbutton" block="Green press button"
	//% weight=41
    export function ReadGreenbutton(): number {
        return pins.digitalReadPin(DigitalPin.P8);
    }
	
	//%blockId=muselab_digital
    //% block="Set digital pin %pin| value %value"
	//% value.min=0 value.max=1
	//% weight=40
	//% blockGap=7	
    export function setDigital(pin: Servo, value: number): void {
        serial.writeLine("(AT+digital?pin="+pin+"&intensity="+value+")");
    }	
	
	//%blockId=muselab_pwm
    //% block="Set pwm pin %pin| intensity %intensity"
	//% intensity.min=0 intensity.max=1023
	//% weight=39
	//% blockGap=7	
    export function setPwm(pin: Servo, intensity: number): void {
        serial.writeLine("(AT+pwm?pin="+pin+"&intensity="+intensity+")");
    }	
	
}