"use client"

import {useRouter} from "next/navigation";
import {useState} from "react";
import {register} from "@/actions/auth/register";
import Logo from "@/components/logo";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Register(){
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        first_name: "",
        last_name: "",
        acceptedTerms: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value, checked } = event.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setErrors({});

        const registerResponse = await register(form);

        setLoading(false);

        if (registerResponse.success) {
            router.push("/verify-email-instructions")
        } else {
            setErrors(registerResponse.errors);
        }
    }

    return (
        <div className="w-full py-12">
            <div className={"w-full flex justify-center pb-3"}>
                <Logo imageSize={64} displayText={false}/>
            </div>
            <div className={"text-center flex flex-col gap-y-3 mb-10"}>
                <h1 className="text-2xl font-bold">Welcome to Clue<span className={"text-accent"}>Forge</span>!</h1>
                <p>Sign up and start creating unique escape rooms!</p>
            </div>

            <form onSubmit={handleSubmit} className={"flex flex-col gap-y-6"}>
                <div className={"flex flex-col gap-1"}>
                    <div className={"flex justify-between"}>
                        <label htmlFor="email">Email <span className={"text-sm align-text-top"}>*</span></label>
                        {errors.email && <p className="text-danger text-sm">{errors.email}</p>}
                    </div>
                    <input
                        id={"email"}
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={handleChange}
                        autoComplete={"email"}
                        required={true}
                        className={"border rounded border-secondary py-2 px-3 focus:outline-accent"}
                    />
                </div>

                <div className={"flex flex-col gap-1"}>
                    <div className={"flex justify-between"}>
                        <label htmlFor="password">Password <span className={"text-sm align-text-top"}>*</span></label>
                        {errors.password && <p className="text-danger text-sm">{errors.password}</p>}
                    </div>
                    <input
                        id={"password"}
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={handleChange}
                        autoComplete={"new-password"}
                        required={true}
                        className={"border rounded border-secondary py-2 px-3 focus:outline-accent"}
                    />
                </div>

                <div className={"flex flex-col gap-1"}>
                    <div className={"flex justify-between"}>
                        <label htmlFor="password">Confirm password <span className={"text-sm align-text-top"}>*</span></label>
                        {errors.passwordConfirm && <p className="text-danger text-sm">{errors.passwordConfirm}</p>}
                    </div>

                    <input
                        id={"passwordConfirm"}
                        type={"password"}
                        name={"passwordConfirm"}
                        value={form.passwordConfirm}
                        onChange={handleChange}
                        autoComplete={"new-password"}
                        required={true}
                        className={"border rounded border-secondary py-2 px-3 focus:outline-accent"}
                    />
                </div>

                <div className={"flex flex-col gap-1"}>
                    <div className={"flex justify-between"}>
                        <label htmlFor="first_name">First name <span
                            className={"text-sm align-text-top"}>*</span></label>
                        {errors.first_name && <p className="text-danger text-sm">{errors.first_name}</p>}
                    </div>
                    <input
                        id={"first_name"}
                        type={"text"}
                        name={"first_name"}
                        value={form.first_name}
                        onChange={handleChange}
                        autoComplete={"given-name"}
                        required={true}
                        className={"border rounded border-secondary py-2 px-3 focus:outline-accent"}
                    />
                </div>

                <div className={"flex flex-col gap-1"}>
                    <div className={"flex justify-between"}>
                        <label htmlFor="last_name">Last name <span className={"text-sm align-text-top"}>*</span></label>
                        {errors.last_name && <p className="text-danger text-sm">{errors.last_name}</p>}
                    </div>
                    <input
                        id={"last_name"}
                        type={"text"}
                        name={"last_name"}
                        value={form.last_name}
                        onChange={handleChange}
                        autoComplete={"family-name"}
                        required={true}
                        className={"border rounded border-secondary py-2 px-3 focus:outline-accent "}
                    />
                </div>

                <div className={"flex flex-col gap-1"}>
                {/*todo: change terms and conditions link */}
                    <div className={"flex gap-3"}>
                        <input
                            id={"terms"}
                            type={"checkbox"}
                            name={"acceptedTerms"}
                            checked={form.acceptedTerms}
                            onChange={handleChange}
                            autoComplete={"off"}
                            className={"border-secondary focus:outline-accent accent-accent"}
                        />
                        <label htmlFor="terms">I have read and accept the <Link href={"/"} className={"text-accent font-semibold"}>Terms and conditions</Link>. <span className={"text-sm align-text-top"}>*</span></label>
                    </div>
                    {errors.acceptedTerms && <p className="text-danger text-sm">{errors.acceptedTerms}</p>}
                </div>

                <div className={"flex justify-end"}>
                    <Button type={"submit"} size={"md"} color={"success"} disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </Button>
                </div>
            </form>
        </div>
    )
}