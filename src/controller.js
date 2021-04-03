(function exportController() {

    class Controller {
        constructor(ship) {
            this.ship = ship;
            this.initialiseSea();
            document.querySelector('#sailbutton').addEventListener('click', () => {
                this.setSail();
            });
        }
        initialiseSea() {
            const backgrounds = ['./images/water0.png', './images/water1.png'];
            let backgroundIndex = 0;
            window.setInterval(() => {
                document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
                backgroundIndex += 1;
            }, 600);
        }

        renderPorts(ports) {
            const portsElement = document.getElementById('ports');
            portsElement.style.width = '0px';

            ports.forEach((port, index) => {
                const newPortElement = document.createElement('div');
                newPortElement.className = 'port';
                newPortElement.dataset.portName = port.name;
                newPortElement.dataset.portIndex = index;

                portsElement.appendChild(newPortElement);

                const portsElementWidth = parseInt(portsElement.style.width, 10);
                portsElement.style.width = `${portsElementWidth + 256}px`;


            });
        }

        renderShip() {
            const ship = this.ship;

            const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
            const shipElement = document.querySelector('#ship');
            shipElement.style.top = `${portElement.offsetTop + 32}px`;
            shipElement.style.left = `${portElement.offsetLeft - 32}px`;

        }

        setSail() {
            const ship = this.ship;
            const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const nextPortIndex = currentPortIndex + 1;
            const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
            if (!nextPortElement) {
                return this.renderMessage3(`End of the line! 終点に着きました。`);
            }

            this.renderMessage(`Now departing ${ship.currentPort.name}! ${ship.currentPort.japaneseName}発です。`);
            this.renderMessage2(`Next port is ${ship.nextPort.name}. 次は${ship.nextPort.japaneseName}です。`)

            const shipElement = document.querySelector('#ship');
            const sailInterval = setInterval(() => {
                const shipLeft = parseInt(shipElement.style.left, 10);
                if (shipLeft === (nextPortElement.offsetLeft - 32)) {
                    ship.setSail();
                    ship.dock();
                    clearInterval(sailInterval);
                }

                shipElement.style.left = `${shipLeft + 1}px`;
            }, 20);

        }

        renderMessage(message) {
            const messageElement = document.createElement('div');
            messageElement.id = 'message';
            messageElement.innerHTML = message;

            const screenTop = document.querySelector('#screenTop');
            screenTop.appendChild(messageElement);

            setTimeout(() => {
                screenTop.removeChild(messageElement);
            }, 2000);
        }

        renderMessage2(message) {
            const messageElement2 = document.createElement('div');
            messageElement2.id = 'message2';
            messageElement2.innerHTML = message;

            const screenTop = document.querySelector('#screenTop');
            screenTop.appendChild(messageElement2);

            setTimeout(() => {
                screenTop.removeChild(messageElement2);
            }, 2000);
        }

        renderMessage3(message) {
            const messageElement3 = document.createElement('div');
            messageElement3.id = 'message3';
            messageElement3.innerHTML = message;

            const screenTop = document.querySelector('#screenTop');
            screenTop.appendChild(messageElement3);

            setTimeout(() => {
                screenTop.removeChild(messageElement3);
            }, 2000);
        }
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }

}());