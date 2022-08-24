import React from 'react';
import { useEffect, useRef, useState } from 'react';




export default function Contact() {
    const form = useRef(null);
    ClickOutside(form);

    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);

    function ClickOutside(ref) {
        useEffect(() => {
            function handleClick(e) {
                if (ref.current && !ref.current.contains(e.target)) {
                    checkEmail();
                    checkMessage();
                    console.log('clicked')
                }
            }
            document.addEventListener('click', handleClick);
            return () => document.removeEventListener('click', handleClick);
        }, [ref]);
    };
    
    function checkEmail() {
        const email = document.getElementById('emailInput').value;
        let emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
        setEmailValid(emailValid);
    }
    
    function checkMessage() {
        let validMessage
        const messageLen = document.getElementById('messageInput').value.trim().length;
        messageLen >=5 ? validMessage = true : validMessage = false;
        setMessageValid(validMessage);
    }

    return (
        <div className='column content'>
            <div className='columns is-centered'>
              <div className='column is-7'>
                <div className='box'>
                  <h1 className='has-text-centered'>Reach Out!</h1>
                  <form ref={form}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="No judgement"/>
                        </div>
                    </div>
                    <div className="field" >
                        <label className="label">Email</label>
                        <div className="control has-icons-right">
                            <input id= 'emailInput' className={emailValid ? 'input' : 'input is-danger'} type="text" placeholder="Email"/>
                            <span className="icon is-small is-right">
                                {emailValid ?
                                <i/> :
                                <i className="fas fa-exclamation-triangle"/>}
                            </span>
                        </div>
                        {emailValid ?
                         <p/> :
                        <p className='help is-danger'>Please enter a valid email address</p> }
                        
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea id='messageInput'className={messageValid ? 'textarea' : "textarea is-danger"} placeholder="Whisper sweet nothings into my inbox..."/>
                        </div>
                        {messageValid ?
                         <p/> :
                         <p className='help is-danger'>Please include a message</p>
                        }
                    </div>

                  </form>


                  <button className='button is-link mt-3'>Submit</button>


                </div>
              </div>
            </div>
        </div>
    )
};