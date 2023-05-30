import { useEffect, useState } from 'react';
import Search from '../../components/Search/search';
import CurrentWeater from '../../components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../../api/api';
import './Projects.css';

const Projects = () => {
    const [meaning, setMeaning] = useState({
        word : '',
        phonetic: '',
        partOfSpeech:'',
        definition:''

    });

    const [inputWord, setInputWord] = useState('');

    const getWord = () =>{
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + inputWord;
        const test = fetch(url)
        .then(response => response.json())
        .then( json => {
            setMeaning({
                word: json[0].word,
                phonetic: json[0].phonetic,
                partOfSpeech: json[0].meanings[0].partOfSpeech,
                definition: json[0].meanings[0].definitions[0].definition
            });
        });
    }

    // Function for current weather and forecast
    const [currentWeather, setCurrentweather] = useState(null)
    const [forecast, setForecast] = useState(null)

    const handleOnSearchChange = (searchData) =>{
        const[lat, lon] = searchData.value.split(" ")

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

        Promise.all([currentWeatherFetch, forecastFetch])
        .then(async(response) =>{
            const weatherResponse = await response[0].json()
            const forecastResponse = await response[1].json()

            setCurrentweather({city: searchData.label, ...weatherResponse})
            setForecast({city:searchData.label, ...forecastResponse})
        })
        .catch((err) => console.log(err))
    }
    

    console.log(currentWeather)
    console.log(forecast)
    // useEffect(() => {
    //     getWord();
    // }, []);

    return(
        <div>
            <section className="contact sec-pad dynamicBg">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-med">
                        <span className="heading-sec__main">Dictonary</span>
                        <span className="heading-sec__sub heading-sec__sub--lt">
                            Search for a word
                        </span>
                    </h2>
                    <div className="contact__form-container">
                        <input 
                            id="word" 
                            value={inputWord}
                            required placeholder="Enter a word to search" 
                            type="text" 
                            className="contact__form-input" 
                            name="word-search"
                            onChange={(e) => setInputWord(e.target.value)}
                            />
                        <br /><br />
                        <button 
                            className="btn btn--theme contact__btn"
                            onClick={() => getWord()}>
                            Search
                        </button>
                        <h3 className="word__h3">{meaning.word}</h3>
                        <div className="word__details">
                            <p>{meaning.partOfSpeech}</p>
                            <p>{meaning.phonetic}</p>
                        </div>
                        <span className="heading-sec__sub heading-sec__sub--lt">
                            {meaning.definition}
                        </span>
                        
                        <Search onSearchChange={handleOnSearchChange}/>
                        
                    </div>

                    {/* Component for current weather */}
                    {currentWeather && <CurrentWeater data={currentWeather}/>}
                </div>
            </section>
        </div>
    )
}

export default Projects;