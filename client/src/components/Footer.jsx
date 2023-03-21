import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ei9ad5i",
        "template_tjkl4wq",
        form.current,
        "Vwav1N79Ut6aGRsWP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <footer id="footer" className="block p-6 bg-amber-400 w-full ">
      <div className="mx-auto max-w-3xl">
        <p className="text-lg">Have an idea for a interesting topic?</p>
        <form className="flex flex-col pt-4" ref={form} onSubmit={sendEmail}>
          <label>Message</label>
          <textarea
            className="
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
            name="message"
          />
          <div className="pt-4">
            <label>Name</label>
            <input
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              name="user_name"
            />
            <label>Email</label>
            <input
              className="form-control block w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="email"
              name="user_email"
            />
          </div>
          <button
            className="w-24 mx-auto my-4
            px-6
            py-2.5
            bg-slate-900
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-slate-700 hover:shadow-lg
            focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-slate-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            type="submit"
            value="Send"
          >
            Send
          </button>
        </form>
      </div>
      <div className="text-center text-slate-900 mt-4">
        &copy; {new Date().getFullYear()} Pod Topicz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
