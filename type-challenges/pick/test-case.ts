import { Equal, Expect, NotAny } from "@type-challenges/utils";
interface Todo1 {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo1, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

type cases = [
  Expect<Equal<Expected1, MyPick<Todo1, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo1, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]
