import { motion } from "framer-motion";
import { sendMessage } from "@/actions/contact-form";
import React, { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/actions/verify-captcha";
import {
    contactMotionOptiops,
    initialFormState,
    toastErrorOptions,
    toastErrorOptionsMobile,
    toastSuccessOptions,
    toastSuccessOptionsMobile,
} from "./variable";
import { useDeviceSize } from "@/hooks/useDeviceSize";

const ContactContent = () => {
    const ref = useRef<HTMLFormElement>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const [isCaptchaShow, setIsCaptchaShow] = React.useState<boolean>(false);
    const [isVerified, setIsverified] = useState<boolean>(false);
    const [width, height] = useDeviceSize();
    const [state, formAction] = useFormState(sendMessage, initialFormState);

    const [nameError, setNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [messageError, setMessageError] = useState<string | null>(null);

    const onCaptchaChange = async (value: string | null) => {
        if (!value) {
            setIsverified(false);
        } else {
            await verifyCaptcha(value)
                .then((res) => {
                    setIsverified(res.success);
                })
                .catch(() => setIsverified(false));
        }
    };

    useEffect(() => {
        if (state.status === 0) return;
        const isMobile = width < 640;
        if (state.status === 200) {
            toast(state.message, isMobile ? toastSuccessOptionsMobile : toastSuccessOptions);
            ref.current?.reset();
            setIsCaptchaShow(false);
        } else {
            toast.error(state.message, isMobile ? toastErrorOptionsMobile : toastErrorOptions);
        }
        setNameError(state.errors.name);
        setEmailError(state.errors.email);
        setMessageError(state.errors.message);
    }, [state]);

    return (
        <form ref={ref} action={formAction} className="flex gap-2 w-full flex-col max-w-[500px]">
            <motion.label {...contactMotionOptiops} htmlFor="Name" className="flex items-center justify-between">
                <span>Name</span>
                {nameError && <span className="text-red-500 text-xs"> {nameError}</span>}
            </motion.label>
            <motion.input
                {...contactMotionOptiops}
                onChange={() => setNameError(null)}
                id="Name"
                name="Name"
                className={"border mb-1 rounded outline-none p-2 bg-transparent relative " + (nameError ? " border-red-500" : "")}
                placeholder="Kien"
            />
            <motion.label {...contactMotionOptiops} htmlFor="Email" className="flex items-center justify-between">
                <span>Email</span>
                {emailError && <span className="text-red-500 text-xs"> {emailError}</span>}
            </motion.label>
            <motion.input
                {...contactMotionOptiops}
                onChange={() => setEmailError(null)}
                id="Email"
                type="email"
                name="Email"
                className={"border mb-1 rounded outline-none p-2 bg-transparent relative " + (emailError ? " border-red-500" : "")}
                placeholder="email@gmail.com"
            />
            <motion.label {...contactMotionOptiops} htmlFor="Message" className="flex items-center justify-between">
                <span>Message</span>
                {messageError && <span className="text-red-500 text-xs"> {messageError}</span>}
            </motion.label>
            <motion.textarea
                {...contactMotionOptiops}
                id="Message"
                name="Message"
                onChange={() => setMessageError(null)}
                rows={5}
                maxLength={1000}
                className={"border mb-1 rounded outline-none p-2 bg-transparent relative " + (messageError ? " border-red-500" : "")}
                placeholder="Type your message here."
            />
            <motion.div {...contactMotionOptiops} className="w-full flex-col-reverse sm:flex-row flex justify-between">
                <SubmitButton isVerified={isVerified} setIsCaptchaShow={setIsCaptchaShow} isCaptchaShow={isCaptchaShow} />
                {isCaptchaShow && (
                    <div className="captcha scale-75 phone:scale-100 " style={{ transformOrigin: "0 0" }}>
                        <ReCAPTCHA
                            className="mt-2"
                            onChange={onCaptchaChange}
                            theme={"dark"}
                            ref={recaptchaRef}
                            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
                        />
                    </div>
                )}
            </motion.div>
            <Toaster />
        </form>
    );
};

export default ContactContent;

function SubmitButton({
    isCaptchaShow,
    setIsCaptchaShow,
    isVerified,
}: {
    isCaptchaShow: boolean;
    setIsCaptchaShow: React.Dispatch<React.SetStateAction<boolean>>;
    isVerified: boolean;
}) {
    // ✅ `pending` will be derived from the form that wraps the Submit component
    const { pending } = useFormStatus();
    return (
        <button
            disabled={pending || (isCaptchaShow && !isVerified)}
            onClick={() => (!isCaptchaShow ? setIsCaptchaShow(true) : null)}
            className="mt-2 disabled:opacity-25 w-fit min-w-[150px] text-center group overflow-hidden disabled:after:opacity-0 gradient-border  relative after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:absolute after:bottom-0 after:left-0 after:w-full  after:h-full after:bg-main-gradient  bg-transparent rounded px-3 h-10 outline-none flex gap-2 items-center"
            type={isCaptchaShow ? "submit" : "button"}
        >
            <span className="mx-auto relative z-10 font-bold transition-all duration-300 group-disabled:text-transparent group-hover:text-black bg-main-gradient text-transparent bg-clip-text ">
                {pending ? "Submitting..." : "Submit"}
            </span>
        </button>
    );
}
