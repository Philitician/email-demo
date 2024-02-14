import { resend } from "@/lib/resend";
import { EmailTemplate } from "@/components/email-template";
import EmailExample from "@/components/email-example";

export default function Home() {
  return (
    <main>
      <form
        action={async () => {
          "use server";
          const data = await resend.emails.send({
            from: "Resend Onboarding <onboarding@resend.dev>",
            to: [
              "philip.rothschild@egde.no",
              "philiprene89@gmail.com",
              // "philipr@egde.no",
              // "philip.rothschild@egdeconsulting.no",
            ],
            subject: "Hello world",
            // react: EmailTemplate({ firstName: "Philip" }),
            react: <EmailExample />,
          });
        }}
      >
        <button>Send epost</button>
      </form>
    </main>
  );
}
