// import React, { useState } from 'react';

// const CareerForm = () => {
//     const [formValues, setFormValues] = useState({
//         fullName: '',
//         phoneNumber: '',
//         emailAddress: '',
//         highestQualification: '',
//         totalWorkExperience: '',
//         expectedSalary: '',
//         currentCompanyName: '',
//         currentDesignation: '',
//         currentCtc: '',
//         noticePeriod: '',
//         howDidYouHear: '',
//         resume: null
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({
//             ...formValues,
//             [name]: value
//         });
//     };

//     const handleFileChange = (e) => {
//         const { name, files } = e.target;
//         setFormValues({
//             ...formValues,
//             [name]: files[0]
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         for (const [key, value] of Object.entries(formValues)) {
//             formData.append(key, value);
//         }

//         try {
//             const response = await fetch('https://form.jotform.com/241762110724448', {
//                 method: 'POST',
//                 body: formData,
//                 headers: {
//                     'Accept': 'application/json'
//                 }
//             });

//             if (response.ok) {
//                 console.log('Form successfully submitted');
//                 // Optionally, you can clear the form or show a success message here
//                 setFormValues({
//                     fullName: '',
//                     phoneNumber: '',
//                     emailAddress: '',
//                     highestQualification: '',
//                     totalWorkExperience: '',
//                     expectedSalary: '',
//                     currentCompanyName: '',
//                     currentDesignation: '',
//                     currentCtc: '',
//                     noticePeriod: '',
//                     howDidYouHear: '',
//                     resume: null
//                 });
//             } else {
//                 console.error('Form submission error');
//                 // Handle the error response here
//             }
//         } catch (error) {
//             console.error('Form submission failed:', error);
//             // Handle the error here
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen py-10">
//             <form
//                 className="p-10 rounded-lg shadow-md w-full max-w-2xl bg-blue-50"
//                 onSubmit={handleSubmit}
//             >
//                 <div className="text-2xl md:text-5xl font-bold text-center py-10">Job Application Form</div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="col-span-1">
//                         <label className="block text-sm font-medium text-gray-700">Full Name</label>
//                         <input
//                             type="text"
//                             name="fullName"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             required
//                             placeholder="Full Name"
//                             pattern="[A-Za-z\s]+"
//                             title="Full Name should only contain alphabets and spaces."
//                             value={formValues.fullName}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="col-span-1">
//                         <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                         <input
//                             type="text"
//                             name="phoneNumber"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             required
//                             placeholder="Phone Number"
//                             pattern="\d{10}"
//                             title="Phone Number should be exactly 10 digits without spaces."
//                             value={formValues.phoneNumber}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="col-span-1">
//                         <label className="block text-sm font-medium text-gray-700">Email Address</label>
//                         <input
//                             type="email"
//                             name="emailAddress"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             required
//                             placeholder="Email Address"
//                             value={formValues.emailAddress}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="col-span-1">
//                         <label className="block text-sm font-medium text-gray-700">Highest Qualification</label>
//                         <input
//                             type="text"
//                             name="highestQualification"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             required
//                             placeholder="Highest Qualification"
//                             value={formValues.highestQualification}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="col-span-1">
//                         <label className="block text-sm font-medium text-gray-700">Total Work Experience</label>
//                         <input
//                             type="text"
//                             name="totalWorkExperience"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             required
//                             placeholder="Total Work Experience"
//                             value={formValues.totalWorkExperience}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="col-span-1">
//                         <label className="block text-sm font-medium text-gray-700">Expected Salary CTC</label>
//                         <input
//                             type="text"
//                             name="expectedSalary"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             placeholder="Expected Salary"
//                             value={formValues.expectedSalary}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="col-span-1">
//                         <label className="block text-sm font-medium text-gray-700">Current Company Name</label>
//                         <input
//                             type="text"
//                             name="currentCompanyName"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             placeholder="Current Company Name"
//                             value={formValues.currentCompanyName}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="col-span-1">
//                         <label className="block text-sm font-medium text-gray-700">Current Designation</label>
//                         <input
//                             type="text"
//                             name="currentDesignation"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             placeholder="Current Designation"
//                             value={formValues.currentDesignation}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="col-span-1">
//                         <label className="block text-sm font-medium text-gray-700">Current CTC</label>
//                         <input
//                             type="text"
//                             name="currentCtc"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             placeholder="Current CTC"
//                             value={formValues.currentCtc}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="col-span-1">
//                         <label className="block text-sm font-medium text-gray-700">Notice Period (in days)</label>
//                         <input
//                             type="text"
//                             name="noticePeriod"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             placeholder="Notice Period"
//                             value={formValues.noticePeriod}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="col-span-1">
//                         <label className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
//                         <input
//                             type="text"
//                             name="howDidYouHear"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             placeholder="How did you hear about us?"
//                             value={formValues.howDidYouHear}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="col-span-1">
//                         <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
//                         <input
//                             type="file"
//                             name="resume"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             required
//                             onChange={handleFileChange}
//                         />
//                     </div>
//                     <div className="col-span-1 md:col-span-2 mt-6 text-center">
//                         <button
//                             type="submit"
//                             className="px-6 py-2 rounded-md bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default CareerForm;

import React, { useState } from 'react';

const CareerForm = () => {
    const [formValues, setFormValues] = useState({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        highestQualification: '',
        totalWorkExperience: '',
        expectedSalary: '',
        currentCompanyName: '',
        currentDesignation: '',
        currentCtc: '',
        noticePeriod: '',
        howDidYouHear: '',
        resume: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormValues({
            ...formValues,
            [name]: files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const [key, value] of Object.entries(formValues)) {
            formData.append(key, value);
        }

        try {
            const response = await fetch('https://formcarry.com/s/4rBHmnS9iqf', {
                method: 'POST',
                body: formData,
                headers: {
                    // No need to set 'Content-Type' header for FormData
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Form submission failed with status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Form successfully submitted', result);
            alert('Form submitted successfully!');

            // Optionally reset the form values here
            setFormValues({
                fullName: '',
                phoneNumber: '',
                emailAddress: '',
                highestQualification: '',
                totalWorkExperience: '',
                expectedSalary: '',
                currentCompanyName: '',
                currentDesignation: '',
                currentCtc: '',
                noticePeriod: '',
                howDidYouHear: '',
                resume: null
            });
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Form submission failed. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen py-10">
            <form
                className="p-10 rounded-lg shadow-md w-full max-w-2xl bg-blue-50"
                onSubmit={handleSubmit}
            >
                <div className="text-2xl md:text-5xl font-bold text-center py-10">Job Application Form</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                            placeholder="Full Name"
                            value={formValues.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                            placeholder="Phone Number"
                            value={formValues.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="emailAddress"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                            placeholder="Email Address"
                            value={formValues.emailAddress}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Highest Qualification</label>
                        <input
                            type="text"
                            name="highestQualification"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                            placeholder="Highest Qualification"
                            value={formValues.highestQualification}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Total Work Experience</label>
                        <input
                            type="text"
                            name="totalWorkExperience"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                            placeholder="Total Work Experience"
                            value={formValues.totalWorkExperience}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Expected Salary</label>
                        <input
                            type="text"
                            name="expectedSalary"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Expected Salary"
                            value={formValues.expectedSalary}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Current Company Name</label>
                        <input
                            type="text"
                            name="currentCompanyName"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Current Company Name"
                            value={formValues.currentCompanyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Current Designation</label>
                        <input
                            type="text"
                            name="currentDesignation"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Current Designation"
                            value={formValues.currentDesignation}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Current CTC</label>
                        <input
                            type="text"
                            name="currentCtc"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Current CTC"
                            value={formValues.currentCtc}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Notice Period (in days)</label>
                        <input
                            type="text"
                            name="noticePeriod"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Notice Period"
                            value={formValues.noticePeriod}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
                        <input
                            type="text"
                            name="howDidYouHear"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="How did you hear about us?"
                            value={formValues.howDidYouHear}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
                        <input
                            type="file"
                            name="resume"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2 mt-6 text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-md bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CareerForm;
