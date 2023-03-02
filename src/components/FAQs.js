import '../styles/FAQs.css';
import FAQItem from './FAQItem';

export default function FAQs(){
    return(
        <section className='section-6'>
            <div className='faq-container'>
                <h1>Frequently Asked Questions</h1>
                <div className='faqs'>
                    <FAQItem text="What is Netflix?" />
                    <FAQItem text="How much does Netflix cost?" />
                    <FAQItem text="Where can I watch?" />
                    <FAQItem text="How do I cancel?" />
                    <FAQItem text="What can I watch on Netflix?" />
                    <FAQItem text="Is Netflix good for kids?" />
                </div>
            </div>
            <div className='after-faqs'>
                <p>Ready to watch? Enter your email to create or restart your membership</p>
                <div className='search'>
                    <input className='search-bar' type='email' placeholder='Email address'/>
                    <button className='get-started-button'>Get Started</button>
                </div>
            </div>
        </section>
    )
};