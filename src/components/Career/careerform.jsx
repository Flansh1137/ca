import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Careerform = () => {
  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    dob: '',
    maritalStatus: '',
    phoneNumber: '',
    email: '',
    mailingAddress: '',
    highestQualification: '',
    totalExperience: '',
    relevantExperience: '',
    salary: '',
    employerName: '',
    designation: '',
    CTC: '',
    noticePeriod: '',
    additionalInformation: '',
    howDidYouHear: '',
    referenceAvailable: ''
  });

  const [formErrors, setFormErrors] = useState({
    title: false,
    fullName: false,
    dob: false,
    maritalStatus: false,
    phoneNumber: false,
    email: false,
    mailingAddress: false,
    highestQualification: false,
    totalExperience: false,
    relevantExperience: false,
    salary: false,
    employerName: false,
    designation: false,
    CTC: false,
    noticePeriod: false,
    additionalInformation: false,
    howDidYouHear: false,
    referenceAvailable: false
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate fields before submission
    const errors = validateFields(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Proceed with form submission
    const url = 'https://formspree.io/f/xyyrrvaa';
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful form submission here
      alert('Form submitted successfully!');
      resetForm();
    } catch (error) {
      console.error('Error:', error);
      alert('There was a problem submitting the form. Please try again!');
    }
  };

  const validateFields = (data) => {
    const errors = {};
    // Example validation rules (you can adjust as per your requirements)
    if (!data.title.trim()) {
      errors.title = true;
    }
    if (!data.fullName.trim()) {
      errors.fullName = true;
    }
    if (!data.dob.trim()) {
      errors.dob = true;
    }
    if (!data.maritalStatus.trim()) {
      errors.maritalStatus = true;
    }
    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = true;
    }
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = true;
    }
    if (!data.mailingAddress.trim()) {
      errors.mailingAddress = true;
    }
    if (!data.highestQualification.trim()) {
      errors.highestQualification = true;
    }
    if (!data.totalExperience.trim()) {
      errors.totalExperience = true;
    }
    if (!data.relevantExperience.trim()) {
      errors.relevantExperience = true;
    }
    // Add more validation rules as needed for other fields
    return errors;
  };

  const resetForm = () => {
    setFormData({
      title: '',
      fullName: '',
      dob: '',
      maritalStatus: '',
      phoneNumber: '',
      email: '',
      mailingAddress: '',
      highestQualification: '',
      totalExperience: '',
      relevantExperience: '',
      salary: '',
      employerName: '',
      designation: '',
      CTC: '',
      noticePeriod: '',
      additionalInformation: '',
      howDidYouHear: '',
      referenceAvailable: ''
    });
    setFormErrors({
      title: false,
      fullName: false,
      dob: false,
      maritalStatus: false,
      phoneNumber: false,
      email: false,
      mailingAddress: false,
      highestQualification: false,
      totalExperience: false,
      relevantExperience: false,
      salary: false,
      employerName: false,
      designation: false,
      CTC: false,
      noticePeriod: false,
      additionalInformation: false,
      howDidYouHear: false,
      referenceAvailable: false
    });
  };

  return (
    <div className="min-h-screen md:flex items-center justify-center bg-white rounded-3xl">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl rounded pt-6 pb-8 px-8 md:px-20 bg-blue-50"
      >
        <div className=" text-2xl md:text-5xl font-bold text-center py-10 ">Job Application Form</div>
        <div className="md:grid grid-cols-2 gap-10">
          <div className={`mb-4 relative ${formErrors.title ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title<span className="text-red-500">*</span>
            </label>
            <select
              name="title"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10 ${formErrors.title ? 'border-red-500' : ''
                }`}
              required
            >
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
            </select>
            <div className="absolute inset-y-12 right-2 flex items-center px-2 pointer-events-none">
              <FaChevronDown className="text-gray-700" />
            </div>
          </div>
          <div className={`mb-4 ${formErrors.fullName ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.fullName ? 'border-red-500' : ''
                }`}
              pattern="[A-Za-z\s]+"
              required
            />
          </div>

          <div className={`mb-4 ${formErrors.dob ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              Date Of Birth<span className="text-red-500">*</span>
            </label>
            <input
              name="dob"
              id="dob"
              type="date"  // Change type from "text" to "date"
              placeholder="DOB (M/D/YYYY)" // Placeholder is optional and can be removed
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.dob ? 'border-red-500' : ''
                }`}
              pattern="\d{1,2}/\d{1,2}/\d{4}" // Pattern attribute is not needed for type="date"
              required
            />
          </div>

          <div className={`mb-4 relative ${formErrors.maritalStatus ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maritalStatus">
              Marital Status<span className="text-red-500">*</span>
            </label>
            <select
              name="maritalStatus"
              id="maritalStatus"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.maritalStatus ? 'border-red-500' : ''
                }`}
              required
            >
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Other">Other</option>
            </select>
            <div className="absolute inset-y-12 right-0 flex items-center px-2 pointer-events-none">
              <FaChevronDown className="text-gray-700" />
            </div>
            {formErrors.maritalStatus && <p className="text-red-500 text-xs italic">{formErrors.maritalStatus}</p>}
          </div>

          <div className={`mb-4 ${formErrors.phoneNumber ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              name="phoneNumber"
              id="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.phoneNumber ? 'border-red-500' : ''
                }`}
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className={`mb-4 ${formErrors.email ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email Address"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.email ? 'border-red-500' : ''
                }`}
              required
            />
          </div>

          <div className={`mb-4 ${formErrors.mailingAddress ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mailingAddress">
              Mailing Address<span className="text-red-500">*</span>
            </label>
            <input
              name="mailingAddress"
              id="mailingAddress"
              type="text"
              placeholder="Mailing Address"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.mailingAddress ? 'border-red-500' : ''
                }`}
              required
            />
          </div>
          <div className={`mb-4 relative ${formErrors.highestQualification ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="highestQualification">
              Highest Qualification<span className="text-red-500">*</span>
            </label>
            <select
              name="highestQualification"
              id="highestQualification"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.highestQualification ? 'border-red-500' : ''}`}
              required
            >
              <option value="">Select Highest Qualification</option>
              <option value="Graduate">Graduate</option>
              <option value="Postgraduate">Postgraduate</option>
            </select>
            <div className="absolute inset-y-12 right-2 flex items-center px-2 pointer-events-none">
              <FaChevronDown className="text-gray-700" />
            </div>
          </div>


          <div className={`mb-4 ${formErrors.totalExperience ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalExperience">
              Total Work Experience<span className="text-red-500">*</span>
            </label>
            <input
              name="totalExperience"
              id="totalExperience"
              type="number"
              placeholder="Total Work Experience"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.totalExperience ? 'border-red-500' : ''
                }`}
              required
            />
          </div>
          <div className={`mb-4 ${formErrors.relevantExperience ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="relevantExperience">
              Relevant Experience<span className="text-red-500">*</span>
            </label>
            <input
              name="relevantExperience"
              id="relevantExperience"
              type="number"
              placeholder="Relevant Experience"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.relevantExperience ? 'border-red-500' : ''
                }`}
              required
            />
          </div>
          {/* </div>    */}

          {/* <div className="grid grid-cols-2 gap-4"> */}
          <div className={`mb-4 ${formErrors.salary ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
              Expected Salary CTC
            </label>
            <input
              name="salary"
              id="salary"
              type="text"
              placeholder="Expected Salary"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.salary ? 'border-red-500' : ''
                }`}
            />
          </div>
          <div className={`mb-4 ${formErrors.employerName ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employerName">
              Current Employer Name
            </label>
            <input
              name="employerName"
              id="employerName"
              type="text"
              placeholder="Current Employer Name"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.employerName ? 'border-red-500' : ''
                }`}
            />
          </div>
          <div className={`mb-4 ${formErrors.designation ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation">
              Current Designation
            </label>
            <input
              name="designation"
              id="designation"
              type="text"
              placeholder="Current Designation"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.designation ? 'border-red-500' : ''
                }`}
            />
          </div>
          <div className={`mb-4 ${formErrors.CTC ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="CTC">
              Current Salary CTC
            </label>
            <input
              name="CTC"
              id="CTC"
              type="text"
              placeholder="Current Salary CTC"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.CTC ? 'border-red-500' : ''
                }`}
            />
          </div>
          <div className={`mb-4 ${formErrors.noticePeriod ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="noticePeriod">
              Notice Period For Current Employment
            </label>
            <input
              name="noticePeriod"
              id="noticePeriod"
              type="text"
              placeholder="Notice Period For Current Employment"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.noticePeriod ? 'border-red-500' : ''
                }`}
            />
          </div>
          <div className={`mb-4 ${formErrors.additionalInformation ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalInformation">
              Additional Information
            </label>
            <input
              name="additionalInformation"
              id="additionalInformation"
              type="text"
              placeholder="Additional Information"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.additionalInformation ? 'border-red-500' : ''
                }`}
            />
          </div>
          <div className={`mb-4 ${formErrors.howDidYouHear ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="howDidYouHear">
              How Did You Hear About This Position
            </label>
            <input
              name="howDidYouHear"
              id="howDidYouHear"
              type="text"
              placeholder="How Did You Hear About This Position"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.howDidYouHear ? 'border-red-500' : ''
                }`}
            />
          </div>
          <div className={`mb-4 ${formErrors.referenceAvailable ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referenceAvailable">
              Reference If Available
            </label>
            <input
              name="referenceAvailable"
              id="referenceAvailable"
              type="text"
              placeholder="Reference If Available"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.referenceAvailable ? 'border-red-500' : ''
                }`}
            />
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>

        {/* </div> */}
      </form>
    </div>
  );
};

export default Careerform;
