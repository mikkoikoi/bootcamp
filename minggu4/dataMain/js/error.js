class Err extends Error {
    constructor (message) {
        super(message)
        this.name = "Error "
    }
}

export {Err}