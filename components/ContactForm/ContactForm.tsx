'use client'
import { useRef } from 'react'
import { Button, Checkbox, Group, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import emailjs from '@emailjs/browser'

export default function ContactForm() {

const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstfield = document.getElementsByName('from_name')[0] as HTMLInputElement
    const secondfield = document.getElementsByName('from_email')[0] as HTMLInputElement
    const thirdfield = document.getElementsByName('message')[0] as HTMLInputElement

    if (firstfield.value == '' || secondfield.value == '' || thirdfield.value == '') {
        alert('Please fill out all fields before submitting.')
        return
    }

    if (form.current) {
        emailjs
            .sendForm('adviser_gmail', 'template_4lfqbvo', form.current, {
                publicKey: 'cvgcZAiWCc-Ls3NU1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    firstfield.value = ''
                    secondfield.value = ''
                    thirdfield.value = ''
                    alert('Your message has been sent!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Internal server error. Please contact us directly!')
                },
            );
    } else {
        console.error('Form reference is null')
    }
}

    return <form ref={form as React.RefObject<HTMLFormElement>} onSubmit={sendEmail}>
        <TextInput className="mt-3" withAsterisk label="Name" name="from_name" />
        <TextInput className="mt-3" withAsterisk label="Email" placeholder="your@email.com" name="from_email" />
        <Textarea className="mt-3" minRows={4} autosize withAsterisk label="Message" name="message" />
        <Button type="submit" fullWidth bg="#0079be" mt="20" size="lg">Send Message</Button>
    </form>
}
