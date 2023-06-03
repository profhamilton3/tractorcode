def on_logo_pressed():
    radio.send_number(3)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_received_number(receivedNumber):
    if receivedNumber == 1:
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 100)
    elif receivedNumber == 4:
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CCW, 100)
    elif receivedNumber == 2:
        DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 100)
        DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CCW, 60)
    elif receivedNumber == 3:
        DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 100)
        DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 60)
    elif receivedNumber == 0:
        DFRobotMaqueenPlus.motot_stop(Motors.ALL)
    elif receivedNumber == 12:
        DFRobotMaqueenPlus.servo_run(Servos.S1, 45)
    elif receivedNumber == 13:
        DFRobotMaqueenPlus.servo_run(Servos.S1, 0)
    else:
        pass
radio.on_received_number(on_received_number)
dX = 0
DFRobotMaqueenPlus.i2c_init()
radio.set_group(3)
basic.show_leds("""
    . # . . .
        . # . . .
        . . . . .
        . . . . #
        . . . . #
""")

def on_forever():
    global dX
    dX = DFRobotMaqueenPlus.ultra_sonic(PIN.P1, PIN.P2)
basic.forever(on_forever)
