import React from "react";
import { Section } from "../layout";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "../ui/button";

export type FooterProps = {
  logoUri: string;
  email: string;
  phone: string;
  links: {
    title: string;
    items: { text: string; link: string }[];
  }[];
  showNewsletter: boolean;
  copyrightText: string;
};

export default function Footer({
  logoUri,
  email,
  phone,
  links,
  showNewsletter,
  copyrightText,
}: FooterProps) {
  return (
    <Section className="pt-[5vh] gap-20">
      <div className="mb-6 lg:mb-0 w-full lg:w-max">
        <div className="flex items-center mb-4">
          <img src={logoUri} alt="Logo" className="h-8 mr-2" />
        </div>
        <div className="text-muted-forground mb-2 space-y-2">
          <div className="flex items-center">
            <MailIcon className="material-icons text-red-600 mr-2" />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="material-icons text-red-600 mr-2" />
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
        {links.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul className="text-muted-forground space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {showNewsletter && (
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-forground mb-4">Stay Up To Date</p>
            <div className="flex gap-2 w-full flex-wrap">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border w-full border-gray-300 rounded-md focus:outline-none"
              />

              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        )}
      </div>

      <div className="pb-6 border-t border-gray-200 pt-6 text-center text-muted-forground text-sm w-full">
        {copyrightText}
      </div>
    </Section>
  );
}
