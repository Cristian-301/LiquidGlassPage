import Image from "next/image";

export default function UserIconQuote({content}) {
    return <div className="flex flex-col items-center justify-center text-center transition-all">
    <Image
      width={100}
      height={100}
      src={content.image}
      alt={content.name}
      className="w-24 h-24 object-cover rounded-full mb-6 border-4 border-[#6e98a3]"
    />
    <p className="text-lg italic mb-6 text-neutral-200 max-w-xs">&quot;{content.text}&quot;</p>
    <h3 className="text-md font-semibold text-primary-color">{content.name}</h3>
  </div>
}