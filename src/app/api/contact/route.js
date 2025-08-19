import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const text = `
📩 *New Contact Message*
👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}
    `;

    // kirim ke Telegram
    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    return NextResponse.json({ success: true, message: "Message sent to Telegram!" });
  } catch (error) {
    console.error("❌ Telegram error:", error);
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 });
  }
}
