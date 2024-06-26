import { apiRegisterUserPath } from "./constants";

export async function register(name, email, password, role) {
    const response = await fetch(apiRegisterUserPath, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
            venueManager: role === 'manager',
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.errors[0].message)
    }
    return data;
};