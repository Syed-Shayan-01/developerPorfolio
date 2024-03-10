import Button from "../../components/button/Button";
import Logo from "../../components/logo/Logo";

const Contact = () => {
    return (
        <section id="Contact" className="bg-white mt-10 sm:mt-16 md:mt-20 lg:mt-40">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold text-center text-gray-400">
                    <Logo text={'Contact us'} />
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-lg">
                    Got a technical issue? Want to send feedback about a beta feature? Let us know.
                </p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full py-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 px-3 resize-none"
                            placeholder="name@flowbite.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full py-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 px-3 resize-none"
                            placeholder="Let us know how we can help you"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 resize-none"
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>
                    <Button text={"Send Message"} />
                </form>
            </div>
        </section>
    );
};

export default Contact;
