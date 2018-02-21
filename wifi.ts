namespace MuseRobotic {		

    //%blockId=muselab_180servo
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