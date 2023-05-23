import { useEffect, useState } from 'react';
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
        .then(json => {
            setMeaning({
                word: json[0].word,
                phonetic: json[0].phonetic,
                partOfSpeech: json[0].meanings[0].partOfSpeech,
                definition: json[0].meanings[0].definitions[0].definition
            });
        });
    }

    // useEffect(() => {
    //     getWord();
    // }, []);

    return(
        <div>
            <section class="contact sec-pad dynamicBg">
                <div class="main-container">
                    <h2 class="heading heading-sec heading-sec__mb-med">
                        <span class="heading-sec__main">Dictonary</span>
                        <span class="heading-sec__sub heading-sec__sub--lt">
                            Search for a word
                        </span>
                    </h2>
                    <div class="contact__form-container">
                        <input 
                            id="word" 
                            value={inputWord}
                            required placeholder="Enter a word to search" 
                            type="text" 
                            class="contact__form-input" 
                            name="word-search"
                            onChange={(e) => setInputWord(e.target.value)}
                            />
                        <br /><br />
                        <button 
                            class="btn btn--theme contact__btn"
                            onClick={() => getWord()}>
                            Search
                        </button>
                        <h3 class="word__h3">{meaning.word}</h3>
                        <div class="word__details">
                            <p>{meaning.partOfSpeech}</p>
                            <p>{meaning.phonetic}</p>
                        </div>
                        <span class="heading-sec__sub heading-sec__sub--lt">
                            {meaning.definition}
                        </span>
                    
                    </div>
                    
                    
                </div>
            </section>
        </div>
    )
}

export default Projects;