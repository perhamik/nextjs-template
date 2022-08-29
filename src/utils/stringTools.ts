export const extractCategoryFromPath = (path: string) => {
	const reg = /^\/+(?<name>\w{3,})+(\/|$)/m
	const match = transformString(path).match(reg)
	return match?.groups?.name ?? ''
}

export const transformString = (str: string): string => str.replaceAll(/\s|\d|\([^()]*\)/g, '').toLowerCase()

export const deepEqualsString = (str1: string, str2: string) => {
	return str1 === str2
}

export const equalsString = (str1: string, str2: string) => {
	return deepEqualsString(transformString(str1), transformString(str2))
}
