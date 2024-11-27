// terms page
// import tailwind global CSS
import '../styles/globals.css'

// use a container too
import { Container}  from '@mantine/core'

// here's the main dish
export default function Terms() {
    return <div className="min-h-[100vh] mt-10 mb-10">
        <Container size="xl">
        <h1 className="font-bold mb-1 text-lg">TERMS OF USE</h1>
        <p>In addition to the Terms of Use described below, please also review our “Disclaimers” page (accessible via the link in our website footer).</p>
        <p className="mb-1 mt-3">Please read these Terms and Conditions before using, or submitting content in any form or medium for publication on the ADVISER ELITE site. By continuing to use, or by submitting content for publication on ADVISERELITE.com, you agree to abide, and that you are bound, by these Terms and Conditions. We reserve the right to change these Terms and Conditions at any time, and you agree (including by virtue of your continued use of our site) to be bound by any such changes. Unless explicitly stated otherwise, any new features or functionality (including, without limitation, video and related projects) that augment or enhance our site shall be subject to these Terms and Conditions. The most current version of these Terms and Conditions can be viewed at any time at ADVISERELITE.com.</p>
        <p>&mdash; We May Discontinue or Suspend Our Site or Terminate Your Use: We reserve the right at any time and from time to time to modify or discontinue, temporarily or permanently, our site (or any part thereof) with or without notice. You agree that ADVISER ELITE shall not be liable to you or any third party for any such modification, suspension or discontinuance of our site. In addition, we reserve the right to terminate your access to our site for any reason, and to take any other actions that ADVISER ELITE in its sole discretion, believes to be in the interest of our company and of our users as a whole.</p>
        </Container>
    </div>
}