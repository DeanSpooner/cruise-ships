const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Itinerary', () => {
let liverpool;

let newYork;

let thisList;

beforeEach(() => {
    liverpool = new Port('Liverpool');
    newYork = new Port('New York');
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
