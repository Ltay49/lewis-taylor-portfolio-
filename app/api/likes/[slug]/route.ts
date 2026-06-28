import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data } = await supabase
    .from("project_likes")
    .select("count")
    .eq("slug", slug)
    .single();

  return NextResponse.json({ count: data?.count ?? 0 });
}

export async function POST(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data } = await supabase
    .from("project_likes")
    .select("count")
    .eq("slug", slug)
    .single();

  if (data) {
    await supabase
      .from("project_likes")
      .update({ count: data.count + 1 })
      .eq("slug", slug);

    return NextResponse.json({ count: data.count + 1 });
  } else {
    await supabase
      .from("project_likes")
      .insert({ slug, count: 1 });

    return NextResponse.json({ count: 1 });
  }
}
