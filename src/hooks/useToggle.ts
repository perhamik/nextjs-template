import {useState} from 'react'

export default function useToggle(defaultValue = false) {
	const [value, setValue] = useState(defaultValue)
	function toggleValue(value: any) {
		setValue((currentValue) => (typeof value === 'boolean' ? value : !currentValue))
	}
	return [value, toggleValue]
}
