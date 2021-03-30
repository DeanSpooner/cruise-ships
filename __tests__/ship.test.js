const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');
describe('Ship', () => {

    let hull;
    let amsterdam;
    let itin;
    let explorer;

    beforeEach(() => {
        hull = new Port('Hull');

        amsterdam = new Port('Amsterdam');

        itin = new Itinerary([hull, amsterdam]);

        explorer = new Ship(itin);
    });

    describe('constructor', () => {
                
        it('returns an object', () => {
            expect(explorer).toBeInstanceOf(Object);
        });

        it('inputs an argument as its first port', () => {
            expect(explorer.currentPort).toEqual(hull);
        });

        it('starts with a previous port property set to null', () => {
            expect(explorer.previousPort).toEqual(null);
        });

        it('gets added to port on instantiation', () => {
            expect(hull.ships).toContain(explorer);
        });
    });

    describe('addPassenger', () => {

        it('should add passengers to the this.passengers array', () => {

            

            explorer.addPassenger('Jack');

            explorer.addPassenger('Rose');

            expect(explorer.passengers).toEqual(['Jack', 'Rose']);
        })
    });

    describe('removePassenger', () => {
        it('should remove passengers from the this.passengers array to this.removedPassengers array', () => {

            explorer.passengers = ['Jack', 'Rose'];

            explorer.removePassenger('Jack')

            expect(explorer.passengers).toEqual(['Rose']);
            expect(explorer.removedPassengers).toEqual(['Jack']);
        })
    });

    describe('setSail', () => {
        it('should have atSea to be false by default', () => {
            expect(explorer.atSea).toEqual(false);
        });

        it('should set atSea to true', () => {

            explorer.setSail();

            expect(explorer.atSea).toEqual(true);
        });

        it('should set the current port as null', () => {

            explorer.setSail();

            expect(explorer.currentPort).toBeFalsy();
        });

        it('should set the previous port to what was current port before the method was called', () => {

            explorer.setSail();

            expect(explorer.currentPort).toBeFalsy();

            expect(explorer.previousPort).toEqual(hull);
        });

        it('cannot set sail when there are no more ports on the itinerary', () => {

            explorer.setSail();

            explorer.dock();

            expect(() => explorer.setSail()).toThrowError('End of itinerary reached');
        });

        it('s previous port should not contain this ship any more', () => {

            explorer.setSail();

            expect(hull.ships).not.toContain(explorer);
        });
    });

    describe('dock', () => {
        it('can dock at another port', () => {

            explorer.setSail();

            explorer.dock();

            expect(explorer.currentPort).toEqual(amsterdam);
            expect(explorer.currentPort.ships).toContain(explorer);
        });
    });
});