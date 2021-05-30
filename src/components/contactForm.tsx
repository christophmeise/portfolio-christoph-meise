/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import styled from 'styled-components';
import { Button, ButtonSizes } from '../styles/button';

const CustomForm = styled.form`
    margin-top: 64px;
    label {
        color: ${(props) => props.theme.colors.fontWhite};
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        margin-bottom: 16px;
        margin-left: 28px;
        text-align: left;
    }
    input {
        background-color: #fff;
        border: 1px solid #ccc;
        color: ${(props) => props.theme.colors.fontBlack};
        display: block;
        font-size: 20px;
        height: 38px;
        line-height: 28px;
        margin-bottom: 0;
        min-height: 72px;
        padding: 8px 12px;
        padding-left: 28px;
        box-sizing: border-box;
        width: 100%;
    }
    textarea {
        background-color: #fff;
        background-position: 99% 95%;
        background-repeat: no-repeat;
        background-size: 16px;
        border: 1px #000;
        color:  ${(props) => props.theme.colors.fontBlack};
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 0;
        max-width: 100%;
        min-height: 160px;
        min-width: 100%;
        padding-left: 28px;
        padding-right: 24px;
        padding-top: 16px;
        box-sizing: border-box;
    }
    fieldset {
        border: 0;
        margin: 0;
        padding: 0;
    }
`;

const FormField = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
`;
const Submit = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-top: 64px;
    padding-bottom: 64px;
`;
class ContactForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '', email: '', message: ''
        };
    }

    handleChange = (e: any) => {
        this.setState((prevState: any) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    render() {
        const { disabled } = this.props;
        const {
            name, email, message
        } = this.state;

        return (
            <CustomForm
                name="form-contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/contact/thanks"
            >
                <fieldset disabled={disabled}>
                    <input type="hidden" name="form-name" value="form-contact" />
                    <input type="hidden" name="bot-field" />
                    <FormField className="field">
                        <label htmlFor="name" aria-controls="name">Name & Company</label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={name}
                            placeholder="James Smith from ACME"
                            onChange={this.handleChange}
                        />
                    </FormField>
                    <FormField className="field">
                        <label htmlFor="email" aria-controls="email">Email</label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={email}
                            placeholder="james@smith.me"
                            onChange={this.handleChange}
                        />
                    </FormField>
                    <FormField>
                        <label htmlFor="message" aria-controls="message">Project Description</label>
                        <textarea
                            name="message"
                            maxLength={5000}
                            placeholder="We are looking for a developer to create something beautiful..."
                            value={message}
                            rows={5}
                            onChange={this.handleChange}
                        />
                    </FormField>
                    <Submit>
                        <Button size={ButtonSizes.l} inverted type="submit">
                            Submit
                        </Button>
                    </Submit>
                </fieldset>
            </CustomForm>
        );
    }
}

export default ContactForm;
