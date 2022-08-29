export const setVH = () => {
	if (!window || !document || !document.documentElement) return
	const vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}
