export default function NumberCard({number, title, description}) {
    return (
        <div className="solyda-bg-blue p-7 flex flex-col w-full aspect-square h-[20rem] lg:max-w-[20rem] lg:min-w-[15rem]">
        <h3 className="text-4xl font-bold mb-10">{number}</h3>
        <h3 className="text-2xl font-bold mb-10">{title}</h3>
        <p className="">{description}</p>
    </div>
    );
}