class Ship {
    constructor(firstPort) {
        this.currentPort = firstPort;
        this.passengers = [];
        this.removedPassengers = [];
        this.atSea = false;
    }

    addPassenger(name) {
        this.passengers.push(name);
    }

    removePassenger(name) {
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i] = name) {
                let removed = this.passengers.splice([i], 1);
                this.removedPassengers.push(removed[0]);
            }
        }
    }

    setSail() {
        this.currentPort = null;
        this.atSea = true;
    }

    dock(anotherPort) {
        this.currentPort = anotherPort;
    }
}

module.exports = Ship;