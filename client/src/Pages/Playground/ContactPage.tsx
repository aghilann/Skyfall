import React from 'react';
import { HeaderAction } from "../../Components";
import { headerData } from '../../Components';
import { ContactUs } from "./ContactUs";

export const ContactPage = () => {
    return <>
    <HeaderAction {...headerData} />
    <ContactUs />
    </>

};