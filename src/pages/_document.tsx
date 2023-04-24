import Document, {Head, Html, Main, NextScript} from 'next/document'
import React from 'react'

class AppDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="https://github.githubassets.com/favicons/favicon-dark.svg" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default AppDocument
