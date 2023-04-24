import type {AppProps} from 'next/app'
import React from 'react'

import {useWindowSize} from '../hooks'
import '../styles/main.scss'
import {setVH} from '../utils'

function MyApp({Component, pageProps}: AppProps) {
	useWindowSize(() => {
		setVH()
	})

	return <Component {...pageProps} />
}

export default MyApp
