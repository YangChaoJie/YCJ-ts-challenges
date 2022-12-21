/**
 * Implement the type Filter<T, Predicate> takes an Array T, 
 * primitive type or union primitive type Predicate and returns an Array include the elements of Predicate.
 * 
 */
// Define the Filter type
// type Filter<T, Predicate> = T extends any ? (Predicate extends T ? T : never) : never;
type Filter<T, Predicate> = {
  [Key in keyof T]: T[Key] extends Predicate ? T[Key] : never;
}[keyof T];

// Use the Filter type to create a new array that includes only
// the numbers from the original array
const numbers = [1, 'two', 3, 'four', 5];
const filteredNumbers: Filter<numbers, number> = [1, 3, 5];

// The filteredNumbers array will have the following values:
// [1, 3, 5]

// Use the Filter type to create a new array that includes only
// the strings from the original array
const strings = ['one', 2, 'three', 4, 'five'];
const filteredStrings: Filter<typeof strings, string> = ['one', 'three', 'five'];

// The filteredStrings array will have the following values:
// ['one', 'three', 'five']
