import {useRef} from 'react'

type ValueType = number | string | boolean

export default function usePrevious(value: ValueType) {
	const currentRef = useRef(value)
	const previousRef = useRef<ValueType>()

	if (currentRef.current !== value) {
		previousRef.current = currentRef.current
		currentRef.current = value
	}

	return previousRef.current
}
