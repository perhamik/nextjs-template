import {RefObject, useEffect, useRef} from 'react'

// function useEventListener<K extends keyof WindowEventMap>(eventType: K, cb: Function, element?: undefined): void
// function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = HTMLDivElement>(
// 	eventType: K,
// 	cb: Function,
// 	element: RefObject<T>,
// ): void
// function useEventListener<K extends keyof DocumentEventMap>(eventType: K, cb: Function, element: RefObject<Document>): void

function useEventListener<
	KW extends keyof WindowEventMap,
	KH extends keyof HTMLElementEventMap,
	T extends HTMLElement | void = void,
>(eventType: KW | KH, cb: Function, element?: RefObject<T>) {
	const cbRef = useRef(cb)

	useEffect(() => {
		cbRef.current = cb
	}, [cb])

	useEffect(() => {
		const handler = (e: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => cbRef.current(e)
		const targetElement: T | Window = element?.current || window

		if (!(targetElement && targetElement.addEventListener)) {
			return
		}
		targetElement.addEventListener(eventType, handler)

		return () => targetElement.removeEventListener(eventType, handler)
	}, [eventType, element])
}

export default useEventListener
