import {expect,test} from 'vitest';
import utilities from '../WEUtilities';


test('Capitalizes the first letter of a string ben', () => {
  expect(utilities.capitalizeFirstLetter("ben")).toBe("Ben");
})

test('Should be undefined if no parameter is passed', () => {
  expect(utilities.capitalizeFirstLetter()).toBe(undefined);
})

test('Should return Ben since it was capitalize alread', () => {
  expect(utilities.capitalizeFirstLetter("Ben")).toBe("Ben");
})

test('Should only capitalize the first character of ben is cool', () => {
  expect(utilities.capitalizeFirstLetter("ben is cool")).toBe("Ben is cool");
})