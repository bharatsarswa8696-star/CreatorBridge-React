// ---------------- Signup ----------------

export async function signupUser(userData) {

    const response = await fetch("/api/auth/signup", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(userData)

    });

    const data = await response.json();

    if (!response.ok) {

        throw new Error(data.message);

    }

    return data;

}


// ---------------- Login ----------------

export async function loginUser(loginData) {

    const response = await fetch("/api/auth/login", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(loginData)

    });

    const data = await response.json();

    if (!response.ok) {

        throw new Error(data.message);

    }

    return data;

}