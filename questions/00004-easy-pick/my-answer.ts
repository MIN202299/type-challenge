/*
  不使用 `Pick<T, K>` ，实现 TS 内置的 `Pick<T, K>` 的功能。

  **从类型 `T` 中选出符合 `K` 的属性，构造一个新的类型**。

  例如：

  ```ts
    interface Todo {
      title: string
      description: string
      completed: boolean
    }

    type TodoPreview = MyPick<Todo, 'title' | 'completed'>

    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    }
  ```
*/ 

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

type TodoPreview2 = MyPick<Todo, 'title' | 'description'>


const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

const todo2: TodoPreview2 = {
  title: 'hello world',
  description: '123'
}

type Test1 = Pick<number, 'toFixed' | 'toPrecision'>

type Test2 = MyPick<number, 'toFixed' | 'toExponential'>

// keyof in 的用法

// keyof: 取interface的键后保存为联合类型
// in:  取联合类型的值，主要用于数组和对象的构建

// example

// bad 

// function getValue(o:object, key: string){
//   return o[key]
// }
// const obj1 = { name: '张三', age: 18 }
// const values = getValue(obj1, 'name')
// 丧失了 ts 类型优势
// good

function getValue<T extends Object,K extends keyof T>(o: T,key: K): T[K] {
  return o[key]
}
const obj1 = { name: '张三', age: 18}
const values = getValue(obj1, 'name')
// 如果第二个参数不是obj1中的参数就会报错