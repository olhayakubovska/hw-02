import type { Meta, StoryObj } from "@storybook/react";
import Message from "./Message";
import avatar from "../avatar.png";

const meta: Meta<typeof Message> = {
  title: "SocialNetwork/Message",
  component: Message,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Message>;

export const MessageStory: Story = {
  args: {
    message: {
      id: 0,
      user: {
        avatar: avatar,
        name: "second Name",
      },
      message: {
        text: "heloo my friend , have a good day !!!!!!!", 
        time: "22:00", 
      },
    },
  },
};
