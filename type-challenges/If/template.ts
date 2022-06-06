/*
  268 - If
  -------
  by Pavel Glushkov (@pashutk) #easy #utils
  
  ### Question
  
  Implement a utils `If` which accepts condition `C`, a truthy return type `T`, and a falsy return type `F`. `C` is expected to be either `true` or `false` while `T` and `F` can be any type.
  
  For example:
  
  ```ts
  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'
  ```
  
  > View on GitHub: https://tsch.js.org/268
*/


type If<C extends Boolean, U, T> = C extends true ? U : T; 
