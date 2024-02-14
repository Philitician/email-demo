import { resend } from "../resend";
import { inngest, productViewedEvent } from "./client";
import { CartEmailTemplate } from "@/components/cart-email-template";

const getCartById = async (cartId: string) => {
  return {
    cartId,
    email: "philiprene89@gmail.com",
  };
};

export const sendCartReminder = inngest.createFunction(
  { id: "send-cart-reminder" },
  { event: "cart/reminder.send" },
  async ({ event, step }) => {
    const { cartId } = productViewedEvent.parse(event).data;
    await step.sleep("wait-a-moment", "5s");
    const { email } = await getCartById(cartId);
    await resend.emails.send({
      from: "Resend Onboarding <onboarding@resend.dev>",
      to: [email],
      subject: "Påminnelse om handlekurv!!",
      react: <CartEmailTemplate cartId={cartId} />,
    });
    return { sent: true };
  }
);
