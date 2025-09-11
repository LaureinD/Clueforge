"use client"

import {useSearchParams} from "next/navigation";
import {useState} from "react";
import {sendVerificationEmail} from "@/actions/auth/verifyEmail";
import {Button} from "@/components/ui/button";

export default function VerifyEmailInstructions(){
    const params = useSearchParams();
    const emailParam = params.get('email') || '';

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

    const handleResend = async () => {
        if (!emailParam) return;

        setLoading(true);
        setMessage(null);
        setIsSuccess(null);

        const response = await sendVerificationEmail(emailParam);

        setLoading(false);

        if (response.success) {
            setIsSuccess(true);
            setMessage("Verification email has been sent.")
        } else {
            setIsSuccess(false);
            setMessage(response.message || "Something went wrong. Please try again later.")
        }
    }

    return (
        <div className="w-full py-12 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Check your email!</h1>
            <p className="text-center mb-6">
                A verification email has been sent to:
                <span className="font-semibold ml-1"> {emailParam} </span>
            </p>

            <p className="text-center mb-12">
                Please click the link in the email to verify your account.
            </p>

            <Button onClick={() => handleResend} disabled={loading} type={"button"} color={"background"} size={"md"}>
                {loading ? "Sending..." : "Resend verification email"}
            </Button>

            {message &&
                <p className={`${isSuccess ? "text-success" : "text-danger"} text-sm text-center mt-4`}>{message}</p>
            }
        </div>
    )
}