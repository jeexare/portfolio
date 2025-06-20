const links = [
  { name: "Email", href: "mailto:hgrubiof@gmail.com", label: "hgrubiof@gmail.com" },
  { name: "LinkedIn", href: "", label: "linkedin" },
  { name: "GitHub", href: "", label: "github" },
  { name: "Tumblr", href: "", label: "tumblr" },
  { name: "CodePen", href: "", label: "codepen" },
];

export default function ContactLinks() {
  return (
    <div className="flex flex-col justify-center gap-2.5">
      <a
        href={links[0].href}
        className="no-underline text-[var(--cool-gray)] text-3xl border-b-2 border-[var(--cool-gray)] w-fit"
      >
        {links[0].label}
      </a>
      <p>
        {links.slice(1).map(({ href, label }) => (
          <a
            key={label}
            href={href}
            className="no-underline text-[var(--cool-gray)] border-b-2 border-[var(--cool-gray)] mr-2.5"
          >
            {label}
          </a>
        ))}
      </p>
    </div>
  );
}
