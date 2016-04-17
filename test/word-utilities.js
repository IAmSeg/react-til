import mocha from 'mocha';
import { should, expect, assert } from 'chai';
import { capitalize } from '../utilities/word-utilities';

describe('captialize', function() {
  it('should captialize the first letter of a word', function() {
    expect(capitalize('hello')).to.equal('Hello');
  });
});
