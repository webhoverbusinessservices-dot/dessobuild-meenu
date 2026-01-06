import Link from 'next/link'
import React from 'react'
export const HeaderThree = ({ activeForm = 'Client', loginBtn = true }) => {
    return (
        <>
            <nav className="bg-white lg:pt-8">
                <div className="bg-[#F9F9F9] rounded-xl flex items-center justify-between px-6 py-3 h-17 w-full mt-4 mx-auto lg:w-312 lg:mt-10">
                    <Link href="/"><h1 className="font-switzer font-semibold text-[24px] lg:text-[32px] leading-[1] tracking-[0em] text-black w-auto lg:w-[168px] h-[42px] flex items-center">DessoBuild</h1></Link>
                    <div className="flex items-center space-x-6">
                        <Link href="/contact" className="text-gray-700 hover:text-gray-900 text-base">
                            Contact Us
                        </Link>
                        <Link href="/login" className="text-gray-700 hover:text-gray-900 text-base">
                            Login
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
