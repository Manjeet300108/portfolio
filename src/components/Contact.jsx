import React from 'react'

const Contact = () => {
    return (
        <div>
            <section id="contact" className="px-8 py-20  text-center">
                <h2 className="text-3xl font-bold mb-12">
                    Contact <span className="text-cyan-400">Me</span>
                </h2>
                <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6" method='post' action='https://formsubmit.co/9f674333f724fe457a03ddec28a26193'>
                    <input type="text" placeholder="Full Name" className="p-3 rounded bg-[#0f172a] border border-gray-600 text-white" name='username' />
                    <input type="email" placeholder="Email Address" className="p-3 rounded bg-[#0f172a] border border-gray-600 text-white" name='email' />
                    <input type="text" placeholder="Mobile Number" className="p-3 rounded bg-[#0f172a] border border-gray-600 text-white" name='mobileNumber' />
                    <input type="text" placeholder="Email Subject" className="p-3 rounded bg-[#0f172a] border border-gray-600 text-white" name='subject' />
                    <textarea
                        placeholder="Your Message"
                        className="p-3 rounded bg-[#0f172a] border border-gray-600 text-white md:col-span-2 h-32 resize-none"
                    ></textarea>
                    <button type="submit" className="md:col-span-2 bg-cyan-400 text-black py-3 px-6 rounded-full font-semibold hover:scale-105 transition" name='msg'>
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Contact