const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary  = require('../src/itinerary');

describe('constructor', () => {
    it('returns an object', () => {

        const hull = new Port('Hull');

        const amsterdam = new Port ('Amsterdam');

        const itin = new Itinerary ([hull, amsterdam]);

        const explorer = new Ship(itin);

        expect(explorer).toBeInstanceOf(Object);
    });

    it('inputs an argument as its first port', () => {

        const hull = new Port('Hull');

        const amsterdam = new Port ('Amsterdam');

        const itin = new Itinerary ([hull, amsterdam]);

        const explorer = new Ship(itin);

        expect(explorer.currentPort).toEqual(hull);
    });

    it('starts with a previous port property set to null', () => {

        const hull = new Port('Hull');

        const amsterdam = new Port ('Amsterdam');

        const itin = new Itinerary ([hull, amsterdam]);

        const explorer = new Ship(itin);

        expect(explorer.previousPort).toEqual(null);
    });

    it ('gets added to port on instantiation', () => {

const odaiba = new Port('Odaiba');

const itin = new Itinerary([odaiba]);

const fune = new Ship(itin);

expect(odaiba.ships).toContain(fune);

    });
});

describe('addPassenger', () => {
    it('should add passengers to the this.passengers array', () => {

        const liverpool = new Port('Liverpool');

        const newYork = new Port('New York');

        const itin = new Itinerary([liverpool, newYork]);

        const titanic = new Ship(itin);

        titanic.addPassenger('Jack');

        titanic.addPassenger('Rose');

        expect(titanic.passengers).toEqual(['Jack', 'Rose']);
    })
});

describe('removePassenger', () => {
    it('should remove passengers from the this.passengers array to this.removedPassengers array', () => {

        const liverpool = new Port('Liverpool');

        const newYork = new Port('New York');

        const itin = new Itinerary([liverpool, newYork]);

        const titanic = new Ship(itin);

        titanic.passengers = ['Jack', 'Rose'];

        titanic.removePassenger('Jack')

        expect(titanic.passengers).toEqual(['Rose']);
        expect(titanic.removedPassengers).toEqual(['Jack']);
    })
});

describe('setSail', () => {
    it('should have atSea to be false by default', () => {

        const liverpool = new Port('Liverpool');

        const newYork = new Port('New York');

        const itin = new Itinerary([liverpool, newYork]);

        const titanic = new Ship(itin);

        expect(titanic.atSea).toEqual(false);
    });

    it('should set atSea to true', () => {

        const liverpool = new Port('Liverpool');

        const newYork = new Port('New York');

        const itin = new Itinerary([liverpool, newYork]);

        const titanic = new Ship(itin);

        titanic.setSail();

        expect(titanic.atSea).toEqual(true);
    });

    it('should set the current port as null', () => {

        const liverpool = new Port('Liverpool');

        const newYork = new Port('New York');

        const itin = new Itinerary([liverpool, newYork]);

        const titanic = new Ship(itin);

        titanic.setSail();

        expect(titanic.currentPort).toBeFalsy();
    });

    it('should set the previous port to what was current port before the method was called', () => {

        const liverpool = new Port('Liverpool');

        const newYork = new Port('New York');

        const itin = new Itinerary([liverpool, newYork]);

        const titanic = new Ship(itin);

        titanic.setSail();

        expect(titanic.currentPort).toBeFalsy();

        expect(titanic.previousPort).toEqual(liverpool);
    });

    it('cannot set sail when there are no more ports on the itinerary', () => {

        const liverpool = new Port('Liverpool');

        const newYork = new Port('New York');

        const itin = new Itinerary([liverpool, newYork]);

        const titanic = new Ship(itin);

        titanic.setSail();

        titanic.dock();

        expect(() => titanic.setSail()).toThrowError('End of itinerary reached');
    });

    it('s previous port should not contain this ship any more', () => {

        const osaka = new Port('Osaka');

        const naha = new Port('Naha');

        const itin = new Itinerary([osaka, naha]);

        const ryu = new Ship(itin);

        ryu.setSail();

        expect(osaka.ships).not.toContain(ryu);
    });
});

describe('dock', () => {
    it('can dock at another port', () => {

        const liverpool = new Port('Liverpool');

        const newYork = new Port('New York');

        const itin = new Itinerary([liverpool, newYork]);

        const titanic = new Ship(itin);

        titanic.setSail();

        titanic.dock();

        expect(titanic.currentPort).toEqual(newYork);
        expect(titanic.currentPort.ships).toContain(titanic);
    });
});