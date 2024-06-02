import { cn } from "@/lib/utils";
import { Section } from "../layout";

type Feature1Props = {
  imageUri: string;
  heading: string;
  subHeading: string;
  featureItems: {
    id: string;
    title: string | React.ReactNode;
    content: string;
  }[];
};

function Feature1({
  featureItems,
  heading,
  imageUri,
  subHeading,
}: Feature1Props) {
  return (
    <Section className="items-center py-[5vh]">
      <div className="w-full lg:w-1/2">
        <img src={imageUri} className="w-full h-full" />
      </div>
      <div className="w-full lg:w-1/2">
        <div>
          <h3 className="text-red-500 font-medium text-lg uppercase">
            {subHeading}
          </h3>

          <h2 className="font-bold text-5xl mb-5 mt-1">{heading}</h2>
        </div>

        <div className="flex flex-col gap-5">
          {featureItems.map((f) => (
            <div key={f.id} className="flex flex-col gap-2">
              <p className="font-semibold text-lg text-[#000000] flex gap-2 items-center">
                {f.title}
              </p>

              <p className="font-medium text-lg text-opacity-[50%]">
                {f.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

type Feature2Props = {
  imageUri: string;
  heading?: string;
  subHeading?: string;
  featureTitle: string | React.ReactNode;
  featureContent: string;
  isReversed?: boolean;
};

function Feature2({
  featureContent,
  featureTitle,
  heading,
  imageUri,
  subHeading,
  isReversed = false,
}: Feature2Props) {
  return (
    <Section
      className={cn("items-center py-[5vh]", {
        "flex-row-reverse": isReversed,
      })}
    >
      <div className="w-full lg:w-1/2">
        {(!!heading || !!subHeading) && (
          <div>
            <h3 className="text-red-500 uppercase">{subHeading}</h3>

            <h2 className="font-bold text-5xl mt-2 mb-4">{heading}</h2>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <p className="font-semibold text-3xl flex gap-2 items-center">
            {featureTitle}
          </p>

          <p className="font-medium text-lg">{featureContent}</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <img src={imageUri} className="w-full h-full" />
      </div>
    </Section>
  );
}

export type FeatureProps =
  | {
      id: string;
      variant: "feature1";
      data: Feature1Props;
    }
  | {
      id: string;
      variant: "feature2";
      data: Feature2Props;
    };

export default function Feature({ data, variant }: FeatureProps) {
  if (variant === "feature1") {
    return <Feature1 {...data} />;
  } else if (variant === "feature2") {
    return <Feature2 {...data} />;
  }

  return null;
}
