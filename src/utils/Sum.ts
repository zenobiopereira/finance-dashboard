type List = Array<any> | Readonly<Array<any>>

export function sum<T extends List>(
  list: T,
  key: T extends Array<infer I> | Readonly<Array<infer I>> ? keyof I : never,
) {
  return list.reduce(
    (total, current) => total + current[key as keyof typeof current],
    0,
  )
}
