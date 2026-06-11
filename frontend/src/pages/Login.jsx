import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser }
from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [email,setEmail] =
    useState("");

    const [password,setPassword] =
    useState("");

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const data =
        await loginUser(
            email,
            password
        );

        console.log("LOGIN RESPONSE:", data);

        localStorage.setItem(
            "token",
            data.token
        );

        localStorage.setItem(
            "user",
            JSON.stringify(
                data.user
            )
        );

        navigate("/dashboard");

    }
    catch(error){

        console.log(error);

        alert(
            "Invalid Credentials"
        );

    }

};
    return (

        <div>

            <h1>
                Patient Care Tracking System
            </h1>

            <form
                onSubmit={
                    handleSubmit
                }
            >

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>
                        setEmail(
                            e.target.value
                        )
                    }
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>
                        setPassword(
                            e.target.value
                        )
                    }
                />

                <br />
                <br />

                <button>
                    Login
                </button>

            </form>

        </div>

    );

}

export default Login;