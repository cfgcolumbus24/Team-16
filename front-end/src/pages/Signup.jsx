import React, { useState } from 'react';
import axios from 'axios';


const usStates = {
  "California": ["Los Angeles", "San Francisco", "San Diego"],
  "New York": ["New York City", "Buffalo", "Rochester"],
  "Texas": ["Houston", "Dallas", "Austin"],
  // Add more states and cities as needed
};

const Signup = () => {
    const firstName = React.useRef();
    const lastName = React.useRef();
    const email = React.useRef();
    const password = React.useRef();
    const passwordAgain = React.useRef();
    const interests = React.useRef();
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [cities, setCities] = useState([]);
    const [isFetching, setIsFetching] = React.useState(false);

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        setCities(usStates[state] || []);
        setSelectedCity(""); // Reset city selection when the state changes
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setIsFetching(true);
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else if (!/(?=.*[!@#$%^&*])(?=.{8,})/.test(password.current.value)) {
            password.current.setCustomValidity("Password must be at least 8 characters long and contain at least one special character!");
        } else {
            const user = {
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                email: email.current.value,
                password: password.current.value,
                interests: interests.current.value,
                location: {
                    state: selectedState,
                    city: selectedCity
                }
            };
            try {
                const res = await axios.post("/auth/register", user);
                res.data && window.location.replace("/login");
            } catch (err) {
                console.log(err);
            }
        }
        setIsFetching(false);
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Sign up for an account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleClick}>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">First Name</label>
                        <input ref={firstName} type="text" required className="block w-full rounded-md border py-1.5" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">Last Name</label>
                        <input ref={lastName} type="text" required className="block w-full rounded-md border py-1.5" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">Email</label>
                        <input ref={email} type="email" required className="block w-full rounded-md border py-1.5" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">Password</label>
                        <input ref={password} type="password" required className="block w-full rounded-md border py-1.5" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">Confirm Password</label>
                        <input ref={passwordAgain} type="password" required className="block w-full rounded-md border py-1.5" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">Artistic Interests</label>
                        <select ref={interests} required className="block w-full rounded-md border py-1.5">
                            <option value="">Select Interest</option>
                            <option value="music">Music</option>
                            <option value="painting">Painting</option>
                            <option value="cinematography">Cinematography</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">State</label>
                        <select onChange={handleStateChange} required className="block w-full rounded-md border py-1.5">
                            <option value="">Select State</option>
                            {Object.keys(usStates).map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">City</label>
                        <select onChange={handleCityChange} value={selectedCity} required className="block w-full rounded-md border py-1.5">
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
