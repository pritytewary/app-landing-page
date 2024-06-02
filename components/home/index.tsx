import { Layout } from "../layout";
import Feature, { FeatureProps } from "./Features";
import Footer, { FooterProps } from "./Footer";
import Hero, { HeroProps } from "./Hero";
import Navbar, { NavbarProps } from "./Navbar";
import Pricing, { PricingProps } from "./Pricing";
import Testimonial, { TestimonialProps } from "./Testimonial";

export type HomeData = {
  hero: HeroProps;
  features: FeatureProps[];
  pricing: PricingProps;
  navBar: NavbarProps;
  testimonial: TestimonialProps;
  footer: FooterProps;
};

export type HomeProps = {
  data: HomeData;
};

export default function Home({ data }: HomeProps) {
  return (
    <Layout>
      <Navbar {...data.navBar} />

      <Hero {...data.hero} />

      {data.features.map((f) => (
        <Feature key={f.id} {...f} />
      ))}

      <Pricing {...data.pricing} />

      <Testimonial {...data.testimonial} />

      <Footer {...data.footer} />
    </Layout>
  );
}
