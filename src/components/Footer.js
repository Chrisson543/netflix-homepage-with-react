import '../styles/Footer.css';

export default function Footer(){
    return(
        <footer>
            <p className='questions-text'>Questions? Contact us.</p>
            <div className='footer-div'>
                <div>
                    <p>FAQ</p>
                    <p>Investor Relations</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                </div>
                <div>
                    <p>Help Center</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                    <p>Legal Notices</p>
                </div>
                <div>
                    <p>Account</p>
                    <p>Ways to watch</p>
                    <p>Corporate Information</p>
                    <p>Only on Netflix</p>
                </div>
                <div>
                    <p>Media Center</p>
                    <p>Terms of use</p>
                    <p>Contact us</p>
                </div>
            </div>
            <p className='netflix-nigeria-text'>Netflix Nigeria</p>
        </footer>
    );
};