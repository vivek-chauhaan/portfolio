import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY); // ✅ Loaded from .env.local

export async function POST(request) {
  const body = await request.json();

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <noreply@yourdomain.com>", // ✅ Use verified sender later
      to: "your_email@gmail.com", // ✅ Your real inbox here
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong><br/> ${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}