import { Behavior } from "./behavior";

export const recentBehavior: Behavior[] = [
  {
    replyLength: "LONG",
    repliedEarly: true,
    replyContinuedConversation: true,
    likes: 9,
    repliesReceived: 8,
    followersGained: 2,
  },
  {
    replyLength: "SHORT",
    repliedEarly: false,
    replyContinuedConversation: false,
    likes: 3,
    repliesReceived: 0,
    followersGained: 0,
  },
  {
    replyLength: "MEDIUM",
    repliedEarly: true,
    replyContinuedConversation: true,
    likes: 9,
    repliesReceived: 4,
    followersGained: 0,
  },
];
