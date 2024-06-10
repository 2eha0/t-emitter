import { TEventEmitter } from '.'

const emitter = new TEventEmitter()

const expectType = <Type>(_: Type): void => void 0;

const e1 = emitter.createKey<[string, number, { foo: string }]>('e1')

emitter.on(e1, (a1, a2, a3) => {
  expectType<string>(a1)
  expectType<number>(a2)
  expectType<{ foo: string }>(a3)
  console.log(a1, a2, a3)
})

emitter.once(e1, (a1, a2, a3) => {
  expectType<string>(a1)
  expectType<number>(a2)
  expectType<{ foo: string }>(a3)
})

emitter.addListener(e1, (a1, a2, a3) => {
  expectType<string>(a1)
  expectType<number>(a2)
  expectType<{ foo: string }>(a3)
})

emitter.removeListener(e1, (a1, a2, a3) => {
  expectType<string>(a1)
  expectType<number>(a2)
  expectType<{ foo: string }>(a3)
})

emitter.off(e1, (a1, a2, a3) => {
  expectType<string>(a1)
  expectType<number>(a2)
  expectType<{ foo: string }>(a3)
})

emitter.emit(e1, 'string', 42, { foo: 'bar' })
