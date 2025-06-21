export default function Project({ href, image, title, desc }) {
    return (
        <a href={href}
        className="w-full flex flex-col gap-2.5 no-underline font-sans md:text-lg">
            <img src={image} alt={title} className="w-full h-[230px] object-cover"></img>

            <div><h3 className="m-0">{title}</h3>
            <p className="m-0 text-[var(--cool-gray)]">{desc}</p></div>
        </a>
    );
}