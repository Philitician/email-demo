import { EventSchemas, Inngest, LiteralZodEventSchema } from "inngest";
import { z } from "zod";

export const productViewedEvent = z.object({
  name: z.literal("cart/reminder.send"),
  data: z.object({ cartId: z.string().min(1) }),
}) satisfies LiteralZodEventSchema;

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "my-app",
  schemas: new EventSchemas().fromZod([productViewedEvent]),
});
