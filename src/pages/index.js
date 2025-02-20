import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold">John Verwey</h1>
          <p className="text-gray-400 text-lg">Mathematician & Freelance Programmer</p>
        </header>

        <nav className="text-center py-4">
          <a href="johnverwey.uk/CV.pdf" target="_blank" className="text-blue-400 hover:underline">My CV</a>
        </nav>

        <section className="my-10">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">About Me</h2>
          <p className="text-gray-300 mt-4">
            Passionate about leveraging technology for predictive analytics, complex problem-solving, and performance optimization.
            Skilled in Python, Java, C#, and statistical analysis, with experience in AI-driven projects and freelance software development.
          </p>
        </section>

        <section className="my-10">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Projects</h2>
          <ul className="mt-4 space-y-4">
            <li className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-medium">Engine Modeling</h3>
              <p className="text-gray-400">Exploring thermodynamics and predictive modeling of engine output.</p>
              <Link href="/emc/modelling_engines.pdf" className="text-blue-400 hover:underline">Read Report</Link>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-medium">Statistical Sports Predictions</h3>
              <p className="text-gray-400">Developed statistical models to predict sports outcomes using R.</p>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-medium">Convex Geometric Solids</h3>
              <p className="text-gray-400">Researched mathematical properties of complex geometric solids.</p>
            </li>
          </ul>
        </section>

        <section className="my-10">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Contact</h2>
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com/johnmvv" className="text-gray-400 hover:text-white"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/john-verwey-9a42a7331/" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
            <a href="mailto:me@johnverwey.uk" className="text-gray-400 hover:text-white"><FaEnvelope size={24} /></a>
          </div>
        </section>
      </div>
    </div>
  );
}
