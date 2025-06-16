import Image from "next/image";

export default function TextIcon({
    orientation,
    text,
    image
}) {
    return (
        <>
            {orientation === "left" && 
                <div className="flex justify-between items-center">
                    <Image
                        src={image}
                        alt='testimonial'
                        width={300}
                        height={300}
                        className=" rounded-full"
                    />
                    <div className="ml-10">
                        <p className="text-2xl italic">{text}</p> 
                    </div>
                </div>
            }

            {orientation === "right" && 
                <div className="flex justify-between items-center">
                    <div className="mr-10">
                        <p className="text-2xl italic">
                        {text}
                        </p>
                    </div>
                        <Image
                            src={image}
                            alt='testimonial'
                            width={300}
                            height={300}
                            className=" rounded-full"
                        />
                </div>
            }
        </>
    );
}