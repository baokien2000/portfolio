import { ToastPosition } from "react-hot-toast";

export const initialFormState = {
    captcha: null,
    message: "",
    errors: {
        name: null,
        email: null,
        message: null,
    },
    status: 0,
};
export const contactMotionOptiops = {
    viewport: { once: true },
    initial: { y: 20, opacity: 0 },
    whileInView: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};
export const toastErrorOptions = {
    position: "bottom-right" as ToastPosition,
    style: {
        backgroundColor: "transparent",
        bottom: "20px",
        color: "#fff",
        border: "2px solid #FF4B4B",
    },
    duration: 5000,
};
export const toastSuccessOptions = {
    position: "bottom-right" as ToastPosition,
    style: {
        backgroundColor: "transparent",
        bottom: "20px",
        color: "#fff",
    },
    className: "relative gradient-border ",
    duration: 5000,
};
export const toastSuccessOptionsMobile = {
    style: {
        backgroundColor: "rgba(0,0,0,0.9)",
        top: "20px",
        color: "#fff",
    },
    className: "relative gradient-border",
    duration: 5000,
};
export const toastErrorOptionsMobile = {
    style: {
        backgroundColor: "rgba(0,0,0,0.9)",
        top: "20px",
        color: "#fff",
        border: "2px solid #FF4B4B",
    },
    duration: 5000,
};