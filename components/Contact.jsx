import ContactHeading from "./ContactHeading";
import ContactLinks from "./ContactLinks";

export default function Contact() {
  return (
    <div
      id="contact"
      className="box-border p-[50px_20px] font-space flex flex-col justify-between gap-9"
    >
      <ContactHeading />
      <ContactLinks />
    </div>
  );
}
