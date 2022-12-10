import type { Equal, Expect } from "@type-challenges/utils";

interface ToDo {
  title: string;
  description: string
}

type A = MyPartial<ToDo>

type cases = [
  Expect<Equal<MyPartial<ToDo>, {
    title?: string;
    description?: string
  }>>
]
