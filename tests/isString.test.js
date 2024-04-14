import {expect,test} from 'vitest';
import utilities from '../WEUtilities';

const {isString} = utilities;

test('return true if a value ben passed is a string', () => {
  expect(isString("ben")).toBe(true);
})

test('return false if an object is passed in',()=>{
  expect(isString({})).toBe(false);
})

test('return false if a function is passed in',()=>{
  expect(isString(()=>{})).toBe(false);
})

test('return false if an array is passed in',()=>{
  expect(isString([])).toBe(false);
})

test('return false if a date obj is passed in',()=>{
  expect(isString(new Date())).toBe(false);
})

test('return true if "123" is passed in',()=>{
  expect(isString("123")).toBe(true)
})