import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import axios from 'axios';

const Careerform = () => {
  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    dob: '',
    phoneNumber: '',
    email: '',
    highestQualification: '',
    totalExperience: '',
    salary: '',
    employerName: '',
    designation: '',
    CTC: '',
    noticePeriod: '',
    additionalInformation: '',
    howDidYouHear: '',
    referenceAvailable: '',
    resume: null
  });

  const [formErrors, setFormErrors] = useState({
    title: false,
    fullName: false,
    dob: false,
    phoneNumber: false,
    email: false,
    highestQualification: false,
    totalExperience: false,
    salary: false,
    employerName: false,
    designation: false,
    CTC: false,
    noticePeriod: false,
    additionalInformation: false,
    howDidYouHear: false,
    referenceAvailable: false,
    resume: false
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: false
      });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      resume: file
    });
    if (formErrors.resume) {
      setFormErrors({
        ...formErrors,
        resume: false
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateFields(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const url = 'https://formspree.io/f/xyyrrvaa';
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(url, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
        },
      });

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      console.log('Form submission response:', response.data);

      alert('Form submitted successfully!');
      resetForm();
    } catch (error) {
      console.error('Error:', error);
      alert('There was a problem submitting the form. Please try again!');
    }
  };

  const validateFields = (data) => {
    const errors = {};
    if (!data.title.trim()) errors.title = true;
    if (!data.fullName.trim()) errors.fullName = true;
    if (!data.dob.trim()) errors.dob = true;
    if (!data.phoneNumber.trim() || !/^\d{10}$/.test(data.phoneNumber)) errors.phoneNumber = true;
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) errors.email = true;
    if (!data.highestQualification.trim()) errors.highestQualification = true;
    if (!data.totalExperience.trim()) errors.totalExperience = true;
    if (!data.resume) errors.resume = true;
    return errors;
  };

  const resetForm = () => {
    setFormData({
      title: '',
      fullName: '',
      dob: '',
      phoneNumber: '',
      email: '',
      highestQualification: '',
      totalExperience: '',
      salary: '',
      employerName: '',
      designation: '',
      CTC: '',
      noticePeriod: '',
      additionalInformation: '',
      howDidYouHear: '',
      referenceAvailable: '',
      resume: null
    });
    setFormErrors({
      title: false,
      fullName: false,
      dob: false,
      phoneNumber: false,
      email: false,
      highestQualification: false,
      totalExperience: false,
      salary: false,
      employerName: false,
      designation: false,
      CTC: false,
      noticePeriod: false,
      additionalInformation: false,
      howDidYouHear: false,
      referenceAvailable: false,
      resume: false
    });
  };

  return (
    <div className="min-h-screen md:flex items-center justify-center bg-white rounded-3xl">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl rounded pt-6 pb-8 px-8 md:px-20 bg-blue-50"
      >
        <div className="text-2xl md:text-5xl font-bold text-center py-10">Job Application Form</div>
        <div className="md:grid grid-cols-2 gap-10">
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
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.fullName ? 'border-red-500' : ''}`}
              pattern="[A-Za-z\s]+"
              required
            />
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
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.phoneNumber ? 'border-red-500' : ''}`}
              pattern="[0-9]{10}"
              value={formData.phoneNumber}
              onChange={handleInputChange}
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
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.email ? 'border-red-500' : ''}`}
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.highestQualification}
              onChange={handleInputChange}
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
              value={formData.totalExperience}
              onChange={handleInputChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.totalExperience ? 'border-red-500' : ''}`}
              required
            />
          </div>

          <div className={`mb-4 ${formErrors.salary ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
              Expected Salary CTC
            </label>
            <input
              name="salary"
              id="salary"
              type="text"
              placeholder="Expected Salary"
              value={formData.salary}
              onChange={handleInputChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.salary ? 'border-red-500' : ''}`}
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
              value={formData.employerName}
              onChange={handleInputChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.employerName ? 'border-red-500' : ''}`}
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
              value={formData.designation}
              onChange={handleInputChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.designation ? 'border-red-500' : ''}`}
            />
          </div>

          <div className={`mb-4 ${formErrors.CTC ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="CTC">
              Current CTC
            </label>
            <input
              name="CTC"
              id="CTC"
              type="text"
              placeholder="Current CTC"
              value={formData.CTC}
              onChange={handleInputChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.CTC ? 'border-red-500' : ''}`}
            />
          </div>

          <div className={`mb-4 ${formErrors.noticePeriod ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="noticePeriod">
              Notice Period (in days)
            </label>
            <input
              name="noticePeriod"
              id="noticePeriod"
              type="number"
              placeholder="Notice Period"
              value={formData.noticePeriod}
              onChange={handleInputChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.noticePeriod ? 'border-red-500' : ''}`}
            />
          </div>

          <div className={`mb-4 ${formErrors.howDidYouHear ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="howDidYouHear">
              How did you hear about us?
            </label>
            <input
              name="howDidYouHear"
              id="howDidYouHear"
              type="text"
              placeholder="How did you hear about us?"
              value={formData.howDidYouHear}
              onChange={handleInputChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.howDidYouHear ? 'border-red-500' : ''}`}
            />
          </div>

          <div className={`mb-4 ${formErrors.resume ? 'border-red-500' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
              Upload Resume<span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              className={`py-2 px-3 border rounded w-full ${formErrors.resume ? 'border-red-500' : ''}`}
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Careerform;
