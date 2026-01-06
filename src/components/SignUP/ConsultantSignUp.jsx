import React, { useState } from 'react'

export const ConsultantSignUp = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailOrPhone1: '',
        emailOrPhone2: '',
        password: '',
        rePassword: '',
        sendEmails: true,
        agreeTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = () => {
        if (!formData.firstName || !formData.lastName || !formData.emailOrPhone1 || !formData.emailOrPhone2 || !formData.password || !formData.rePassword) {
            alert('Please fill all fields');
            return;
        }
        if (formData.password !== formData.rePassword) {
            alert('Passwords do not match');
            return;
        }
        if (!formData.agreeTerms) {
            alert('Please agree to the Terms of Service');
            return;
        }
        console.log('Sign up data:', { ...formData, role: userRole });
        alert('Account created successfully!');
    };

    return (
        <>
            <form className='space-y-6'>
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-md font-medium text-gray-900 mb-2">
                            First name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-gray-600 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-md font-medium text-gray-900 mb-2">
                            Last name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-gray-600 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Email/Phone 1 */}
                <div>
                    <label className="block text-md font-medium text-gray-900 mb-2">
                        Email address / Phone Number
                    </label>
                    <input
                        type="text"
                        name="emailOrPhone1"
                        value={formData.emailOrPhone1}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-600 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {/* Email/Phone 2 */}
                <div>
                    <label className="block text-md font-medium text-gray-900 mb-2">
                        Email address / Phone Number
                    </label>
                    <input
                        type="text"
                        name="emailOrPhone2"
                        value={formData.emailOrPhone2}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-600 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>
                {/* Profession */}
                <div>
                    <label className="block text-md font-medium text-gray-900 mb-2">
                        Select your Profession
                    </label>
                    <select
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-600 border border-gray-600 text-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    >
                        <option value="Client">Client</option>
                        <option value="Talent">Talent</option>
                    </select>

                </div>

                {/* Password */}
                <div>
                    <label className="block text-md font-medium text-gray-900 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-600 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {/* Re-enter Password */}
                <div>
                    <label className="block text-md font-medium text-gray-900 mb-2">
                        Re-enter Password
                    </label>
                    <input
                        type="password"
                        name="rePassword"
                        value={formData.rePassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-600 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-[8px]">
              <div className="relative w-[22px] h-[22px] flex-shrink-0">
                <input
                  type="checkbox"
                  name="sendEmails"
                  checked={formData.sendEmails}
                  onChange={handleChange}
                  className="peer w-[22px] h-[22px] border-[2px] border-black rounded-[2px] bg-white appearance-none checked:bg-[#186AFF] checked:border-[#186AFF] cursor-pointer"
                />
                {/* Tick SVG (Visible only when peer is checked) */}
                <svg className="absolute top-[3px] left-[3px] w-[16px] h-[16px] pointer-events-none hidden peer-checked:block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <label className="text-[16px] font-[400] text-black leading-[1.2] pt-[2px]">
                Send me emails with tips on how to find talent that fits my needs.
              </label>
            </div>

                     <div className="flex items-start gap-[8px]">
              <div className="relative w-[22px] h-[22px] flex-shrink-0">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="peer w-[22px] h-[22px] border-[1px] border-black rounded-[2px] bg-white appearance-none checked:bg-[#186AFF] checked:border-[#186AFF] cursor-pointer"
                />
                <svg className="absolute top-[3px] left-[3px] w-[16px] h-[16px] pointer-events-none hidden peer-checked:block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <label className="text-[16px] font-[400] text-black leading-[1.4]">
                Yes, I understand and agree to the{' '}
                <a href="#" className="underline font-[400]">DessoBuild Terms of Service</a> including the <a href="#" className="underline font-[400]">User Agreement</a> and <a href="#" className="underline font-[400]">Privacy Policy</a>.
              </label>
            </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col items-center gap-[16px] pt-[8px]">
                    <button
                        onClick={handleSubmit}
                        className="w-[191px] h-[48px] bg-[#186AFF] text-white rounded-[6px] font-[500] text-[18px] leading-[100%] transition-all"
                    >
                        Create my account
                    </button>
                    
                </div>
            </form>
        </>
    )
}
