import {useEffect} from 'react'

import useTimeout from './useTimeout'

export default function useDebounce(cb: Function, delay: number, depens: Array<any>) {
	const {reset, clear} = useTimeout(cb, delay)
	useEffect(reset, [...depens, reset])
	useEffect(clear, [])
}
