"use client"

import {useState} from "react";
import {login} from "@/actions/auth/login";
import Logo from "@/components/logo";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
        rememberMe: false,
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

        const loginResponse = await login(form);
        setLoading(false);

        if (loginResponse.success) {
            router.push("/app")
        } else {
            setErrors(loginResponse.errors)
        }
    }

    return (
        <div className="w-full py-12">
            <div className={"w-full flex justify-center pb-3"}>
                <Logo imageSize={64} displayText={false}/>
            </div>
            <div className={"text-center flex flex-col gap-y-3 mb-10"}>
                <h1 className="text-2xl font-bold">Welcome to Clue<span className={"text-accent"}>Forge</span>!</h1>
                <p>Log in and start creating unique escape rooms!</p>
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
                        autoComplete={"current-password"}
                        required={true}
                        className={"border rounded border-secondary py-2 px-3 focus:outline-accent"}
                    />
                </div>

                <div className={"flex flex-col gap-1"}>
                    <div className={"flex gap-3"}>
                        <input
                            id={"rememberMe"}
                            type={"checkbox"}
                            name={"rememberMe"}
                            checked={form.rememberMe}
                            onChange={handleChange}
                            autoComplete={"off"}
                            className={"border-secondary focus:outline-accent accent-accent"}
                        />
                        <label htmlFor="terms">Remember me</label>
                    </div>
                    {errors.rememberMe && <p className="text-danger text-sm">{errors.rememberMe}</p>}
                </div>

                <div className={"flex justify-end"}>
                    <Button type={"submit"} size={"md"} color={"success"} disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </Button>
                </div>
            </form>
        </div>
    )
}