
  import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/Models/contactModels";


export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    await dbConnect();

    const newMessage = await Contact.create({ name, email, message });

    console.log("📩 Contact saved:", newMessage);

    return NextResponse.json({ success: true, message: "Message saved to DB!" });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
