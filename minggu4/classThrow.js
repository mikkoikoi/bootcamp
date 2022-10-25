class ZipCode {
    static pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
    constructor(zip) {
        zip = String(zip)
        const match = zip.match(ZipCode.pattern)
        if (!match) {
            throw new ZipCodeFormatException(zip)
        }
        this.value - match[0]
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return this.value;
    }
}

class ZipCodeFormatException extends Error {
    constructor(zip) {
        super(`${zip} does not conform to the expected format for a zip code`);
    }
}

const ZIPCODE_INVALID = -1
const ZIPCODE_UNKNOWN_ERROR = -2

function verifyZipCode(z) {
    try {
        z = new ZipCode(z)
    } catch (e) {
        const isInvalidCode = e instanceof ZipCodeFormatException;
        return isInvalidCode ? ZIPCODE_INVALID : ZIPCODE_UNKNOWN_ERROR;
    }
    return z;
}

console.log(verifyZipCode(828282))