import { NextResponse } from "next/server";
import { EmailTemplate } from "../../../public/components/email/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "";
const toEmail = process.env.TO_EMAIL || "";

export async function POST(req: Request, res: any) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      text: "A visitor to your portfolio website has something to say.",
      react: EmailTemplate({ firstName: "John", email, subject, message }),
    });
    
    return NextResponse.json({
      status: "OK",
    });
  } catch (error) {
    return Response.json({ error });
  }
}
