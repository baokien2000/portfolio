import nodeMailer from 'nodemailer';
interface optionsProps{
    to: string,
    subject: string,
    message: string

}
export const sendEmail = async (options: optionsProps) => {
    var transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.MAIL_APP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.to,
        subject: options.subject,
        html: options.message,
    };
    await transporter.sendMail(mailOptions);
};

