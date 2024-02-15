import { useEffect, useState } from "react"
import { ContentWrapper } from "../../app/elements/contentwrapper/contentwrapper"
import { PostersStyle } from "./posters.styled"
import axios from "axios"
import { Link, Outlet } from "react-router-dom"


const Posters = () => {

    return (
        <ContentWrapper title="Plakater" description="Se vores udvalg af plakater">
            <PostersStyle>
                <GenreList />
                <Outlet />
            </PostersStyle>
        </ContentWrapper>
    )
}

const GenreList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get('http://localhost:4000/genre')
            setData(result.data);
        }
        getData()
    }, [setData])

    return (
        <div className="genre">
            <h2>Filtre</h2>
            <p>Genre</p>
            <ul>
                {data && data.map(genre => {
                    return (
                        <li key={genre.id}>
                            <Link to={`/posters/${genre.slug}`}>{genre.title}</Link></li>
                    )
                })}
            </ul>
        </div>
    )

}


export { Posters}