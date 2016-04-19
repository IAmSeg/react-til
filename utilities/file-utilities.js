import fs from 'fs';
import path from 'path';
import { capitalize } from './word-utilities';

// The path to our files
const repoPath = path.join(__dirname, '../test-files');

/**
 * Function used for recursive-readdir to ignore certain files
 * @param {file} - the absolute path to the file
 * @param {stats} - object returned from `fs.lstat()`
 * @returns {boolean} - true to ignore the file, false to not ignore
 */
function ignoreFunc(file, stats) {
  let name = file.toString().split('/');
  let fileName = name[name.length - 1];
  let extension = fileName.slice(fileName.indexOf('.'));

  // don't ignore directories unless they start with a '.'
  if (stats.isDirectory())
    return fileName.charAt(0) === '.';

  // Ignore any files that start with a '.' or aren't a markdown file
  return fileName.charAt(0) === '.' || extension !== '.md';
}

/**
 * Determines if a file is in a directory
 * @param {dir} - path to directory
 * @param {file} - the absolute path to the file
 * @returns {boolean} - true if file is in directory
 */
function isFileInDirectory(dir, file) {
  return file.indexOf(dir) === 0;
}

/**
 * Will get a list of all directories within a certain directory
 * @param {srcPath} - source path to your directory
 * @returns {array} - array of directory names
 */
function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(file => {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

/**
 * Gets just the file name from the full path of the file
 * @param {file} - full path to file
 * @returns {string} - file name without path
 */
function getFileName(file) {
  let fileName = file.split('/');
  return fileName[fileName.length - 1];
}

/**
 * Builds a friendly human-readable file name from a file
 * @param {file} - original filename
 * @returns {string} - human friendly string
 */
function getFriendlyName(file) {
  return (stripExtension(getFileName(file)) + '').split('-').map(word => capitalize(word)).join(' ');
}

/**
 * Strips the extension from a file name
 * @param {file} - file name
 * @returns {string} - file name without extension
 */
function stripExtension(file) {
  if (file.indexOf('.') !== -1)
    return file.slice(0, file.indexOf('.'));
  return file;
}

export { repoPath, ignoreFunc, isFileInDirectory, getDirectories, getFriendlyName, stripExtension, getFileName };
