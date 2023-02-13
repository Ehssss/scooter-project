const User = require('../src/User')

// User tests here

// test username

// test password

// test age

// test login

// test logout

describe('User', function() {
    test('check correct username', () => {
        const user1 = new User ('un', 'pw', 20);
        expect (user1.username).toBe('un');
    })
    test('check correct password', () => {
        const user1 = new User ('un', 'pw', 20);
        expect (user1.password).toBe('pw');
    })
    test('check correct age', () => {
        const user1 = new User ('un', 'pw', 20);
        expect (user1.age).toBe(20);
    })
});