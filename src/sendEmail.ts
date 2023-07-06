import { Resend } from 'resend';
import { env } from './env.mjs';

const resend = new Resend(env.RESEND_API_KEY);

interface SendEmailConfig {
  content: string;
  from: string;
  subject: string;
  to: string;
}

export async function sendEmail({
  content,
  from,
  subject,
  to
}: SendEmailConfig) {
  try {
    const sendingEmailResponse = await resend.emails.send({
      from,
      to,
      subject,
      html: content
    });

    console.log({ sendingEmailResponse });
  } catch (error) {
    console.log(error);
  }
}

const defaultDevEmail = 'onboarding@resend.dev';
