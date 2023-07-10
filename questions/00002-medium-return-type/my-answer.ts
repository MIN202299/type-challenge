/*
  不使用 `ReturnType` 实现 TypeScript 的 `ReturnType<T>` 泛型。
  例如：

  ```ts
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }
  type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
*/
// export type MyReturnType<T extends Function> = typeof T

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

export type MyReturnType<T extends Function> =
  T extends (...args: any) => infer R
    ? R
    : never

type rt = ReturnType<typeof fn>

type rt2 = MyReturnType<typeof fn>
