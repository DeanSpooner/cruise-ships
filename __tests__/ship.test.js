const Ship = require('../src/ship');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Ship('Hull', 'Amsterdam')).toBeInstanceOf(Object);
    });

    it('inputs an argument as its first port', () => {
        expect(new Ship('Hull', 'Amsterdam').firstPort).toEqual('Hull');
    });

    it('inputs an argument as its destination', () => {
        expect(new Ship('Hull', 'Amsterdam').destination).toEqual('Amsterdam');
    });
});

describe('addPassenger', () => {
    it('should add passengers to the this.passengers array', () => {
        const titanic = new Ship('Liverpool', 'New York');

        titanic.addPassenger('Jack');

        titanic.addPassenger('Rose');

        expect(titanic.passengers).toEqual(['Jack','Rose']);
    })
});

describe('removePassenger', () => {
    it('should remove passengers from the this.passengers array to this.removedPassengers array', () => {
        const titanic = new Ship('Liverpool', 'New York');

        titanic.passengers = ['Jack', 'Rose'];

        titanic.removePassenger('Jack')

        expect(titanic.passengers).toEqual(['Rose']);
        expect(titanic.removedPassengers).toEqual(['Jack']);
    })
})