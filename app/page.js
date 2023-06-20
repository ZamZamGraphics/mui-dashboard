"use client";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <h3>Home Page H3</h3>
        <Link href="/dashboard">
          <Button className="rounded-full" variant="contained">
            Dashboard
          </Button>
        </Link>
      </div>
    </>
  );
}
