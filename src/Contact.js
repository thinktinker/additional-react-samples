import React from "react"

function Contact({contactForm}) {
    return (
        <div className="content-area">
            <h1>Create Your Contact List</h1>
            <p>
                Add the name list below.
            </p>
            {contactForm}
        </div>
    )
}

export default Contact