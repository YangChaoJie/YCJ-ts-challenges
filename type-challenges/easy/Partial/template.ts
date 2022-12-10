/**
 * Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
 */

type MyPartial<T> = {
  [p in keyof T]?: T[p] | undefined
}
