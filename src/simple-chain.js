const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    _chain: [],

    getLength() {
        return this._chain.length;
    },

    addLink(value) {
        this._chain.push(value === undefined ? '( )' : `( ${value} )`);
        return this;
    },

    removeLink(position) {
        if (
            typeof position !== 'number' ||
            position < 1 ||
            position > this._chain.length ||
            !Number.isInteger(position)
        ) {
            this._chain = [];
            throw new Error("You can't remove incorrect link!");
        }

        this._chain.splice(position - 1, 1);
        return this;
    },

    reverseChain() {
        this._chain.reverse();
        return this;
    },

    finishChain() {
        const result = this._chain.join('~~');
        this._chain = [];
        return result;
    },
};

module.exports = {
  chainMaker,
};
