import React from 'react'
import type {AppProps} from 'next/app'
import {useWindowSize} from '../hooks'
import {setVH} from '../utils'
import '../styles/main.scss'

function MyApp({Component, pageProps}: AppProps) {
	useWindowSize(() => {
		setVH()
	})

	return <Component {...pageProps} />
}

export default MyApp
