import {prisma} from "@/database/prisma";

export interface UserRegisterInput {
    email: string,
    password: string,
    passwordConfirm: string
    first_name: string,
    last_name: string,
    acceptedTerms: boolean,
}

export async function validateUserRegisterInput(input: UserRegisterInput){
    const { email, password, passwordConfirm, first_name, last_name, acceptedTerms } = input;
    const errors: Record<string, string> = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const existingUser = await prisma.user.findUnique({
        where: {
            email
        },
        select: {
            id: true
        }
    })
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/;

    if (!email) errors.email = "Email is required."
    else if (!emailRegex.test(email)) errors.email = "Please enter a valid email."
    else if (existingUser) errors.email = "Email is already in use."

    if (!password) errors.password = "Password is required."
    else if (password.length < 8) errors.password = "Password must contain at least 8 characters."

    if (password !== passwordConfirm) errors.passwordConfirm = "Passwords don't match"

    if (!first_name) errors.first_name = "First name is required."
    else if (first_name.length < 2) errors.first_name = "First name must contain at least 2 characters."
    else if (!nameRegex.test(first_name)) errors.first_name = "First name can only contain letters."

    if (!last_name) errors.last_name = "Last name is required."
    else if (last_name.length < 2) errors.last_name = "Last name must contain at least 2 characters."
    else if (!nameRegex.test(last_name)) errors.last_name = "Last name can only contain letters."

    if (!acceptedTerms) errors.acceptedTerms = "The terms and conditions must be accepted."

    console.log(errors)

    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            errors
        };
    } else {
        return {
            success: true,
            errors: {}
        }
    }
}