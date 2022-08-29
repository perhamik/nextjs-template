import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'

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
