"use client"

import Submit from "@/components/forms/submit";
import {useActionState} from "react";
import {createUser, Formstate} from "@/actions/userActions";

export default function CreateUser(){
    const initialState: Formstate = {
        errors: {}
    }

    const [state, formAction] = useActionState<Formstate, FormData>(createUser, initialState)

    return (
        <form action={formAction} className={"w-full h-full p-6 flex flex-col gap-y-6"}>
            <h2 className={"text-center text-4xl my-6"}>Create new user</h2>
            <div className={"flex flex-col gap-1"}>
                <label htmlFor="email">Email *</label>
                <input
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    autoComplete={"email"}
                    // required={true}
                    className={"border rounded border-secondary py-2 px-3 focus:outline-accent"}
                />
                {
                    state?.errors?.email &&
                    state.errors.email.map((error, index ) => (
                        <p key={index} className={"text-danger text-sm"}>{error}</p>
                    ))
                }
            </div>

            <div className={"flex flex-col gap-1"}>
                <label htmlFor="password">Password *</label>
                <input
                    id={"password"}
                    type={"password"}
                    name={"password"}
                    autoComplete={"current-password"}
                    // required={true}
                    className={"border rounded border-secondary py-2 px-3 focus:outline-accent"}
                />
                {
                    state?.errors?.password &&
                    state.errors.password.map((error, index ) => (
                        <p key={index} className={"text-danger text-sm"}>{error}</p>
                    ))
                }
            </div>

            <div className={"flex flex-col gap-1"}>
                <label htmlFor="first_name">First name *</label>
                <input
                    id={"first_name"}
                    type={"text"}
                    name={"first_name"}
                    autoComplete={"given-name"}
                    // required={true}
                    className={"border rounded border-secondary py-2 px-3 focus:outline-accent"}
                />
                {
                    state?.errors?.first_name &&
                    state.errors.first_name.map((error, index ) => (
                        <p key={index} className={"text-danger text-sm"}>{error}</p>
                    ))
                }
            </div>

            <div className={"flex flex-col gap-1"}>
                <label htmlFor="last_name">Last name *</label>
                <input
                    id={"last_name"}
                    type={"text"}
                    name={"last_name"}
                    autoComplete={"family-name"}
                    // required={true}
                    className={"border rounded border-secondary py-2 px-3 focus:outline-accent "}
                />
                {
                    state?.errors?.last_name &&
                    state.errors.last_name.map((error, index ) => (
                        <p key={index} className={"text-danger text-sm"}>{error}</p>
                    ))
                }
            </div>
            <div className={"flex justify-end"}>
                <Submit />
            </div>
        </form>
    )

}