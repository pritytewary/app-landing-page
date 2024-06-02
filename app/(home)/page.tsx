import { HiArrowLongRight } from "react-icons/hi2";
import { BsPlayCircle } from "react-icons/bs";
import { PiStarFourBold } from "react-icons/pi";
import { PiCubeTransparent } from "react-icons/pi";
import { MdCircleNotifications } from "react-icons/md";
import { MdStars } from "react-icons/md";

import Home, { HomeData } from "@/components/home";

const homeData: HomeData = {
  navBar: {
    logoUri: "/images/logo.svg",
    button: {
      link: "https://youtube.com",
      text: "Download Now",
    },
    links: [
      { text: "Home", href: "#" },
      { text: "About us", href: "#about" },
      { text: "Pricing", href: "#pricing" },
      { text: "Features", href: "#features" },
    ],
  },
  hero: {
    heading: "Make The Best Financial Decisions",
    subHeading:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    ctaButtons: [
      {
        id: "1",
        link: "facebook.com",
        text: (
          <>
            Get Started
            <HiArrowLongRight className="text-white ml-1" size={25} />
          </>
        ),
        type: "primary",
      },
      {
        id: "2",
        link: "youtube.com",
        text: (
          <>
            <BsPlayCircle className="mr-5" size={25} />
            Watch Video
          </>
        ),
        type: "secondary",
      },
    ],
    imageUri: "/images/hero.svg",
    ribbionUri: "/images/ribbon.svg",
  },
  features: [
    {
      id: "feature1",
      variant: "feature1",
      data: {
        subHeading: "Features",
        heading: "Uifry Premium",
        imageUri: "/images/features.svg",
        featureItems: [
          {
            id: "1",
            title: (
              <>
                <PiStarFourBold className="text-red-600" size={25} />
                Budgeting intervals
              </>
            ),
            content:
              "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
          },
          {
            id: "2",
            title: (
              <>
                <PiCubeTransparent className="text-red-600 " />
                Budgeting intervals
              </>
            ),
            content:
              "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
          },
          {
            id: "3",
            title: (
              <>
                <PiCubeTransparent className="text-red-600 " size={25} />
                Budgeting intervals
              </>
            ),
            content:
              "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
          },
        ],
      },
    },
    {
      id: "features2",
      variant: "feature2",
      data: {
        heading: "Why Choose Uifry?",
        imageUri: "images/feature2.svg",
        subHeading: "Advantages",
        featureContent:
          "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
        featureTitle: (
          <>
            <MdCircleNotifications className="text-red-500" size={40} />
            Clever notifications
          </>
        ),
      },
    },
    {
      id: "features3",
      variant: "feature2",
      data: {
        imageUri: "images/feature2.svg",
        isReversed: true,
        featureContent:
          "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
        featureTitle: (
          <>
            <MdStars className="text-red-500" size={40} />
            Fully Customizable
          </>
        ),
      },
    },
  ],
  pricing: {
    heading: "Our Pricing",
    subHeading: "Choose a plan that fits your needs",
    items: [
      {
        name: "Free",
        cost: "Free",
        description: "Forever free",
        isMostPopular: false,
        link: "#",
        features: ["1 user", "Plan features", "Product support"],
      },
      {
        name: "Startup",
        cost: "£39",
        description: "All the basics for starting a new business",
        isMostPopular: true,
        link: "#",
        features: ["2 users", "Plan features", "Product support"],
      },
      {
        name: "Team",
        cost: "£89",
        description: "Everything you need for a growing business",
        isMostPopular: false,
        link: "#",
        features: ["5 users", "Plan features", "Product support"],
      },
    ],
  },
  testimonial: {
    heading: "What Our Users Say About Us?",
    subHeading: "TESTIMONIAL",
    imageUri: "/images/testimonial.svg",
    testimonials: [
      {
        author: "Nick Jonas",
        authorPictureUri: "https://randomuser.me/api/portraits/men/1.jpg",
        title: "The Best Financial Accounting App Ever!",
        content:
          "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acuamsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.",
      },
      {
        author: "John Doe",
        authorPictureUri: "https://randomuser.me/api/portraits/men/2.jpg",
        title: "Excellent Customer Support!",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.",
      },
      {
        author: "Jane Smith",
        authorPictureUri: "https://randomuser.me/api/portraits/women/1.jpg",
        title: "Highly Recommend This App!",
        content:
          "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",
      },
      {
        author: "Emma Brown",
        authorPictureUri: "https://randomuser.me/api/portraits/women/2.jpg",
        title: "A Game Changer for My Business!",
        content:
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer lacinia lorem id risus varius sed mollis magna vestibulum. Vestibulum lacinia arcu eget nulla.",
      },
    ],
  },
};

export default function HomePage() {
  return <Home data={homeData} />;
}
