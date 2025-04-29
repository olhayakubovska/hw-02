import type { Meta, StoryObj } from "@storybook/react";
import FriendMessage from "./FriendMessage";
import avatar from "../avatar.png";

const meta: Meta<typeof FriendMessage> = {
  title: "SocialNetwork/FriendMessage",
  component: FriendMessage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FriendMessage>;

export const FriendMessageStory: Story = {
  args: {
    message: {
      id: 0,
      user: {
        avatar: avatar, // можно менять
        name: "NEW Name", // можно менять
      },
      message: {
        text: "heloo my friend !!!!!!!", // можно менять
        time: "22:00", // можно менять
      },
    },
  },
};
