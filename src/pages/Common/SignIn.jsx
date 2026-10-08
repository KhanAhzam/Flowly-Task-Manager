import React, { useState, useContext } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useNavigate } from "react-router-dom";

import flowlyLogo from '../../assests/flowly_logo.png';
import signin_bg_image from '../../assests/signin_bg_image.png'
import Button1 from '../../components/Buttons/Button1'
import AuthContext from '../../context/AuthContext';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { signinFn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please enter your Email and Password");
            return;
        }

        const loggedInUser = signinFn(email, password);

        if (loggedInUser == null) {
            setError("Invalid Email or Password");
            return;
        }

        setError("");

        if (loggedInUser.role === "admin") {
            navigate("/admin/dashboard");
        } else {
            navigate("/user/dashboard");
        }
    };

    return (
        <div className="relative min-h-screen w-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${signin_bg_image})` }}>

            {/* Top Header */}
            <div className="absolute top-0 left-0 w-full px-6 sm:px-16 py-5 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src={flowlyLogo}
                        alt=""
                        className="w-14 h-14 object-contain"
                    />

                    <span className="text-4xl font-bold text-primary">
                        Flowly
                    </span>
                </div>

                {/* Support */}
                <div className="flex flex-col sm:flex-row sm:gap-2 text-xs xs:text-sm text-text-tertiary">
                    <span>Need a hand?</span>
                    <div className='flex gap-1'>
                        <a href="mailto:flowlysupportdev@gmail.com" className="font-semibold text-primary hover:underline decoration-primary">
                            Contact support
                        </a>
                        <span className="text-primary">↗</span>
                    </div>
                </div>

            </div>

            {/* Main Login Box */}
            <div className="w-full max-w-[340px] xs:max-w-[440px] md:max-w-[500px] bg-background rounded-xl shadow-lg px-8 py-6 xs:p-10">

                {/* Logo */}
                <div className="hidden xs:block flex items-center gap-2 mb-8">
                    <img
                        src={flowlyLogo}
                        alt=""
                        className="w-15 h-15 object-contain"
                    />

                    <span className="text-4xl font-bold text-primary">
                        Flowly
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-semibold text-text-primary mb-6 xs:mb-10">
                    Sign in
                </h1>

                {/* Error */}
                {error && (
                    <p className="text-error-primary text-sm mb-5">
                        {error}
                    </p>
                )}

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    {/* Email */}
                    <div className="flex flex-col gap-2">

                        <label htmlFor="email" className="text-lg font-semibold text-text-primary">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your Email ID"
                            className=" w-full px-5 py-4 rounded-xl border border-border-secondary outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-tertiary"
                        />

                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2">

                        <label htmlFor="password" className="text-lg font-semibold text-text-primary">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your Password"
                                className=" w-full px-5 py-4 pr-14 rounded-xl border border-border-secondary outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-tertiary"
                            />

                            <button
                                type="button"
                                onPointerDown={() => setShowPassword(true)}
                                onPointerUp={() => setShowPassword(false)}
                                onPointerLeave={() => setShowPassword(false)}
                                onPointerCancel={() => setShowPassword(false)}
                                className="cursor-pointer absolute right-5 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-primary"
                            >
                                {showPassword ? (
                                    <EyeOff size={22} />
                                ) : (
                                    <Eye size={22} />
                                )}
                            </button>

                        </div>

                    </div>

                    {/* Button */}
                    <div className="flex justify-end mt-4">
                        <Button1
                            type="submit"
                            className="px-8 py-2.5 text-base font-medium rounded"
                        >
                            Sign In
                        </Button1>
                    </div>

                </form>

            </div>

            {/* Footer */}
            <div className="absolute bottom-6 w-full px-6 sm:px-16 flex justify-between items-center text-[10px] ss:text-xs xs:text-sm text-text-tertiary">

                {/* Bottom Left */}
                <div>
                    © 2026 Flowly. All rights reserved.
                </div>

                {/* Bottom Right */}
                <div className="flex gap-6">
                    <button className="hover:text-primary cursor-pointer">
                        Privacy policy
                    </button>

                    <button className="hover:text-primary cursor-pointer">
                        Terms of service
                    </button>
                </div>

            </div>

        </div>
    );

}

export default SignIn
