import Image from "next/image";

export default function WhiteCard({ image, alt, title,  description }) {
    return (
        <div className="relative md:p-24 py-24 p-10 bg-white mb-5 min-h-[35rem]">
            <div className="absolute md:top-20 top-5 md:left-3 left-5">
                <Image src={image} alt={alt} width={80} height={80}  />
            </div>
            <div>
                <h2 className="md:text-3xl text-2xl font-bold">
                    {title}
                </h2>
            </div>
            <div className="mt-10">
                {description}
            </div>
        </div>
    );
}