import ContactHeading from "./ContactHeading";
import ContactLinks from "./ContactLinks";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-[#B9FAF8] box-border p-[50px_20px] font-sans flex flex-col justify-between gap-9"
    >
      <ContactHeading />
      <ContactLinks />
    </div>
  );
}
