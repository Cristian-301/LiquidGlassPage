export default function BoxIcon({ icon, title, subtitle, subtitleIcon, backgroundColor }) {
    return (
        <div className={`aspect-square text-white p-2 flex flex-col justify-center  ${backgroundColor}`}>
            <div className="flex flex-col items-center justify-center">
                <div className="text-6xl">
                    {icon}
                </div>
                <h3 className="text-lg text-center">{title}</h3>
                <div className="my-5 text-4xl">
                    {subtitleIcon}
                </div>
                <p className="text-xl text-center uppercase">{subtitle}</p>
            </div>
        </div>
    )
}
    