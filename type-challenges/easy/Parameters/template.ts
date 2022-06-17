/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #easy #infer #tuple #built-in
  
  ### Question
  
  Implement the built-in Parameters<T> generic without using it.
  
  > View on GitHub: https://tsch.js.org/3312
*/


/* _____________ Your Code Here _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'
type MyParameters<T> = T extends (...args: infer U) => any ? U : T;
