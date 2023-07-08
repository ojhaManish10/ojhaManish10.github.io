import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <section className="home-hero">
                <div className="home-hero__content">
                    <h1 className="heading-primary">Hey, I'm Manish Ojha</h1>
                    <div className="home-hero__info">
                        <p className="text-primary">
                            Emerging Software Developer with experience in Web Development and Support role.
                            A recent graduate of Information
                            Technology equipped with a diverse and useful skill set.
                        </p>
                    </div>
                    <div className="home-hero__cta">
                        <Link to="/projects" className="btn btn--bg">Projects</Link>
                    </div>
                </div>
                <div className="home-hero__socials">
                    <div className="home-hero__social">
                        <a href="https://www.linkedin.com/in/ojha-manish/" className="home-hero__social-icon-link" rel="noreferrer"
                        target="_blank">
                            <img src="img/linkedin-dark.svg" alt="Manish Ojha Linkedin Profile"
                                className="home-hero__social-icon" />
                        </a>
                    </div>
                    <div className="home-hero__social">
                        <a href="https://twitter.com/" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                            <img src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg" alt="Twitter " className="home-hero__social-icon" />
                        </a>
                    </div>
                    <div className="home-hero__social">
                        <a href="https://www.youtube.com/"
                        className="home-hero__social-icon-link home-hero__social-icon-link--bd-none" rel="noreferrer" target="_blank">
                            <img src="https://d33wubrfki0l68.cloudfront.net/7c95be3350552a5e9f2fc47f1bdbac118ea4dcee/f7a5e/assets/svg/yt-dark.svg" alt="Youtube" className="home-hero__social-icon" />
                        </a>
                    </div>
                    <div className="home-hero__social">
                        <a href="https://github.com/ojhaManish10" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                            <img src="img/github-dark.svg" alt="Manish Ojha Github Profile" className="home-hero__social-icon" />
                        </a>
                    </div>

                    <div className="home-hero__social">
                        <a href="https://dev.to/" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                            <img src="https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg" alt="Manish Blog" className="home-hero__social-icon" />
                        </a>
                    </div>
                </div>
                <div className="home-hero__mouse-scroll-cont">
                    <div className="mouse"></div>
                </div>
            </section>
        </div>
    )
}

export default Home;