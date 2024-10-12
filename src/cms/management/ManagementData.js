import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from "react-icons/tb";

import {
  management0,
  management1,
  management2,
  management3,
} from "../../assets/images/index.js";

export const featureManagementData = [
  {
    title: "Discord Auto-Mod rules",
    paragraph:
      "Set up auto-moderation rules for your server and let Bot-Pro protect your server even when you’re away.",
    image: management0,
    imagePosition: "right",
  },
  {
    icon: TbCircleNumber1Filled,
    title: "Auto-Mod Filters",
    paragraph:
      "Keep your server free from disruptive behavior. Set up filters for bad links, insults, excessive emojis or all-caps messages!",
    showDiscordButton: true,
    image: management1,
    imagePosition: "right",
  },
  {
    icon: TbCircleNumber2Filled,
    title: "Track your server activity",
    paragraph:
      "Choose a private channel for Bot-Pro to notify you and your moderators of updates, deleted messages, and other voice, server or channel events!",
    showDiscordButton: true,
    image: management2,
    imagePosition: "right",
  },
  {
    icon: TbCircleNumber3Filled,
    title: "Advanced moderation Commands",
    paragraph:
      "Bot-Pro provides over 15 pre-made moderation commands giving your moderators the right tools to keep your server in order.",
    showDiscordButton: true,
    image: management3,
    imagePosition: "right",
  },
];
