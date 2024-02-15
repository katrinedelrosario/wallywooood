import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const PostersContext = createContext()

const PostersProvider = ({children}) => {
	const [ postersList, setPostersList ] = useState([])

	useEffect(() => {
		if(sessionStorage.getItem('posterlist')) {
			setPostersList(JSON.parse(sessionStorage.getItem('posterlist')))
		} else {
			const getData = async () => {
				const result = await axios.get('http://localhost:4000/poster/list')
				sessionStorage.setItem('posterlist', JSON.stringify(result.data));
				setPostersList(result.data)
			}
			getData()
		}
	}, [children]);
	
	return (
		<PostersContext.Provider value={{postersList, setPostersList}}>
			{children}
		</PostersContext.Provider>
	);
}

const usePostersData = () => useContext(PostersContext)

export { PostersProvider, usePostersData };