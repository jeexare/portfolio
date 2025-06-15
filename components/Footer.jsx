export default function Footer({
  year = new Date().getFullYear(),
  text = "Gabriela Rubio. All rights reserved.",
}) {
  return (
    <div
      className="
        text-gray-600 
        p-5
        font-sans
        bg-[#B9FAF8]
        box-content"
    >
      &copy; {year} {text}
    </div>
  );
}
