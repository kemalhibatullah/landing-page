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
                <form className="pb-10">
                    <p className="text-white pb-6 text-xl">Name</p>
                    <input
                        type='text'
                        placeholder="ex. John Doe"
                        className="h-16 w-form rounded px-3 form-color form-border-color mb-7 text-white outline-none"
                    />
                    <p className="text-white pb-6 text-xl">Business email</p>
                    <input
                        type='text'
                        placeholder="ex. johndoe@brookerhub.com"
                        className="h-16 w-form rounded px-3 form-color form-border-color mb-7 text-white outline-none"
                    />
                    <p className="text-white pb-6 text-xl">Company name</p>
                    <input
                        type='text'
                        placeholder="ex. Brooker Hub"
                        className="h-16 w-form rounded px-3 form-color form-border-color text-white outline-none"
                    />
                </form>
                <div className="mb-64">
                    <a
                        href="#category-shop"
                        className="px-10 py-3 text-lg inline-block flex-none button-bg transition rounded font-bold duration-200"
                    >SUBMIT</a>
                </div>
            </section>
        )
    }

}
export default Form