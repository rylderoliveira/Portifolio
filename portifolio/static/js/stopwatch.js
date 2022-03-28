console.log("Hello World")  

const startPauseButton = document.querySelector('[data-start]')
const resetButton = document.querySelector('[data-reset]')
const presetButton = document.querySelector('[data-preset]');
const textDiv = document.querySelector('[data-text]')

class Stopwatch {
    constructor() {
        this.minutes = 0
        this.seconds = 0
        this.isRunning = false
        this.updateDisplay()
    }

    updateDisplay() {

        if (this.minutes < 10 && this.seconds < 10) {
            this.textDiv = `0${this.minutes}:0${this.seconds}`
        } else if (this.minutes < 10 && this.seconds >= 10) {
            this.textDiv = `0${this.minutes}:${this.seconds}`
        } else if (this.minutes >= 10 && this.seconds < 10) {
            this.textDiv = `${this.minutes}:0${this.seconds}`
        } else if (this.minutes >= 10 && this.seconds >= 10) {
            this.textDiv = `${this.minutes}:${this.seconds}`
        }

        textDiv.innerText = this.textDiv
        console.log('rodou')
    }

    start() {
        console.log('Deve começar')
        this.isRunning = true
        
        this.timer = setInterval(() => {
            // Decrementa os minutos
            if (this.seconds <= 0 && this.minutes > 0) {
                this.seconds = 60
                this.minutes --
            }

            if (this.seconds <= 0 && this.minutes <= 0 || this.isRunning == false) {
                return
            }

            this.seconds --
            this.updateDisplay()
        }, 1000)
    }

    stop() {
        console.log('Deve parar')
        this.isRunning = false
        clearInterval(this.timer)
    }

    reset() {
        this.minutes = 0
        this.seconds = 0
    }

    preset() {

        let timeInput = window.prompt('Set the initial timer:', '00:00')
        
        console.log(timeInput)
        let listInput = timeInput.split(':')
        this.minutes = parseFloat(listInput[0])
        this.seconds = parseFloat(listInput[1])
        
    }

}

const stopwatch = new Stopwatch()

startPauseButton.addEventListener("click", () => {
    if (startPauseButton.innerText == "START") {
        stopwatch.start()
        startPauseButton.innerText = "STOP"
    } else if (startPauseButton.innerText == "STOP") {
        stopwatch.stop()
        startPauseButton.innerText = "START"
    }
})

resetButton.addEventListener("click", () => {
    stopwatch.reset()
    stopwatch.updateDisplay()
})

presetButton.addEventListener("click", () => {
    stopwatch.preset()
    stopwatch.updateDisplay()
})
