// import React, { useEffect } from 'react';

// function ContactForm() {
//     useEffect(() => {
//         const sendEmail = async () => {
//             try {
//                 const response = await axios.post('/submit-form', {
//                     name: 'John Doe',
//                     number: '1234567890',
//                     email: 'example@example.com',
//                     message: 'Hello, this is a test message.'
//                 });
//                 console.log(response.data);
//             } catch (error) {
//                 console.error('Error sending email:', error);
//             }
//         };

//         sendEmail();
//     }, []);

//     return (
//         <>
//             <div className='hidden md:block'>
//                 <div className='support grid bg-no-repeat bg-cover lg:grid-cols-2'>
//                     <div></div>
//                     <div className='pt-64 pl-56 pb-32 '>
//                         <p className="sm:text-white text-gray-600 text-sx font-bold">SUPPORT</p>
//                         <p className='sm:text-white text-4xl font-bold pt-2 lg:text-blue-800'>Request a Free Call Back</p>
//                         <p className='sm:text-white pt-3 font-semibold text-gray-600'>Provide discussion information. <br /> We’ll get back to you as soon as possible</p>
//                         <form className='flex flex-col text-xl w-80' action="https://formspree.io/f/xgegqrwz" method='POST'>
//                             <input className='mt-5 px-4 py-1' required type="text" name='name' pattern='^[A-Za-z]+( [A-Za-z]+)*$' placeholder='Enter Your Name' />
//                             <input className='mt-5 px-4 py-1' required type="number" name='number' min={0} placeholder='Enter Your Number' />
//                             <input className='mt-5 px-4 py-1' required type="email" name='email' placeholder='Enter Your Email' />
//                             <input className='mt-5 px-4 py-1' required type="text" name='message' placeholder='Enter Your Message' />
//                             <span>
//                                 <button className='text-left mt-8 px-4 py-1 bg-blue-800 text-white text-lg'>
//                                     <a href="mailto:workflansh@gmail.com?subject=Enqirey">SUBMIT</a>
//                                 </button>
//                             </span>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             <div className='md:hidden'>
//                 <div className=''>
//                     <div></div>
//                     <div className='p-10 bg-slate-200 '>
//                         <p className="sm:text-white text-gray-600 text-sx font-bold">SUPPORT</p>
//                         <p className='sm:text-white text-4xl font-bold pt-2 lg:text-blue-800'>Request a Free Call Back</p>
//                         <p className='sm:text-white pt-3 font-semibold text-gray-600'>Provide discussion information. <br /> We’ll get back to you as soon as possible</p>
//                         <form className='flex flex-col text-xl w-80' action="">
//                             <input className='mt-5 px-4 py-1' required type="text" name='name' pattern='^[A-Za-z]+( [A-Za-z]+)*$' placeholder='Enter Your Name' />
//                             <input className='mt-5 px-4 py-1' required type="number" name='number' min={0} placeholder='Enter Your Number' />
//                             <input className='mt-5 px-4 py-1' required type="email" name='email' placeholder='Enter Your Email' />
//                             <input className='mt-5 px-4 py-1' required type="text" name='message' placeholder='Enter Your Message' />
//                             <span>
//                                 <button type=' submit' className='text-left mt-8 px-4 py-1 bg-blue-800 text-white text-lg'>
//                                     <a href="mailto:workflansh@gmail.com?subject=Enqirey">SUBMIT</a>
//                                 </button>
//                             </span>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ContactForm;


// error blank screen when axios is upshed in vercel 
// import React, { useState } from 'react';
// import axios from 'axios';


// function ContactForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         number: '',
//         email: '',
//         message: ''
//     });

//     const [popupVisible, setPopupVisible] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();  // Prevent default form submission
//         try {
//             const response = await axios.post('https://formspree.io/f/xgegqrwz', formData);
//             console.log(response.data);
//             setFormData({
//                 name: '',
//                 number: '',
//                 email: '',
//                 message: ''
//             });
//             setPopupVisible(true);
//             setTimeout(() => setPopupVisible(false), 3000); // Hide popup after 3 seconds
//         } catch (error) {
//             console.error('Error sending email:', error);
//         }
//     };

