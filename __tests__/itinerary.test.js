const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('constructor', () => {
    it('makes an itinerary object', () => {
const liverpool = new Port ('Liverpool');

const newYork = new Port ('New York');

        const thisList = new Itinerary([liverpool, newYork]);

        expect(thisList).toBeInstanceOf(Object);
    });

    it('has a ports property', () => {
const yokohama = new Port('Yokohama');

const hongKong = new Port('Hong Kong');

        const thisList = new Itinerary([yokohama, hongKong]);

        expect(thisList.ports).toEqual([yokohama, hongKong]);
    });
});
