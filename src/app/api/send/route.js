import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Nuru <onboarding@resend.dev>", // ✅ Safe sender
      to: ["nuruzz563@gmail.com"],
      subject: "Hello from Nuruzzaman 🚀",
      html: "<p>This is a test email from Vercel + Resend integration.</p>",
    });

    if (error) {
      console.error("Resend Error:", error);
      return Response.json({ error }, { status: 500 });
    }

    console.log("Resend Success:", data);
    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Catch Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
