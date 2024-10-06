import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Dewanand Kurrey",
    designation: "Full Stack Developer",
    image:
      "https://avatars.githubusercontent.com/u/160487908?v=4",
  },
];

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-y-2">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            At LetTechno, we offer comprehensive IT tech courses designed to
            equip learners with the latest skills and knowledge, preparing them
            for success in today’s digital world.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col space-y-2">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact US</h2>
          <h3 className="text-white text-bold font-semibold mb-1">LetTechno</h3>
          <p className="mb-4">
            <br />
             Yadunandan Nagr, Tifra <br />
             Bilaspur, Chhattisgarh <br />
             India, 495223
          </p>
          <div className="flex flex-col space-y-2">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Email: info@lettechno.com
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Phone: +91 9755636070
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mb-4 mt-5 w-full m-4 p-4 space-x-4 border-t-2" >
      <AnimatedTooltip items={instructors} />
      </div>
      <p className="text-center text-gray-400 mt-2 space-x-10">
      Copyright &copy; 2024 LetTechno. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
