import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import { Section } from "./Layout";
import { cn } from "@/lib/utils";

type PricingProps = {
  heading: string;
  subHeading: string;
  items: {
    name: string;
    cost: string;
    description: string;
    isMostPopular: boolean;
    link: string;
    features: string[];
  }[];
};

export default function Pricing({ heading, subHeading, items }: PricingProps) {
  return (
    <Section className="py-[5vh]">
      <div className="w-full space-y-2">
        <h3 className="text-lg text-red-500 uppercase">{subHeading}</h3>
        <h2 className="text-5xl font-bold">{heading}</h2>
      </div>

      <div
        className={cn("mt-12 grid gap-6 lg:items-center w-full", {
          "grid-cols-1 sm:grid-cols-2": items.length <= 2,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3": items.length === 3,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4": items.length >= 4,
        })}
      >
        {items.map((item, index) => (
          <Card
            key={index}
            className={item.isMostPopular ? "border-primary" : ""}
          >
            <CardHeader className="text-center pb-2">
              {item.isMostPopular && (
                <Badge className="uppercase w-max self-center mb-3">
                  Most popular
                </Badge>
              )}
              <CardTitle className={item.isMostPopular ? "!mb-7" : "mb-7"}>
                {item.name}
              </CardTitle>
              <span className="font-bold text-5xl">{item.cost}</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto">
              {item.description}
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                {item.features.map((feature) => (
                  <li key={feature} className="flex space-x-2">
                    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={item.isMostPopular ? "default" : "outline"}
              >
                Sign up
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
