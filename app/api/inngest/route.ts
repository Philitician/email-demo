import { inngest } from "@/lib/inngest/client";
import { sendCartReminder } from "@/lib/inngest/functions";

import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [sendCartReminder],
});
