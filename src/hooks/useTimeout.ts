import {useCallback, useEffect, useRef} from 'react'

export default function useTimeout(cb: Function, delay: number) {
	const cbRef = useRef(cb)
	const timeoutRef = useRef<NodeJS.Timeout>()

	useEffect(() => {
		cbRef.current = cb
	}, [cb])

	const set = useCallback(() => {
		timeoutRef.current = setTimeout(() => cbRef.current(), delay)
	}, [delay])

	const clear = useCallback(() => {
		timeoutRef.current && clearTimeout(timeoutRef.current)
	}, [])

	useEffect(() => {
		set()
		return clear
	}, [delay, set, clear])

	const reset = useCallback(() => {
		clear()
		set()
	}, [clear, set])

	return {reset, clear}
}
