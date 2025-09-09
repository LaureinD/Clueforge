"use server"

import {prisma} from "@/database/prisma";
import {hashPassword} from "@/utils/auth";
import {capitalize} from "@/utils/helpers";
import {sendVerificationEmail} from "@/actions/auth/verifyEmail";
import {UserRegisterInput, validateUserRegisterInput} from "@/database/validation/userValidation";

export async function register(input: UserRegisterInput) {
    const { email, password, first_name, last_name } = input;

    const validationResponse = await validateUserRegisterInput(input);

    if (!validationResponse.success) {
        return validationResponse;
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
        data: {
            email: email.toLowerCase(),
            password: hashedPassword,
            first_name: capitalize(first_name.toLowerCase()),
            last_name: capitalize(last_name.toLowerCase())
        }
    });

    await sendVerificationEmail(newUser.email);

    return {
        success: true,
        errors: {}
    }
}





