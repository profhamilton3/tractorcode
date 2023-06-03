radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    } else if (receivedNumber == 4) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 100)
    } else if (receivedNumber == 3) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 60)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 10)
    } else if (receivedNumber == 2) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 60)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 10)
    } else if (receivedNumber == 0) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    } else if (receivedNumber == 12) {
        DFRobotMaqueenPlus.servoRun(Servos.S1, 45)
    } else if (receivedNumber == 13) {
        DFRobotMaqueenPlus.servoRun(Servos.S1, 0)
    }
})
datalogger.onLogFull(function () {
    datalogger.deleteLog(datalogger.DeleteType.Full)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(3)
})
let dX = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.clearDistance(Motors.M2)
radio.setGroup(3)
basic.showLeds(`
    . # . . #
    # # . . #
    # . . . #
    # . . # #
    # . . # .
    `)
basic.forever(function () {
    dX = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
    datalogger.log(
    datalogger.createCV("dX", dX),
    datalogger.createCV("lm", DFRobotMaqueenPlus.readSpeed(Motors1.M1)),
    datalogger.createCV("rm", DFRobotMaqueenPlus.readSpeed(Motors1.M2)),
    datalogger.createCV("lrv", DFRobotMaqueenPlus.readeDistance(Motors1.M1)),
    datalogger.createCV("rrv", DFRobotMaqueenPlus.readeDistance(Motors1.M2))
    )
})
