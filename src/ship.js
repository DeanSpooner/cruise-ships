(function exportShip() {
    class Ship {
        constructor(itinerary) {
            this.itinerary = itinerary;
            this.previousPort = null;
            this.currentPort = itinerary.ports[0];
            this.passengers = [];
            this.removedPassengers = [];
            this.atSea = false;
            this.numberOfPastPorts = 0;
            this.nextPort = itinerary.ports[1];
            this.currentPort.addShip(this);
        }

        addPassenger(passName) {
            this.passengers.push(passName);
        }

        removePassenger(passName) {
            for (let i = 0; i < this.passengers.length; i++) {
                if (this.passengers[i] = passName) {
                    let removed = this.passengers.splice([i], 1);
                    this.removedPassengers.push(removed[0]);
                }
            }
        }

        setSail() {
            if (this.numberOfPastPorts >= (this.itinerary.ports.length - 1)) {
                throw new Error('End of itinerary reached');
            }
            this.previousPort = this.currentPort;
            this.previousPort.removeShip(this);
            this.currentPort = null;
            this.nextPort = null;
            this.numberOfPastPorts += 1;
            this.atSea = true;
        }

        dock() {
            this.currentPort = this.itinerary.ports[this.numberOfPastPorts];
            this.nextPort = this.itinerary.ports[this.numberOfPastPorts + 1];
            this.currentPort.addShip(this);
        }
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Ship;
    } else {
        window.Ship = Ship;
    }

}());