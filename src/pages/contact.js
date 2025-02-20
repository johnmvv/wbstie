import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Connect</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaGithub className="text-2xl" />
              <a href="https://github.com/johnmvv" className="text-blue-400 hover:text-blue-300">
                github.com/johnmvv
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaLinkedin className="text-2xl" />
              <a href="https://www.linkedin.com/in/john-verwey-9a42a7331/" className="text-blue-400 hover:text-blue-300">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-2xl" />
              <a href="mailto:me@johnverwey.uk" className="text-blue-400 hover:text-blue-300">
                me@johnverwey.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
