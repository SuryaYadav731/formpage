import React from 'react'
import styles from "./ContactForm.module.css"
import Button from '../Button/Button'
import { MdOutlineMessage } from 'react-icons/md'
import {FaPhoneVolume} from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md";
 
function ContactForm() {
    const onViaCallSubmit = ()=>{
        console.log("Call ....")
    }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
      <div className= {styles.top_btn}><Button text = "Via Support Chat"  icon={<MdOutlineMessage fontSize="24px"/>}/>
        <Button onClick={onViaCallSubmit}
        text = "Via Call"  icon={<FaPhoneVolume fontSize="24px" />} /></div>
        <Button isOutline={true}
        text = "Via Email"  icon={<MdOutlineMailOutline fontSize="24px" />} />

        <form >
        <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea  name='text' rows={10} />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "end"}
            }><Button 
               text = "Submit"   />  </div>
            
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  )
}

export default ContactForm
