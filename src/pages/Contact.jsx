import { useState } from "react";

function Contact () {
    // const email = "john@mail.com"
    const [email, setEmail] = useState("")

    return (
        <>
            <form id="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                <br/>
                <label for="email">Email:</label>
                <input 
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value)

                        console.log(email)
                    }} 
                    onBlur={() => {
                        if(email == "") {
                            document.getElementById("email-warning").style.display = "block"
                        } else {
                            document.getElementById("email-warning").style.display = "none"
                        }
                    }}
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                />
                <p id="email-warning" className="warning">Email is invalid!</p>
                <br/>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required/>
                <br/>
                <button type="submit">Send</button>
            </form>
        </>
    )
}

export default Contact;