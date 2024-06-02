import Link from "next/link";
import { Section } from "../layout";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export type HeroProps = {
  heading: string;
  subHeading: string;
  ctaButtons: {
    id: string;
    text: string | React.ReactNode;
    link: string;
    type: "primary" | "secondary";
  }[];
  imageUri: string;
  ribbionUri?: string;
};

export default function Hero({
  ctaButtons,
  heading,
  imageUri,
  ribbionUri,
  subHeading,
}: HeroProps) {
  return (
    <Section>
      <div className="w-full lg:w-1/2 pt-[5vh] lg:pt-[12vh]">
        <div className="max-w-3xl gap-6 flex flex-col">
          <h1 className="font-bold text-5xl lg:text-6xl">{heading}</h1>
          <p className="font-semibold text-lg text-opacity-50 text-black">
            {subHeading}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-6">
          {ctaButtons.map((button) => (
            <Link
              className={cn(
                buttonVariants({
                  variant: button.type === "primary" ? "default" : "ghost",
                }),
                "lg:text-lg lg:px-6 lg:h-12"
              )}
              key={button.id}
              href={button.link}
            >
              {button.text}
            </Link>
          ))}
        </div>

        {ribbionUri && (
          <img className="h-[40vh] mt-10 hidden lg:block" src={ribbionUri} />
        )}
      </div>

      <div className="w-full lg:w-1/2">
        <img className="w-full h-full" src={imageUri} />
      </div>
    </Section>
  );
}
