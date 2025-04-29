import type { Meta, StoryObj } from "@storybook/react";
import MessageSender from "./MessageSender";
import Message from "../message/Message";


const meta: Meta<typeof MessageSender> = {
  title: "SocialNetwork/MessageSender",
  component: MessageSender,
  tags: ["autodocs"],
};

export default meta;

// type Story = StoryObj<typeof MessageSender>;

// export const MessageStory: Story = {
//   args: {
 
//   },
// };

// История без использования args
export const Default = () => (
  <MessageSender M={Message} />
);