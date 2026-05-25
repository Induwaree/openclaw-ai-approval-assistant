import { NextResponse } from "next/server";
import { analyzeWithOpenClaw } from "/Users/induwareedesilva/openclaw-ai-approval-assistant/app/lib/openclaw.ts";

export async function POST(req: Request) {
  const body = await req.json();

  const result = await analyzeWithOpenClaw(
    body.description || ""
  );

  return NextResponse.json(result);
}