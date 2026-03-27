import Link from "next/link";
import { Button } from "./ui/button";

export function NewApplyNow() {
  return (
    <div className="hidden md:flex">
      <Button
        asChild
        className="
    relative px-6 py-2 text-sm font-semibold rounded-md text-white
    bg-linear-to-r from-[#B30000] via-[#E3A008] to-[#B30000]
    bg-size:200%_200%]
    animate-gradient-x
    transition-all duration-300 ease-out
    hover:scale-105 active:scale-95
    hover:shadow-[0_0_20px_rgba(227,160,8,0.6)]
    overflow-hidden
  "
      >
        <Link href="/admissions/apply">Apply Now</Link>
      </Button>
    </div>
  );
}