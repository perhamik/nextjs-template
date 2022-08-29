import {useCallback, useEffect, useState} from 'react'

type BaseTypes = boolean | number | string
type ValueType = BaseTypes | Array<BaseTypes> | Object

export function useLocalStorage(key: string, defaultValue: ValueType) {
	return useStorage(key, defaultValue, window.localStorage)
}

export function useSessionStorage(key: string, defaultValue: ValueType) {
	return useStorage(key, defaultValue, window.sessionStorage)
}

function useStorage(key: string, defaultValue: ValueType, storageObject: Storage) {
	const [value, setValue] = useState(() => {
		const jsonValue = storageObject.getItem(key)
		if (jsonValue !== null) return JSON.parse(jsonValue)

		if (typeof defaultValue === 'function') {
			return defaultValue()
		} else {
			return defaultValue
		}
	})

	useEffect(() => {
		if (value === undefined) return storageObject.removeItem(key)
		storageObject.setItem(key, JSON.stringify(value))
	}, [key, value, storageObject])

	const remove = useCallback(() => setValue(undefined), [])

	return [value, setValue, remove]
}
