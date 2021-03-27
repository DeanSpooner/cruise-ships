const Itinerary = require('../src/itinerary');

describe('constructor', () => {
    it('makes an itinerary object', () => {
        const thisList = new Itinerary(['Liverpool', 'Belfast', 'New York']);

        expect(thisList).toBeInstanceOf(Object);
    });
});
