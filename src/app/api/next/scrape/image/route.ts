import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  const num = searchParams.get("num");

  if (!url || !num) {
    return NextResponse.json(
      { error: "Missing url or num parameters" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `http://localhost:8000/api/scrape/image?url=${encodeURIComponent(
        url
      )}&num=${num}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch images from external API");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log("from api", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
