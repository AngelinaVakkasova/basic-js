const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }
        return this._process(message, key, 'encrypt');
    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }
        return this._process(message, key, 'decrypt');
    }

    _process(message, key, method) {
        message = message.toUpperCase();
        key = key.toUpperCase();

        let result = '';
        let j = 0;

        for (let i = 0; i < message.length; i++) {
            const charCode = message.charCodeAt(i);

            if (charCode >= 65 && charCode <= 90) {
                const keyCode = key.charCodeAt(j % key.length) - 65;

                if (method === 'encrypt') {
                    const code = ((charCode - 65 + keyCode) % 26) + 65;
                    result += String.fromCharCode(code);
                } else {
                    const code = ((charCode - 65 - keyCode + 26) % 26) + 65;
                    result += String.fromCharCode(code);
                }

                j++;
            } else {
                result += message[i];
            }
        }

        return this.isDirect ? result : result.split('').reverse().join('');
    }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
