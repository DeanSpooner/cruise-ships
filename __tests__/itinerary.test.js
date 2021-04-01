const Itinerary = require('../src/itinerary');

describe('Itinerary', () => {
let liverpool;

let newYork;

let thisList;

beforeEach(() => {
    liverpool = jest.fn();
    newYork = jest.fn();
    thisList = new Itinerary([liverpool, newYork]);
});

    describe('constructor', () => {
        it('makes an itinerary object', () => {
    
            expect(thisList).toBeInstanceOf(Object);
        });
    
        it('has a ports property', () => {
    
            expect(thisList.ports).toEqual([liverpool, newYork]);
        });
    });
});
