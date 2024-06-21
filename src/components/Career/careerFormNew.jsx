// src/components/CareerForm.js

import React from 'react';

const CareerForm = () => {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <form
                action="https://formspree.io/f/xyyrrvaa"
                method="POST"
                className=" p-10 rounded-lg shadow-md w-full max-w-2xl bg-blue-50"
            >
                        <div className="text-2xl md:text-5xl font-bold text-center py-10">Job Application Form</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="full-name"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 "
                            required
                            placeholder="Full Name"
                            pattern="[A-Za-z\s]+"
                            title="Full Name should only contain alphabets and spaces."
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="phone-number"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 "
                            required
                            placeholder="Phone Number"
                            pattern="\d{10}"
                            title="Phone Number should be exactly 10 digits without spaces."
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" name="email-address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" required placeholder="Email Address" />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Highest Qualification</label>
                        <input type="text" name="Highest Qualification" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" required placeholder="Highest Qualification" />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Total Work Experience</label>
                        <input type="text" name="total-work-experience" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" required placeholder="Total Work Experience" />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Expected Salary CTC</label>
                        <input type="text" name="expected-salary" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Expected Salary" />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Current Company Name</label>
                        <input type="text" name="current-company-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Current Company Name" />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Current Designation</label>
                        <input type="text" name="current-designation" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Current Designation" />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Current CTC</label>
                        <input type="text" name="current-ctc" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Current CTC" />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Notice Period (in days)</label>
                        <input type="text" name="notice-period" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Notice Period" />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
                        <input type="text" name="how-did-you-hear" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="How did you hear about us?" />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
                        <input type="file" name="resume" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                    <div className="col-span-1 md:col-span-2 mt-6 text-center">
                        <button type="submit" className="px-6 py-2 rounded-md bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CareerForm;
