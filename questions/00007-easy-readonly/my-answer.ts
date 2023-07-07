/*
  不要使用内置的`Readonly<T>`，自己实现一个。

  泛型 `Readonly<T>` 会接收一个 _泛型参数_，并返回一个完全一样的类型，只是所有属性都会是只读 (readonly) 的。

  也就是不可以再对该对象的属性赋值。

  例如：

  ```ts
    interface Todo {
      title: string
      description: string
    }

    const todo: MyReadonly<Todo> = {
      title: "Hey",
      description: "foobar"
    }

    todo.title = "Hello" // Error: cannot reassign a readonly property
    todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```
*/

export type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

interface Todo {
  title: string
  description: string
}

const todo: Readonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
}

// todo.title = 'hey'
// todo.description = 'ddd'

const todo2: MyReadonly<Todo> = {
  title: 'hello',
  description: 'beautiful world',
}

// todo2.description = 'world' // Expect Error cannot assign to a read-only property
// todo2.description = 'fff' // Expect Error cannot assign to a read-only property
