/*
  3 - Omit
  -------
  by Anthony Fu (@antfu) #medium #union #built-in
  
  ### Question
  
  Implement the built-in `Omit<T, K>` generic without using it.
  
  Constructs a type by picking all properties from `T` and then removing `K`
  
  For example
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  
  const todo: TodoPreview = {
    completed: false,
  }
  ```
  
  > View on GitHub: https://tsch.js.org/3
*/


/* _____________ Your Code Here _____________ */
type MyExtract<T, U> = T extends U ? never : T

type MyOmit<T, K extends keyof T> = {
  [U in MyExtract<keyof T, K>]: T[U]
}
