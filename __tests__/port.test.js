const Port = require('../src/port');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('inputs an argument as its name', () => {
        expect(new Port('Tynemouth').name).toEqual('Tynemouth');
    });
});