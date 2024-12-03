'use client'
import { useRef, useState } from 'react'
import { Button, Checkbox, Group, Textarea, TextInput, Select } from '@mantine/core'
import { useForm } from '@mantine/form'
import emailjs from '@emailjs/browser'

export default function ContactForm() {

const form = useRef<HTMLFormElement>(null);

const [service, setService] = useState<string | null>('');
const [commitment, setCommitment] = useState<string | null>('');
const [investment, setInvestment] = useState<string | null>('');
const [sponsored, setSponsored] = useState<string | null>('');

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstnamefield = document.getElementsByName('first_name')[0] as HTMLInputElement
    const lastnamefield = document.getElementsByName('last_name')[0] as HTMLInputElement
    const emailfield = document.getElementsByName('from_email')[0] as HTMLInputElement
    const linkedinfield = document.getElementsByName('from_linkedin')[0] as HTMLInputElement
    const servicefield = document.getElementsByName('service')[0] as HTMLSelectElement
    const resultsfield = document.getElementsByName('desired_results')[0] as HTMLTextAreaElement
    const commitmentfield = document.getElementsByName('commitment')[0] as HTMLSelectElement
    const investmentfield = document.getElementsByName('investment')[0] as HTMLSelectElement
    const sponsoredfield = document.getElementsByName('sponsored')[0] as HTMLSelectElement
    const extrasfield = document.getElementsByName('extras')[0] as HTMLTextAreaElement

    if (firstnamefield.value == '' || lastnamefield.value == '' || emailfield.value == '' || linkedinfield.value == '' || servicefield.value == '' || resultsfield.value == '' || commitmentfield.value == '' || investmentfield.value == '' || sponsoredfield.value == '') {
        alert('Please fill out all fields before submitting.')
        return
    }

    if (form.current) {
        emailjs
            .sendForm('adviser_gmail', 'template_d3jthfs', form.current, {
                publicKey: 'cvgcZAiWCc-Ls3NU1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Your request has been sent! We will reply within 24-48 hours.')
                    firstnamefield.value = ''
                    lastnamefield.value = ''
                    emailfield.value = ''
                    linkedinfield.value = ''
                    setService(null)
                    resultsfield.value = ''
                    setCommitment(null)
                    setInvestment(null)
                    setSponsored(null)
                    extrasfield.value = ''
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
        <div className="flex flex-col md:flex-row">
        <TextInput className="w-full mt-3" withAsterisk label="First Name" name="first_name" />
        <TextInput className="w-full mt-3 md:ml-5" withAsterisk label="Last Name" name="last_name" />
        </div>
        <TextInput className="mt-3" withAsterisk label="Email" placeholder="your@email.com" name="from_email" />
        <TextInput className="mt-3" withAsterisk label="LinkedIn Profile Link" placeholder="linkedin.com/your_profile" name="from_linkedin" />
        <Select className="mt-3" withAsterisk label="Primary service of interest:" placeholder="Select a service" data={['Strategic Advisory Services', 'C-suite Executive Coaching', 'Breakthrough Sessions', 'Hybrid and Custom Services', 'Other']} name="service" value={service} onChange={(val) => setService(val)}/>
        <Textarea className="mt-3" minRows={6} autosize withAsterisk label="What specific results are you looking to accomplish by working with an adviser and/or coach?" name="desired_results" />
        <Select className="mt-3" withAsterisk label="How committed are you to accomplishing these results on a 1-10 scale (with 10 being 100% committed)?" placeholder="Select an option" data={['10', '9', '8', '7', '6', 'Not very committed.']} name="commitment" value={commitment} onChange={(val) => setCommitment(val)}/>
        <Select className="mt-3" withAsterisk label="At this time, are you able to make an investment in yourself and the service of interest?" placeholder="Select an option" data={['Yes', 'No']} name="investment" value={investment} onChange={(val) => setInvestment(val)}/>
        <Select className="mt-3" withAsterisk label="Will your company be sponsoring your work with an adviser and/or coach?" placeholder="Select an option" data={['Yes', 'No', 'Maybe']} name="sponsored" onChange={(val) => setSponsored(val)}/>
        <Textarea className="mt-3" placeholder="This section is optional." minRows={3} autosize label="Is there anything else you would like Scott to know?" name="extras" />
        <Button type="submit" fullWidth bg="#0079be" mt="20" size="lg">Submit Your Request</Button>
    </form>
}
