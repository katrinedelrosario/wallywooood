import { ContentWrapper } from "../../app/elements/contentwrapper/contentwrapper";
import SlideWrapper from "../../app/elements/slidewrapper/slidewrapper";
import HomeStyle from "./home.styled";
import { usePostersData } from "../../app/providers/postersProvider";


const Home = () => {
	const { postersList } = usePostersData()
	console.log(postersList);

  return (
	<>
		<SlideWrapper />
		<ContentWrapper 
		title="sidste nyt..."
		description="Her finder du nye og gamle film plakater">
			{postersList && postersList.slice(0,2).map(poster => {
				return (
					<HomeStyle>
						<div>
						<figure key={poster.id}>
						<img src={poster.image} alt="Poster" />
						<figcaption>
							<h2>{poster.name}</h2>
							<p>Abernes Planet: Revolutionen&#8217;, foregår i en fremtid, hvor den hyperintelligente chimpanse, Caesar, leder en voksende nation af genetisk udviklede abekatte.</p>
							{poster.genres && poster.genres.map(genre => {
                                    return(
                                        <p>Genre: {genre.title}</p>
                                    )
                                })}
							<button type='button'>læs mere</button>
							</figcaption>
                        </figure>
						</div>
					</HomeStyle>
				)
			})}
		</ContentWrapper>
	</>
  )
}

export default Home
