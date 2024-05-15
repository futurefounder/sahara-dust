import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function POST(req: Request) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "Invalid article ID" }, { status: 400 });
  }

  try {
    const client = await pool.connect();
    await client.query(
      "UPDATE articles SET vote_count = vote_count + 1 WHERE id = $1",
      [id]
    );
    client.release();

    return NextResponse.json({ message: "Vote registered" }, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export { POST };
