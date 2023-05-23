import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <section class="home-hero">
                <div class="home-hero__content">
                    <h1 class="heading-primary">Hey, I'm Manish Ojha</h1>
                    <div class="home-hero__info">
                        <p class="text-primary">
                            Emerging Software Developer with experience in Web Development and Support role.
                            A recent graduate of Information
                            Technology equipped with a diverse and useful skill set.
                        </p>
                    </div>
                    <div class="home-hero__cta">
                        <Link to="/projects" class="btn btn--bg">Projects</Link>
                    </div>
                </div>
                <div class="home-hero__socials">
                    <div class="home-hero__social">
                        <a href="https://www.linkedin.com/in/ojha-manish/" class="home-hero__social-icon-link" rel="noreferrer"
                        target="_blank">
                            <img src="img/linkedin-dark.svg" alt="Manish Ojha Linkedin Profile"
                                class="home-hero__social-icon" />
                        </a>
                    </div>
                    <div class="home-hero__social">
                        <a href="https://twitter.com/" class="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                            <img src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg" alt="Twitter " class="home-hero__social-icon" />
                        </a>
                    </div>
                    <div class="home-hero__social">
                        <a href="https://www.youtube.com/"
                        class="home-hero__social-icon-link home-hero__social-icon-link--bd-none" rel="noreferrer" target="_blank">
                            <img src="https://d33wubrfki0l68.cloudfront.net/7c95be3350552a5e9f2fc47f1bdbac118ea4dcee/f7a5e/assets/svg/yt-dark.svg" alt="Youtube" class="home-hero__social-icon" />
                        </a>
                    </div>
                    <div class="home-hero__social">
                        <a href="https://github.com/ojhaManish10" class="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                            <img src="img/github-dark.svg" alt="Manish Ojha Github Profile" class="home-hero__social-icon" />
                        </a>
                    </div>

                    <div class="home-hero__social">
                        <a href="https://dev.to/" class="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                            <img src="https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg" alt="Manish Blog" class="home-hero__social-icon" />
                        </a>
                    </div>
                </div>
                <div class="home-hero__mouse-scroll-cont">
                    <div class="mouse"></div>
                </div>
            </section>
        </div>
    )
}

export default Home;