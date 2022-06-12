import React from 'react';
import Contact from '../components/Contact/index.js';
// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';

const ContactPage = () => {
    return (
        <main>
            <p>
            Email me: <a href = "mailto: m.kayejordan@gmail.com">m.kayejordan@gmail.com</a> <br></br>
            Call me: 210-725-9129 or <br></br>
            <br></br>
            </p>
            <Contact />
        </main>
    );
};

export default ContactPage;