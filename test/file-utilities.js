import mocha from 'mocha';
import { should, expect, assert } from 'chai';
import path from 'path';

import { ignoreFunc, isFileInDirectory, getDirectories, getFriendlyName, stripExtension, getFileName }
from '../utilities/file-utilities';

describe('ignoreFunc', function() {
  it('should ignore any files that start with a `.`', function() {
    const files = ['hello.world', 'path/to/a/file.txt', '.git', '.hidden-file'];
    const expected = [false, false, true, true];
    expect(files.map(ignoreFunc)).to.eql(expected);
  });
});

describe('isFileInDirectory', function() {
  it('should return true when a file is in a directory', function() {
    const file = 'path/to/a/file.txt';
    const directory = 'path/to/a';
    expect(isFileInDirectory(directory, file)).to.be.true;
  });

  it('should return false when a file is not in a directory', function() {
    const file = 'path/to/a/file.txt';
    const directory = 'some/other/path';
    expect(isFileInDirectory(directory, file)).to.be.false;
  });
});

describe('getDirectories', function() {
  it('should get a list of all directories within a given path', function() {
    const testPath = '../test-files/';
    const expected = ['css', 'javascript', 'react'];
    expect(getDirectories(path.join(__dirname, testPath))).to.have.members(expected);
  });
});

describe('getFriendlyName', function() {
  it('should return the friendly name for a file separated with dashes', function() {
    const file = 'my-file-name.txt';
    const expected = 'My File Name';
    expect(getFriendlyName(file)).to.equal(expected);
  });
});

describe('stripExtension', function() {
  it('should strip the extension from a filename', function() {
    const file = 'my-file-name.txt';
    const expected = 'my-file-name';
    expect(stripExtension(file)).to.equal(expected);
  });
});

describe('getFileName', function() {
  it('should get the file name from the full path of the file', function() {
    const file = '/path/to/my-file-name.txt';
    const expected = 'my-file-name.txt';
    expect(getFileName(file)).to.equal(expected);
  });
});
