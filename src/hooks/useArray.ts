import {useState} from 'react'

type ArrayItem = number | string
type FilterFn = (value: ArrayItem, index: number, array: ArrayItem[]) => boolean

export default function useArray(defaultValue: ArrayItem[] = []) {
	const [array, setArray] = useState(defaultValue)

	function push(item: ArrayItem) {
		setArray((a) => [...a, item])
	}

	function filter(cb: FilterFn) {
		setArray((a) => a.filter(cb))
	}

	function update(index: number, newItem: ArrayItem) {
		setArray((a) => [...a.slice(0, index), newItem, ...a.slice(index + 1, a.length - 1)])
	}

	function remove(index: number) {
		setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length - 1)])
	}

	function clear() {
		setArray([])
	}

	return {array, set: setArray, push, filter, update, remove, clear}
}
