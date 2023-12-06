import React, { useRef } from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import emailjs from '@emailjs/browser';
import './styles.scss';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_44pps4o', 'template_k4umofl', form.current, 'fSw0OFFczwRb_AJau')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent !')
      }, (error) => {
        console.log(error.text);
        alert('Email not Sent !')
      });
  };

  return (
    <section className='contact' id='contact'>
      <PageHeaderContent headerText='contact me' />

      <div className='contact__content'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translatex(0px)"
          }}
        >
          <h3 className='contact__content__header-text'>Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translatex(0px)"
          }}
        >
          <form className='contact__content__form' ref={form} onSubmit={sendEmail}>
            <div className='contact__content__form__controlswrapper'>

              <div>
                <input required name='from_name' className='inputName' type={'text'} />
                <label htmlFor='name' className='nameLabel'>Name</label>
              </div>

              <div>
                <input required name='from_email' className='inputEmail' type={'text'} />
                <label htmlFor='email' className='emailLabel'>Email</label>
              </div>

              <div>
                <textarea required name='message' className='inputDescription' type={'text'} rows='5' />
                <label htmlFor='description' className='descriptionLabel'>Message</label>
              </div>
            </div>

            <button>Submit</button>
            
          </form>

        </Animate>
      </div>
    </section>
  )
}

export default Contact
