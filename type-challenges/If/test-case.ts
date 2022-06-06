import type { Equal, Expect } from "@type-challenges/utils";

type If<C extends Boolean, U, T> = C extends true ? U : T; 

type A = If<true, 'a', 'b'>
type B = If<false, 'a', 'b'>

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'> >,
  Expect<Equal<If<false, 'a', '2'>, '2'> >,
]
