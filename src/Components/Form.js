import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <section className="flex flex-col items-start my-20 ml-16 mr-16 max-w-7xl mx-auto sm:pl-16 rounded-lg">
                <div
                    className="w-full z-20 inset-0 md:relative h-full text-center md:text-left flex flex-col justify-center"
                >
                    <h1 className="text-3xl md:text-4xl text-white md:leading-tight font-bold text-center">
                        Download eBook now!
                    </h1>
                    <h2 className="px-8 text-lg text-white md:px-0 my-6 text-center">
                        Fill out the form at below to get your copy of “Integrated Marketing Essentials.”
                    </h2>
                </div>
                <form className="pb-10" id="form">
                    <div className="pb-6 flex flex-row">
                        <p className="text-white text-xl">Name</p>
                        <p class="text-red-500 text-xs italic">*</p>
                    </div>
                    <input
                        type='text'
                        placeholder="ex. John Doe"
                        className="h-16 w-form rounded px-3 form-color form-border-color mb-7 text-white outline-none"
                        required
                    />
                    <div className="pb-6 flex flex-row">
                        <p className="text-white text-xl">Business email</p>
                        <p class="text-red-500 text-xs italic">*</p>
                    </div>
                    <input
                        type='text'
                        placeholder="ex. johndoe@brookerhub.com"
                        className="h-16 w-form rounded px-3 form-color form-border-color mb-7 text-white outline-none"
                        required
                    />
                    <div className="pb-6 flex flex-row">
                        <p className="text-white text-xl">Company name</p>
                        <p class="text-red-500 text-xs italic">*</p>
                    </div>
                    <input
                        type='text'
                        placeholder="ex. Brooker Hub"
                        id="company"
                        className="h-16 w-form rounded px-3 form-color form-border-color text-white outline-none"
                        required
                    />
                    <div className="mt-10">
                        <input
                            className="px-10 cursor-pointer py-3 text-lg inline-block flex-none button-bg transition rounded font-bold duration-200"
                            type="submit"
                            for="form"
                            value="SUBMIT"
                        />
                    </div>
                </form>
            </section>
        )
    }

}
export default Form