//     return (
//         <>
//             {popupVisible && (
//                 <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white p-4 rounded shadow-lg">
//                         <p>Mail sent successfully!</p>
//                     </div>
//                 </div>
//             )}
//             <div className='hidden md:block'>
//                 <div className='support grid bg-no-repeat bg-cover lg:grid-cols-2'>
//                     <div></div>
//                     <div className='pt-64 pl-56 pb-32 '>
//                         <p className="sm:text-white text-gray-600 text-sx font-bold">SUPPORT</p>
//                         <p className='sm:text-white text-4xl font-bold pt-2 lg:text-blue-800'>Request a Free Call Back</p>
//                         <p className='sm:text-white pt-3 font-semibold text-gray-600'>Provide discussion information. <br /> We’ll get back to you as soon as possible</p>
//                         <form className='flex flex-col text-xl w-80' onSubmit={handleSubmit}>
//                             <input 
//                                 className='mt-5 px-4 py-1' 
//                                 required 
//                                 type="text" 
//                                 name='name' 
//                                 pattern='^[A-Za-z]+( [A-Za-z]+)*$' 
//                                 placeholder='Enter Your Name'
//                                 value={formData.name}
//                                 onChange={handleChange} 
//                             />
//                             <input 
//                                 className='mt-5 px-4 py-1' 
//                                 required 
//                                 type="number" 
//                                 name='number' 
//                                 min={0} 
//                                 placeholder='Enter Your Number'
//                                 value={formData.number}
//                                 onChange={handleChange} 
//                             />
//                             <input 
//                                 className='mt-5 px-4 py-1' 
//                                 required 
//                                 type="email" 
//                                 name='email' 
//                                 placeholder='Enter Your Email'
//                                 value={formData.email}
//                                 onChange={handleChange} 
//                             />
//                             <input 
//                                 className='mt-5 px-4 py-1' 
//                                 required 
//                                 type="text" 
//                                 name='message' 
//                                 placeholder='Enter Your Message'
//                                 value={formData.message}
//                                 onChange={handleChange} 
//                             />
//                             <span>
//                                 <button type='submit' className='text-left mt-8 px-4 py-1 bg-blue-800 text-white text-lg'>
//                                     SUBMIT
//                                 </button>
//                             </span>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             <div className='md:hidden'>
//                 <div className=''>
//                     <div></div>
//                     <div className='p-10 bg-slate-200 '>
//                         <p className="sm:text-white text-gray-600 text-sx font-bold">SUPPORT</p>
//                         <p className='sm:text-white text-4xl font-bold pt-2 lg:text-blue-800'>Request a Free Call Back</p>
//                         <p className='sm:text-white pt-3 font-semibold text-gray-600'>Provide discussion information. <br /> We’ll get back to you as soon as possible</p>
//                         <form className='flex flex-col text-xl w-80' onSubmit={handleSubmit}>
//                             <input 
//                                 className='mt-5 px-4 py-1' 
//                                 required 
//                                 type="text" 
//                                 name='name' 
//                                 pattern='^[A-Za-z]+( [A-Za-z]+)*$' 
//                                 placeholder='Enter Your Name'
//                                 value={formData.name}
//                                 onChange={handleChange} 
//                             />
//                             <input 
//                                 className='mt-5 px-4 py-1' 
//                                 required 
//                                 type="number" 
//                                 name='number' 
//                                 min={0} 
//                                 placeholder='Enter Your Number'
//                                 value={formData.number}
//                                 onChange={handleChange} 
//                             />
//                             <input 
//                                 className='mt-5 px-4 py-1' 
//                                 required 
//                                 type="email" 
//                                 name='email' 
//                                 placeholder='Enter Your Email'
//                                 value={formData.email}
//                                 onChange={handleChange} 
//                             />
//                             <input 
//                                 className='mt-5 px-4 py-1' 
//                                 required 
//                                 type="text" 
//                                 name='message' 
//                                 placeholder='Enter Your Message'
//                                 value={formData.message}
//                                 onChange={handleChange} 
//                             />
//                             <span>
//                                 <button type='submit' className='text-left mt-8 px-4 py-1 bg-blue-800 text-white text-lg'>
//                                     SUBMIT
//                                 </button>
//                             </span>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ContactForm;
import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
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
            const response = await fetch('https://formspree.io/f/xgegqrwz', {
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
            {popupVisible && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <p>Mail sent successfully!</p>
                    </div>
                </div>
            )}
            <div className='hidden md:block'>
                <div className='support grid bg-no-repeat bg-cover lg:grid-cols-2'>
                    <div></div>
                    <div className='pt-64 pl-56 pb-32 '>
                        <p className="sm:text-white text-gray-600 text-sx font-bold">SUPPORT</p>
                        <p className='sm:text-white text-4xl font-bold pt-2 lg:text-blue-800'>Request a Free Call Back</p>
                        <p className='sm:text-white pt-3 font-semibold text-gray-600'>Provide discussion information. <br /> We’ll get back to you as soon as possible</p>
                        <form className='flex flex-col text-xl w-80' onSubmit={handleSubmit}>
                            <input 
                                className='mt-5 px-4 py-1' 
                                required 
                                type="text" 
                                name='name' 
                                pattern = '^\s*[A-Za-z]+(\s+[A-Za-z]+)?\s*\s*$'
                                placeholder='Enter Your Name'
                                value={formData.name}
                                onChange={handleChange} 
                            />
                            <input 
                                className='mt-5 px-4 py-1' 
                                required 
                                type="number" 
                                name='number' 
                                min={0} 
                                placeholder='Enter Your Number'
                                value={formData.number}
                                onChange={handleChange} 
                            />
                            <input 
                                className='mt-5 px-4 py-1' 
                                required 
                                type="email" 
                                name='email' 
                                placeholder='Enter Your Email'
                                value={formData.email}
                                onChange={handleChange} 
                            />
                            <input 
                                className='mt-5 px-4 py-1' 
                                required 
                                type="text" 
                                name='message' 
                                placeholder='Enter Your Message'
                                value={formData.message}
                                onChange={handleChange} 
                            />
                            <span>
                                <button type='submit' className='text-left mt-8 px-4 py-1 bg-blue-800 text-white text-lg'>
                                    SUBMIT
                                </button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>

            <div className='md:hidden'>
                <div className=''>
                    <div></div>
                    <div className='p-10 bg-slate-200 '>
                        <p className="sm:text-white text-gray-600 text-sx font-bold">SUPPORT</p>
                        <p className='sm:text-white text-4xl font-bold pt-2 lg:text-blue-800'>Request a Free Call Back</p>
                        <p className='sm:text-white pt-3 font-semibold text-gray-600'>Provide discussion information. <br /> We’ll get back to you as soon as possible</p>
                        <form className='flex flex-col text-xl w-80' onSubmit={handleSubmit}>
                            <input 
                                className='mt-5 px-4 py-1' 
                                required 
                                type="text" 
                                name='name' 
                                pattern='^[A-Za-z]+( [A-Za-z]+)*$' 
                                placeholder='Enter Your Name'
                                value={formData.name}
                                onChange={handleChange} 
                            />
                            <input 
                                className='mt-5 px-4 py-1' 
                                required 
                                type="number" 
                                name='number' 
                                min={0} 
                                placeholder='Enter Your Number'
                                value={formData.number}
                                onChange={handleChange} 
                            />
                            <input 
                                className='mt-5 px-4 py-1' 
                                required 
                                type="email" 
                                name='email' 
                                placeholder='Enter Your Email'
                                value={formData.email}
                                onChange={handleChange} 
                            />
                            <input 
                                className='mt-5 px-4 py-1' 
                                required 
                                type="text" 
                                name='message' 
                                placeholder='Enter Your Message'
                                value={formData.message}
                                onChange={handleChange} 
                            />
                            <span>
                                <button type='submit' className='text-left mt-8 px-4 py-1 bg-blue-800 text-white text-lg'>
                                    SUBMIT
                                </button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
