/**
 * Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time:
 * 映射类型建立在索引签名的语法基础上，索引签名用于声明未提前声明的属性类型:
 */
type MyPick<T, K extends keyof T> = {
  [U in K]: T[U]
} 
