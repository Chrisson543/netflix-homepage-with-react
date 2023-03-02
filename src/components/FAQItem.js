import React from 'react';
import '../styles/FAQItem.css';

export default function FAQItem(props){
    const [show, setShow] = React.useState(false)
    function showDropdown(){
        setShow(prevShow => !prevShow);
    };
    return(
        <div className='faq-item'>
            <button className='faq-button' onClick={showDropdown}>
                {props.text}
                <p>+</p>
            </button>
            {show && 
                <div className='dropdown'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, delectus. Sequi esse porro aspernatur a consequatur similique, sint assumenda qui minus quo rerum, suscipit dolores nam ipsa explicabo. A, laborum.</p>
                </div>
            }
        </div>
    );
};