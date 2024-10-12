import { IoSearchOutline, IoPeople } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import {
  FaRegFaceGrin,
  FaTrophy,
  FaGift,
  FaDiscord,
  FaHandSparkles,
} from "react-icons/fa6";
import {
  FaShieldAlt,
  FaRegClock,
  FaBell,
  FaRegQuestionCircle,
  FaRocketchat,
} from "react-icons/fa";

import { spotlight1, spotlight2 } from "../../assets/images";

export const linkCardsDataPlugins = [
  {
    icon: FaShieldAlt,
    title: "Moderation & Server Management",
    description: "Welcome Plugin, Custom Commands, Reaction Roles",
    to: "/management",
  },
  {
    icon: FaRegFaceGrin,
    title: "Bot Personalizer",
    description:
      "Customize your bot by changing its avatar, name. AI-based backstory and activity",
    to: "/bot-personalizer",
  },
  {
    icon: FaRegClock,
    title: "Utilities",
    description:
      "Embeds,Search anything, Records, Timers, Statistics, Temporary channels",
    to: "/utilities",
  },
  {
    icon: FaTrophy,
    title: "Premium Subscription",
    description:
      "Upgrade to premium and unlock all features of Dik-Tac-Toe on your server",
    to: "/premium",
  },
  {
    icon: FaBell,
    title: "Social Alerts",
    description:
      "Twitch, Twitter, YouTube, RSS, Reddit, and Instagram alerts for your server",
    to: "/social-alerts",
  },
  {
    icon: IoSearchOutline,
    title: "Dik-Tac AI",
    description:
      "Utilize the power of ChatGPT and Dall-E with your new creative assistant",
    to: "/ai",
  },
  {
    icon: FaGift,
    title: "Games & Fun",
    description: "Levels, Birthdays, Giveaways, Music Quiz and Economy",
    to: "/games",
  },
];
export const linkCardsDataResources = [
  {
    icon: FaRegQuestionCircle,
    title: "Tutorials",
    description:
      "Consult our documentation to get more details about how to use MEE6 on Discord",
  },

  {
    icon: IoPeople,
    title: "Careers",
    description:
      "Join MEE6 and build tools to manage amazing communities worldwide",
  },

  {
    icon: FaRocketchat,
    title: "  Support Portal",
    description: "Knowledgebase and helpful materials in the palm of your hand",
  },

  {
    icon: AiOutlineSafety,
    title: "Bug Bounty Program",
    description: "Hack your way through to some nice rewards",
  },
  {
    icon: FaDiscord,
    title: "Discord Server",
    description: "Join our Discord Server to get all help you may ever need",
  },
  {
    icon: FaHandSparkles,
    title: "Contact us",
    description: "We're nice and friendly!",
  },
];

export const spotlightData = {
  title: "Spotlight",
  linkText: "All tutorials",
  linkUrl: "/spotlight",
  cards: [
    {
      image: spotlight2,
      title: "How to enable intents for your Custom Bot",
      description:
        "The intents are essential to make your Custom Bot perform all MEE6 functions",
      linkText: "Read Article",
      to: "/custom-bots",
    },
    {
      image: spotlight1,
      title: "How to start using Moderation tools",
      description:
        "The MEE6 Moderator plugin is an essential tool for your Discord community.",
      linkText: "Read Article",
      to: "/moderation",
    },
  ],
};

export const navItems = [
  {
    title: "Plugins",
    dropdownName: "Plugins",
    linkCardsData: linkCardsDataPlugins,
    spotlightData,
  },
  {
    title: "Resources",
    dropdownName: "Resources",
    linkCardsData: linkCardsDataResources,
    spotlightData,
  },
];
