"use client"

import {useFormStatus} from "react-dom";
import {Button} from "@/components/ui/button";

export default function Submit() {
    const pending = useFormStatus().pending

    return (
        <Button type={"submit"} size={"md"} color={"success"} disabled={pending}>
            {pending ? 'Submitting...' : 'Submit'}
        </Button>
    )
}