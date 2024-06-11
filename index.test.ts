import { TEventEmitter } from '.'

const emitter = new TEventEmitter()

export type Expect<T extends true> = T
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true

const e1 = emitter.createKey<[string, number, { foo: string }]>('e1')

emitter.on(e1, (a1, a2, a3) => {
  type cases = [
    Expect<NotEqual<typeof a1, any>>,
    Expect<NotEqual<typeof a2, any>>,
    Expect<NotEqual<typeof a3, any>>,
    Expect<Equal<string, typeof a1>>,
    Expect<Equal<number, typeof a2>>,
    Expect<Equal<{ foo: string }, typeof a3>>,
  ]
})

emitter.once(e1, (a1, a2, a3) => {
  type cases = [
    Expect<NotEqual<typeof a1, any>>,
    Expect<NotEqual<typeof a2, any>>,
    Expect<NotEqual<typeof a3, any>>,
    Expect<Equal<string, typeof a1>>,
    Expect<Equal<number, typeof a2>>,
    Expect<Equal<{ foo: string }, typeof a3>>,
  ]
})

emitter.addListener(e1, (a1, a2, a3) => {
  type cases = [
    Expect<NotEqual<typeof a1, any>>,
    Expect<NotEqual<typeof a2, any>>,
    Expect<NotEqual<typeof a3, any>>,
    Expect<Equal<string, typeof a1>>,
    Expect<Equal<number, typeof a2>>,
    Expect<Equal<{ foo: string }, typeof a3>>,
  ]
})

emitter.removeListener(e1, (a1, a2, a3) => {
  type cases = [
    Expect<NotEqual<typeof a1, any>>,
    Expect<NotEqual<typeof a2, any>>,
    Expect<NotEqual<typeof a3, any>>,
    Expect<Equal<string, typeof a1>>,
    Expect<Equal<number, typeof a2>>,
    Expect<Equal<{ foo: string }, typeof a3>>,
  ]
})

emitter.off(e1, (a1, a2, a3) => {
  type cases = [
    Expect<NotEqual<typeof a1, any>>,
    Expect<NotEqual<typeof a2, any>>,
    Expect<NotEqual<typeof a3, any>>,
    Expect<Equal<string, typeof a1>>,
    Expect<Equal<number, typeof a2>>,
    Expect<Equal<{ foo: string }, typeof a3>>,
  ]
})

type ExpectArgTypes = [string, number]
type ArgTypes = typeof emitter.emit<ExpectArgTypes> extends (eventName: any, ...args: infer U) => boolean ? U : never
type ArgTypeCase = Expect<Equal<ExpectArgTypes, ArgTypes>>
