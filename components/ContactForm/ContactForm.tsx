import { Button, Checkbox, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
return <form>
    <TextInput withAsterisk label="First Name"/>
    <TextInput withAsterisk label="Last Name"/>
    <TextInput withAsterisk label="Email" placeholder="your@email.com"/>

</form>
}
