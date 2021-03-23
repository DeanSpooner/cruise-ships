class Ship {
    constructor(firstPort, destination) {
        this.destination = destination;
        this.firstPort = firstPort;
        this.passengers = [];
        this.removedPassengers = [];
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
}

module.exports = Ship;