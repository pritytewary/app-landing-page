"use client";

import { useState } from "react";
import { Section } from "../layout";
import { cn } from "@/lib/utils";

export type TestimonialProps = {
  heading: string;
  subHeading: string;
  imageUri: string;
  testimonials: {
    author: string;
    authorPictureUri: string;
    title: string;
    content: string;
  }[];
};

export default function Testimonial({
  heading,
  subHeading,
  imageUri,
  testimonials,
}: TestimonialProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleProfileClick = (index: number) => {
    setCurrentTestimonial(index);
  };

  const { author, title, content } = testimonials[currentTestimonial];

  return (
    <Section className="items-center flex flex-col lg:flex-row py-[5vh]">
      <div className="w-full justify-center items-center flex flex-col gap-2">
        <h3 className="uppercase text-muted-forground w-full text-center lg:w-max lg:text-left">
          {subHeading}
        </h3>
        <h2 className="text-5xl font-bold mb-4 w-full text-center lg:w-max lg:text-left">
          {heading}
        </h2>
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <img
          className="w-full h-full"
          src={imageUri}
          alt="Testimonial Illustration"
        />
      </div>

      <div className="w-full lg:w-1/2 pt-[5vh] lg:pt-[12vh] text-center lg:text-left">
        <div className="min-h-[28vh]">
          <p className="text-3xl font-semibold mb-2">{title}</p>
          <p className="text-muted-forground text-lg mb-4">
            &quot;{content}&quot;
          </p>
        </div>

        <div className="flex justify-center lg:justify-start space-x-2 mt-10">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => handleProfileClick(index)}
              className="focus:outline-none"
            >
              <img
                src={testimonial.authorPictureUri}
                alt={testimonial.author}
                className={cn("w-12 h-12 rounded-full border-2", {
                  "border-red-500": currentTestimonial === index,
                  "border-transparent": currentTestimonial !== index,
                })}
              />
            </button>
          ))}
        </div>

        <p className="mt-4 font-bold text-xl">{author}</p>
      </div>
    </Section>
  );
}
