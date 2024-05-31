import React, { useState } from 'react';

function ContactPageForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    im: '',
    looking: '',
    message: ''
  });

  const [popupVisible, setPopupVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission
        try {
            const response = await fetch('https://formspree.io/f/mvoejzkd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Mail sent successfully!');
                setFormData({
                    name: '',
                    number: '',
                    email: '',
                    message: ''
                });
                setPopupVisible(true);
                setTimeout(() => setPopupVisible(false), 3000); // Hide popup after 3 seconds
            } else {
                console.error('Failed to send email:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

  return (
    <>
    <div className='text-center px-5 md:px-10 lg:px-96 bg-blue-50'>
      <form
        id="fs-frm"
        name="survey-form"
        acceptCharset="utf-8"
        action="https://formspree.io/f/mvoejzkd"
        method="post"
        onSubmit={handleSubmit}
        className="w-full py-4 space-y-4"
      >
        <fieldset id="fs-frm-inputs" className="space-y-4">
          <div className="lg:flex lg:gap-32">
            <div className="mb-5">
              <label htmlFor="full name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="full-name"
                placeholder="Your Full name"
                required
                className="mt-1 block w-full lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="email address" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email-address"
                placeholder="your@email.com"
                required
                className="mt-1 block w-full lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="lg:flex lg:gap-32">

            <div className=' mb-5'>
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone-number"
                placeholder="123-456-7890"
                required
                className="mt-1 block  w-full lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className=' mb-5'>
              <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                id="company-name"
                placeholder="Your Company"
                required
                className="mt-1 block w-full lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:gap-14 lg:gap-32 ">

            <div className='mb-5'>
              <label htmlFor="im" className="block text-sm font-medium text-gray-700">
                I'm </label>
              <select
                name="im"
                id="im"
                required
                className="mt-1 block w-full sm:w-60 md:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.im}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Choose
                </option>
                <option value="Entrepreneur">Entrepreneur</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Consultant">Consultant</option>
                <option value="Investor">Investor</option>
                <option value="Operations Specialist">Operations Specialist</option>
                <option value="Business Development">Business Development</option>
                <option value="Small Businesses">Small Businesses</option>
                <option value="Large Corporations">Large Corporations</option>
                <option value="Non-Profit Organizations">Non-Profit Organizations</option>
              </select>
            </div>

            <div className=' mb-5'>
              <label htmlFor="looking" className=" block text-sm font-medium text-gray-700">
                Looking for </label>
              <select
                name="looking"
                id="looking"
                required
                className="mt-1 block w-full sm:w-60 md:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.looking}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Choose
                </option>
                <option value="Financial Statement Audits">Financial Statement Audits</option>
                <option value="Internal Audits">Internal Audits</option>
                <option value="Compliance Audits">Compliance Audits</option>
                {/* Other options */}
              </select>
            </div>
          </div>

          <div className=''>
            <label htmlFor="message" className=" block text-sm font-medium text-gray-700">
              Additional Questions ?? Ask he
            </label>
            <textarea
              rows="3"
              name="message"
              id="message"
              placeholder="Place your Enquire here"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Survey Responses"
          />
        </fieldset>
        <div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-orange-500 text-white font-semibold text-center"
          >
            Send Responses
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default ContactPageForm;
