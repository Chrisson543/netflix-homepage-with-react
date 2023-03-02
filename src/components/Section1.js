import '../styles/Section1.css';

export default function Page1(){
    return(
        <section className='section-1' style={{backgroundImage: 'url(./images/background-image-1.png)', backgroundRepeat:"no-repeat",  backgroundSize:"cover" }}>
            <header>
                <img className="netflix-logo" src="./images/netflix-logo.png"/>
                <button className="sign-in-button">Sign In</button>
            </header>
            <main>
                <h1 className='unlimited-movies-text'>Unlimited movies, TV shows, and more.</h1>
                <p className='watch-anywhere-text'>Watch anywhere. Cancel anytime.</p>
                <p className='ready-to-watch-text'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='search'>
                    <input className='search-bar' type='email' placeholder='Email address'/>
                    <button className='get-started-button'>Get Started</button>
                </div>
            </main>
        </section>
    );
};