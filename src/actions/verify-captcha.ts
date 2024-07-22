"use server";
export const verifyCaptcha = async (token: string) => {
    const secretKey = process.env.CAPTCHA_SECRET_KEY; // Secret key của bạn
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
    }).then((response) => response.json());

    try {
        if (response.success) {
            return { success: true, message: "CAPTCHA verified successfully!" };
        } else {
            return { success: false, message: "Failed to verify CAPTCHA." };
        }
    } catch (error) {
        return { success: false, message: "Server error during CAPTCHA verification." }
    }
};

