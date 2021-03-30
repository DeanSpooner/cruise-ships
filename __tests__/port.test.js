const Port = require('../src/port');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('inputs an argument as its name', () => {
        expect(new Port('Tynemouth').name).toEqual('Tynemouth');
    });
});

describe('addShip', () => {
    it('adds a ship to the port', () => {
        const yokohama = new Port('Yokohama');
        
        const fune = {};
        
        yokohama.addShip(fune);

        expect(yokohama.ships).toEqual([fune]);
    });
});

describe('removeShip', () => {
    it('removes a ship from the port', () => {
        const kobe = new Port('Kobe');
        
        const akagi = {};

        const tategami = {};
        
        kobe.addShip(tategami);
        
        kobe.addShip(akagi);

        kobe.removeShip(akagi);

        expect(kobe.ships).toEqual([tategami]);
    });
});