import { writable } from "svelte/store";

export const CounterStore = writable([{
    id: 1,
    title: 'new',
    count: 0,
}])

