# TEventEmitter

![npm version](https://img.shields.io/npm/v/t-event-emitter.svg)
![npm](https://img.shields.io/npm/dm/t-event-emitter.svg)

TEventEmitter is an enhanced event emitter that supports type-safe event keys. With TEventEmitter, you can create string or symbol keys and ensure type safety when emitting and listening to events.

## Usage Example

Here's a quick example demonstrating how to use TEventEmitter to create and handle type-safe events:

```typescript
import { TEventEmitter } from 't-event-emitter';

// Create a TEventEmitter instance
const emitter = new TEventEmitter();

// Create a event key with typed args
const key = emitter.createKey<[number, string]>('myEvent');

// Listen for the event
emitter.on(key, (num, str) => {
  console.log(`Number: ${num}, String: ${str}`);
});

// Emit the event
emitter.emit(key, 42, 'Hello, World!');

// emitter.emit(key, 42, true); <-- Argument of type 'boolean' is not assignable to parameter of type 'string'.

