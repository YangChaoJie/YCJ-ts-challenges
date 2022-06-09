
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type X1 = MyAwaited<X>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
]

// type error = MyAwaited<number>
