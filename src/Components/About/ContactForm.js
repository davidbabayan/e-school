import React, { Component } from 'react'

class ContactForm extends Component {
    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    render() {
        return (
            <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>

                <label class="message-item" htmlFor="message-name">Your Name</label>
                <input onChange={e => this.setState({ name: e.target.value })} name="name" class="messeage-area message-name" type="text" placeholder="Your Name" value={this.state.name} />

                <label class="message-item" htmlFor="message-email">Your Email</label>
                <input onChange={(e) => this.setState({ email: e.target.value })} name="email" class="messeage-area message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

                <label class="message-item" htmlFor="message-input">Your Message</label>
                <textarea onChange={e => this.setState({ message: e.target.value })} name="message" class="messeage-area message-input" type="text" placeholder="Please write your message here" value={this.state.message} required />

                <div className="button-container">
                    <button type="submit" className="button">{this.state.buttonText}</button>
                </div>
            </form>
        );
    }

    formSubmit = (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        const apiAddress = '';
        fetch(apiAddress, {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                this.resetForm()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }




}

export default ContactForm;