/*
  898 - Includes
  -------
  by null (@kynefuk) #easy #array
  
  ### Question
  
  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.
  
  For example
  
  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```
  
  > View on GitHub: https://tsch.js.org/898
*/


/* _____________ Your Code Here _____________ */
/* _____________ Test Cases _____________ */
// import type { Equal } from '@type-challenges/utils'
import type { Equal } from '@type-challenges/utils'
// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;
export type Includes<T extends readonly any[], U> = T extends [infer S, ...infer R]
  ? Equal<S, U> extends true
    ? true
    : Includes<R, U>
  : false;



