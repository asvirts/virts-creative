import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // --- Nodemailer Configuration ---
    // Ensure these environment variables are set in your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
      port: parseInt(process.env.EMAIL_PORT || "587", 10), // e.g., 587 or 465
      secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    const recipientEmail = process.env.EMAIL_TO; // Email address to receive the form submissions

    if (!recipientEmail) {
      throw new Error("EMAIL_TO is not defined in environment variables");
    }
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error("Email server configuration (host, user, pass) is missing in environment variables");
    }

    // --- Email Content ---
    const mailOptions = {
      from: `"Virts Creative Contact Form" <${process.env.EMAIL_USER}>`, // Sender address (must be your authenticated email)
      to: recipientEmail, // List of receivers
      replyTo: email, // Set the reply-to address to the user's email
      subject: `New Contact Form Submission from ${name}`, // Subject line
      text: `You received a new message from your website contact form:

        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Company: ${company || "Not provided"}
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    };

    // --- Send Email ---
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully"
    })
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message",
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
