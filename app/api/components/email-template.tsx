import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email:string;
  subject:string;
  message:string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName,email,subject,message }) => (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <h1>{subject}</h1>
      <p>New message submitted!</p>
      <p>Thank you for contacting us!</p>
      <p>{message}-{`From-${email}`}</p>
    </div>
);
