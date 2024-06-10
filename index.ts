import { EventEmitter } from 'node:events'

type StringKey<TArgs extends any[]> = {
  readonly args: TArgs
} & string

type SymbolKey<TArgs extends any[]> = {
  readonly args: TArgs
} & symbol

export type Key<TArgs extends any[]> = StringKey<TArgs> | SymbolKey<TArgs>

export class TEventEmitter extends EventEmitter {

  createKey<TArgs extends any[]>(name: string): StringKey<TArgs>
  createKey<TArgs extends any[]>(name: symbol): SymbolKey<TArgs>
  createKey<TArgs extends any[]>(name: string | symbol): Key<TArgs> {
    return name as any as Key<TArgs>
  }

  on<T extends any[]>(eventName: Key<T>, listener: (...args: T) => void): this
  on(eventName: string | symbol, listener: (...args: any[]) => void): this
  on<T extends any[]>(eventName: string | symbol | Key<T>, listener: (...args: any[] | T) => void): this {
    return super.on(eventName, listener)
  }

  once<T extends any[]>(eventName: Key<T>, listener: (...args: T) => void): this
  once(eventName: string | symbol, listener: (...args: any[]) => void): this
  once<T extends any[]>(eventName: string | symbol | Key<T>, listener: (...args: any[] | T) => void): this {
    return super.once(eventName, listener)
  }

  off<T extends any[]>(eventName: Key<T>, listener: (...args: T) => void): this
  off(eventName: string | symbol, listener: (...args: any[]) => void): this
  off<T extends any[]>(eventName: string | symbol | Key<T>, listener: (...args: any[] | T) => void): this {
    return super.off(eventName, listener)
  }

  removeListener<T extends any[]>(eventName: Key<T>, listener: (...args: T) => void): this
  removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this
  removeListener<T extends any[]>(eventName: string | symbol | Key<T>, listener: (...args: any[] | T) => void): this {
    return super.removeListener(eventName, listener)
  }

  addListener<T extends any[]>(eventName: Key<T>, listener: (...args: T) => void): this
  addListener(eventName: string | symbol, listener: (...args: any[]) => void): this
  addListener<T extends any[]>(eventName: string | symbol | Key<T>, listener: (...args: any[] | T) => void): this {
    return super.addListener(eventName, listener)
  }

  emit<T extends any[]>(eventName: Key<T>, ...args: T): boolean
  emit<T extends any[]>(eventName: string | symbol | Key<T>, ...args: T): boolean {
    return super.emit(eventName, ...args)
  }
}
