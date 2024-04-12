import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import { container, footer, h1, hr, logo, main, paragraph } from "./email-styles";

interface EmailProps {
  firstName: string;
  email: string;
  subject: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export const EmailTemplate = ({
  email,
  subject,
  message,
}: EmailProps) => (
  <Html>
    <Head />
    <Preview>Leads from Portfolio Website.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={`https://resend.com/static/posts/logo-warp.jpg`} width="50" height="50" alt="Logo" style={logo} />
        <Text style={paragraph}>Hi Shiv,</Text>
        <Heading style={h1}>Subject: {subject}</Heading>
        <Text style={paragraph}>
          From: {email}
          <br />
          Message: {message}
        </Text>
        <Text style={paragraph}>
          Best Regards,
          <br />R Shivaram
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Check and do the needful mate!</Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
