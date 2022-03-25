console.log("Hello World")  

const startPauseButton = document.querySelector('[data-start]');
const textDiv = document.querySelector('[data-text]')

class Stopwatch {
    constructor(minutes, seconds) {
        this.minutes = minutes
        this.seconds = seconds
        this.textDiv = `${this.minutes}:${this.seconds}`

        this.time = this.minutes * 60 + this.seconds // Total time in seconds
        textDiv.innerText = this.textDiv
    }

    start() {
        let clock = setInterval(() => {
            const minutes = Math.floor(this.time/60)
            const seconds = this.time % 60
        
            textDiv.innerText = `${minutes}:${seconds}`
            this.time --

        }, 1000)
    }

}



const stopwatch = new Stopwatch(0,10)

startPauseButton.addEventListener("click", () => {
    if (startPauseButton.innerText == "START") {
        stopwatch.start()
        startPauseButton.innerText = "PAUSE"
    } else if (startPauseButton.innerText == "PAUSE") {
        // stopwatch.pause()
        startPauseButton.innerText = "START"
    }
})

