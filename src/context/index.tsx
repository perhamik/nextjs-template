import React, {createContext, Dispatch, SetStateAction, useMemo, useState} from 'react'
import {NextRouter, useRouter} from 'next/router'

type ContextType = {
	router: NextRouter
	currentPage: string
	setCurrentPage: Dispatch<SetStateAction<string>>
}

export const AppContext = createContext<ContextType>({} as ContextType)

export const ContextProvider = ({children}: {children: any}) => {
	const router = useRouter()
	const [currentPage, setCurrentPage] = useState<string>('')

	const contextData = useMemo(
		() => ({
			router,
			currentPage,
			setCurrentPage,
		}),
		[router, currentPage, setCurrentPage],
	)

	return <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
}
