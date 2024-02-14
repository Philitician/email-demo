import { inngest } from "@/lib/inngest/client";

export default function CartExample() {
  return (
    <form
      action={async () => {
        "use server";
        console.log("update the cart...");
        await inngest.send({
          name: "cart/reminder.send",
          data: {
            cartId: "123",
          },
        });
      }}
    >
      <button>Legg til i handlekurv</button>
    </form>
  );
}
