/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable camelcase */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';

class ContactForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            first_name: '', last_name: '', email: '', phone: '', message: ''
        };
    }

    handleChange = (e: any) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    render() {
        const { disabled } = this.props;
        const {
            first_name, last_name, email, phone, message
        } = this.state;

        return (
            <form
                className="ui form"
                name="form-contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/contact/thanks"
            >
                <fieldset style={{ border: 'none' }} disabled={disabled}>
                    <input type="hidden" name="form-name" value="form-contact" />
                    <input type="hidden" name="bot-field" />
                    <div className="field">
                        <label htmlFor="first_name" aria-controls="first_name">First name</label>
                        <div className="ui fluid input">
                            <input
                                required
                                type="text"
                                name="first_name"
                                value={first_name}
                                placeholder="First name"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="last_name" aria-controls="last_name">Last name</label>
                        <div className="ui fluid input">
                            <input
                                required
                                type="text"
                                name="last_name"
                                value={last_name}
                                placeholder="Last name"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="email" aria-controls="email">Email</label>
                        <div className="ui fluid input">
                            <input
                                required
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="phone" aria-controls="phone">Phone</label>
                        <div className="ui fluid input">
                            <input
                                required
                                type="tel"
                                name="phone"
                                value={phone}
                                placeholder="Phone"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="message" aria-controls="message">Your message</label>
                        <textarea
                            name="message"
                            placeholder="Let's grab a coffee"
                            value={message}
                            rows={3}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="field">
                        <button className="ui button primary" type="submit">
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default ContactForm;
