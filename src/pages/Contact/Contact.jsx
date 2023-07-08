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
            <section className="contact sec-pad dynamicBg">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-med">
                        <span className="heading-sec__main">Contact</span>
                        <span className="heading-sec__sub heading-sec__sub--lt">
                            Feel free to Contact me by submitting the form below and I will get
                            back to you as soon as possible
                        </span>
                    </h2>
                    <div className="contact__form-container">
                        <form id="contactForm" className='contact__form'>
                            <input type='hidden' name='form-name' value='form 1' />
                            <div className="contact__form-field">
                                <label className="contact__form-label" for="full-name">Name</label>
                                <input 
                                    id="full-name" 
                                    value={name}
                                    required placeholder="Enter Your Name" 
                                    type="text" 
                                    className="contact__form-input" 
                                    name="full-name"
                                    onChange={(e) => setName(e.target.value)}
                                    />
                            </div>
                            <div className="contact__form-field">
                                <label className="contact__form-label" for="email">Email</label>
                                <input required placeholder="Enter Your Email" type="email" className="contact__form-input" name="email"
                                    id="email" />
                            </div>
                            <div className="contact__form-field">
                                <label className="contact__form-label" for="message">Message</label>
                                <textarea required cols="30" rows="10" className="contact__form-input" placeholder="Enter Your Message"
                                        name="message" id="message"></textarea>
                            </div>
                            <button 
                                // type="submit" 
                                className="btn btn--theme contact__btn"
                                onClick={() => handleSubmit()}
                                >
                                Submit
                            </button>

                            
                        </form>
                        <p className="contact__form-label">{thanksMsg}</p>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;