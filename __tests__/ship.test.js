const Ship = require('../src/ship');
const Port = require('../src/port');

describe('constructor', () => {
    it('returns an object', () => {

        const explorer = new Ship('Hull');

        const port = new Port('Hull')

        expect(explorer).toBeInstanceOf(Object);
    });

    it('inputs an argument as its first port', () => {

        const port = new Port('Hull')

        const explorer = new Ship(port);

        expect(explorer.currentPort).toEqual(port);
    });
});

describe('addPassenger', () => {
    it('should add passengers to the this.passengers array', () => {

        const port = new Port('Liverpool')

        const titanic = new Ship(port);

        titanic.addPassenger('Jack');

        titanic.addPassenger('Rose');

        expect(titanic.passengers).toEqual(['Jack', 'Rose']);
    })
});

describe('removePassenger', () => {
    it('should remove passengers from the this.passengers array to this.removedPassengers array', () => {
        const port = new Port('Liverpool')

        const titanic = new Ship(port);

        titanic.passengers = ['Jack', 'Rose'];

        titanic.removePassenger('Jack')

        expect(titanic.passengers).toEqual(['Rose']);
        expect(titanic.removedPassengers).toEqual(['Jack']);
    })
});

describe('setSail', () => {
    it('should have atSea to be false by default', () => {
        const port = new Port('Liverpool')

        const titanic = new Ship(port);

        expect(titanic.atSea).toEqual(false);
    });

    it('should set atSea to true', () => {
        const port = new Port('Liverpool')

        const titanic = new Ship(port);

        titanic.setSail();

        expect(titanic.atSea).toEqual(true);
    });

    it('should set the current port as null', () => {
        const port = new Port('Liverpool')

        const titanic = new Ship(port);

        titanic.setSail();

        expect(titanic.currentPort).toEqual(null);
    });
});

describe('dock', () => {
    it('can dock at another port', () => {
        const liverpool = new Port('Liverpool')

        const titanic = new Ship(liverpool);

        const newYork = new Port('New York');

        titanic.dock(newYork);

        expect(titanic.currentPort).toEqual(newYork);
    });
});