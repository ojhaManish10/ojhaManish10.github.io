import { useEffect, useState } from 'react';
import './Contact.css';
import { json } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState("");
    const [thanksMsg, setThanksMsg] = useState("");
    const handleSubmit = ()=>{
        setThanksMsg("thanks" + name);
    }
    // const [values, setValues] = useState({
    //     word : '',
    //     origin: '',
    //     defination:''

    // });

    // const getPracticeUsingFetch = () =>{
    //     const test = fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
    //     .then(response => response.json())
    //     .then(json => setValues(json));
    // }

    // useEffect(() => {
    //     getPracticeUsingFetch();
    // }, []);

    return(
        <div>
            <section class="contact sec-pad dynamicBg">
                <div class="main-container">
                    <h2 class="heading heading-sec heading-sec__mb-med">
                        <span class="heading-sec__main">Contact</span>
                        <span class="heading-sec__sub heading-sec__sub--lt">
                            Feel free to Contact me by submitting the form below and I will get
                            back to you as soon as possible
                        </span>
                    </h2>
                    <div class="contact__form-container">
                        <form id="contactForm" class='contact__form'>
                            <input type='hidden' name='form-name' value='form 1' />
                            <div class="contact__form-field">
                                <label class="contact__form-label" for="full-name">Name</label>
                                <input 
                                    id="full-name" 
                                    value={name}
                                    required placeholder="Enter Your Name" 
                                    type="text" 
                                    class="contact__form-input" 
                                    name="full-name"
                                    onChange={(e) => setName(e.target.value)}
                                    />
                            </div>
                            <div class="contact__form-field">
                                <label class="contact__form-label" for="email">Email</label>
                                <input required placeholder="Enter Your Email" type="email" class="contact__form-input" name="email"
                                    id="email" />
                            </div>
                            <div class="contact__form-field">
                                <label class="contact__form-label" for="message">Message</label>
                                <textarea required cols="30" rows="10" class="contact__form-input" placeholder="Enter Your Message"
                                        name="message" id="message"></textarea>
                            </div>
                            <button 
                                // type="submit" 
                                class="btn btn--theme contact__btn"
                                onClick={() => handleSubmit()}
                                >
                                Submit
                            </button>

                            
                        </form>
                        <p class="contact__form-label">{thanksMsg}</p>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;