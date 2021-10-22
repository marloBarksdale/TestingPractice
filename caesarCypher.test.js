import {decrypt, encrypt} from "./caesarCypher";

test("Encryption", ()=>{

    expect(encrypt('hello', 1)).toMatch('ifmmp');

});


test("Decryption", ()=>{


    expect (decrypt('EFGFOEUIFFBTUXBMMPGUIFDBTUMF', 1)).toMatch('DEFENDTHEEASTWALLOFTHECASTLE');
})