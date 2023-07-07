/*
  将一个元组类型转换为对象类型，这个对象类型的键/值和元组中的元素对应。

  例如：

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
*/

// export type TupleToObject<T extends readonly any[]> = any

type A = keyof any // Equal<A, string | number | symbol>

export type TupleToObject<T extends ReadonlyArray<keyof any>> = {
  [P in T[number]]: P
}
