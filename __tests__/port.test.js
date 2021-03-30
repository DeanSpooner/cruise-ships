const Port = require('../src/port');

describe('Port', () => {
    let yokohama;
    let fune;

    beforeEach(() => {
        yokohama = new Port('Yokohama');
        fune = jest.fn();
    });

    describe('constructor', () => {
        it('returns an object', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });
    
        it('inputs an argument as its name', () => {
            expect(yokohama.name).toEqual('Yokohama');
        });
    });
    
    describe('addShip', () => {
        it('adds a ship to the port', () => {

            yokohama.addShip(fune);
    
            expect(yokohama.ships).toEqual([fune]);
        });
    });
    
    describe('removeShip', () => {
        it('removes a ship from the port', () => {
            
            const akagi = jest.fn();
            
            yokohama.addShip(fune);
            
            yokohama.addShip(akagi);
    
            yokohama.removeShip(akagi);
    
            expect(yokohama.ships).toEqual([fune]);
        });
    });
});
