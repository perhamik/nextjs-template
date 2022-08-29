import {useEffect} from 'react'
import {throttle} from '../utils/debounce'

export default function useWindowSize(func = () => {}) {
	const handleResize = throttle(func, 80)
	useEffect(() => {
		// Add event listener
		window.addEventListener('resize', handleResize, {passive: true})

		handleResize()
		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize)
	}) // Empty array ensures that effect is only run on mount
}
