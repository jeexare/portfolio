export default function Footer({
  year = new Date().getFullYear(),
  text = "Gabriela Rubio. All rights reserved.",
}) {
  return (
    <div
      className="
        text-[var(--cool-gray)] 
        p-5
        font-space
        box-content"
    >
      &copy; {year} {text}
    </div>
  );
}
