import { Friend, UserConversations } from "./types";

export const friends: Friend[] = [
  { username: "Sara Emilia" },
  { username: "Lidia from the bowling" },
  { username: "Thor - gardening" },
  { username: "Lise Anne Marie Karlstad" },
];

export const userConversations: UserConversations = {
  ["Sara Emilia"]: {
    chat: [
      {
        username: "Sara Emilia",
        timestamp: "14:02",
        message: "Hello, how is your day dooing? ",
      },
      {
        username: "Øyvind",
        timestamp: "14:20",
        message:
          "It is ok. It was a bit of work, but a lot of work. Almost finished now. Would you like to meet up within an hour?",
      },
      {
        username: "Øyvind",
        timestamp: "14:50",
        message:
          "Well, I have to fix something at 17:00, I would have time after. ",
      },
      {
        username: "Sara Emilia",
        timestamp: "14:51",
        message: "Wanna meet a bit later? Like 19:00? ",
      },
    ],
  },
  ["Lidia from the bowling"]: {
    chat: [
      {
        username: "Lidia from the bowling",
        timestamp: "19:10",
        message:
          "Hello, sorry to bother you, but you lost time your wallet. I have it. All documents, cards are in. If you'd be at the bowling next time ask at the reception. I gave it to the lady that works there :) ",
      },
    ],
  },
  ["Thor - gardening"]: {
    chat: [
      {
        username: "Thor - gardening",
        timestamp: "19:10",
        message:
          "The plants are doing great. I have been watering them every day. I will be away for a week, so I will not be able to water them. I will be back on the 15th. ",
      },
      {
        username: "Øyvind",
        timestamp: "14:51",
        message: "Okay, I will water them. ",
      },
    ],
  },
  ["Lise Anne Marie Karlstad"]: {
    chat: [],
  },
};
