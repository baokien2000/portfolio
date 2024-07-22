"use server"

import { sendEmail } from "./send-email"
import { verifyCaptcha } from "./verify-captcha"

interface InitialState {
    message: string,
    status: number,
    errors: {
        name: string | null,
        email: string | null,
        message: string | null
    }
}
export async function sendMessage(prevState: InitialState, formData:FormData) {
    // ...
    const email = formData.get('Email')
    const name = formData.get('Name')
    const message = formData.get('Message')

        if (!name || !email || !message) {
            return {
                message: "Invalid value",
                status: 400,
                errors: {
                    name: !name ?"Name is required" : null,
                    email: !email ? "Email is required" : null,
                    message: !message ? "Message is required" : null
                    
                }
            }
        }
        if ((message as string).length < 10) {
            return {
                message: "Invalid value",
                status: 400,
                errors: {  name:  null, email:  null, message: "Message must be at least 10 characters" }
            }
    }

    const res = await sendEmail({
        to: "baokien2000@gmail.com",
        subject: 'Liên hệ từ khách hàng từ portfolio',
        message: `<div><h1>Thông tin khách hàng</h1><p>Tên: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p></div>`,
    })
    
    return { message: "Your message has been sent!", status: 200, errors: { name: null, email: null, message: null} }
}