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

	/**
     * Turns on motor specified by eMotors in the direction specified
     * by eDirection, at the requested speed 
     *
	 * @param motor which motor to turn on
	 * @param dir   which direction to go
	 * @param speed how fast to spin the motor
     */
    //% blockId=muselab_motor_on
    //% block="Turn %motor|on direction %dir|speed %speed"
    //% speed.min=0 speed.max=100
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
	
    //% blockId=muselab_180servo
    //% block="Control 180° servo pin %pin| degree %degree"
	//% weight=50	
    export function control180Servo(pin: number, degree: number): void {
        serial.writeLine("(AT+servo_180?pin="+pin+"&degree="+degree+")");
    }	

    //%blockId=muselab_360servo
    //% block="Control 360° servo pin %pin| direction %direction| speed %speed"
	//% weight=45	
    export function control360Servo(pin: number, direction: string, speed: number): void {
        serial.writeLine("(AT+servo_360?pin="+pin+"&direction="+direction+"&speed="+speed+")");
    }

	//%subcategory=More
    //%blockId=muselab_battery
    //%block="Get battery level"
	//% weight=40	
    export function sendBattery(): void {
        serial.writeLine("(AT+battery)");
    }	
	
		
	//%subcategory=More
    //%blockId=muselab_version
    //%block="Get firmware version"
	//% weight=39	
    export function sendVersion(): void {
        serial.writeLine("(AT+version)");
    }
	
	// -------------- 5. General ----------------
	//%subcategory=More
    //%blockId=muselab_at
    //%block="Send AT command %command"
	//% weight=30	
    export function sendAT(command: string): void {
        serial.writeLine(command);
		flag = false
    }
	
	//%subcategory=More
    //%blockId=muselab_test
    //%block="Send AT test"
	//% weight=20	
    export function sendTest(): void {
        serial.writeLine("(AT+testing)");
    }
	
	//%subcategory=More
    //%blockId=muselab_deep_sleep
    //%block="Set deep sleep %second| second"
	//% weight=15	
    export function setDeepSleep(second: number): void {
        serial.writeLine("(AT+deepsleep?time="+second+")");
    }	
		
	
}