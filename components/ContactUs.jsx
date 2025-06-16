import Link from "next/link";

export default function ContactUs({ title, link, buttonTitle }) {
  return (
    <div className="max-w-6xl mx-auto  border-red-600 border-2 mt-20 flex flex-col md:flex-row justify-between items-center p-10">
        <h3 className="text-4xl font-bold mb-5">{title}</h3>
        <Link href={link} className="w-[25rem] text-center px-10 py-5 bg-red-600 border border-red-600 text-white rounded-full hover:text-red-600 hover:bg-white transition duration-300">{buttonTitle}</Link>
      </div>
  );
}