import { EmailTemplate } from "../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "";

export async function POST(req: any, res: any) {
  const { body } = await req.json();
  const { email, subject, message } = body;

  try {
    const data = await resend.emails.send({
      //   from: "Acme <onboarding@resend.dev>",
      from: "onboarding@resend.dev",
      to: ["shivaramr.mec@gmail.com"],
      subject: "Hello world",
      text: "Hello Testing body of email",
      react: EmailTemplate({ firstName: "John", email, subject, message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
