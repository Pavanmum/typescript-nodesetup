import { object,string,Typeof } from "zod";

export const createUserSchema = object({
    body: object({
        name: object({
            first: string({
                required_error: 'First name is required'
        }),
        email: string({
            required_error: 'Email is required',
        }).email('Not a valid email'),
        password: string({
            required_error: 'Password is required'
        }).min(6, 'Password must be at least 6 characters')
    })
})
});


export const createUserInput = Typeof<typeof createUserSchema>;

