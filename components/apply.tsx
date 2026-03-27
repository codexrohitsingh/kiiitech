import Link from "next/link";
import { Button } from "./ui/button";

export function NewApplyNow() {
  return (
    <div className="hidden md:flex">
      <Button
        className="
      relative px-7 py-3 text-sm font-bold text-white rounded-xl
      bg-linear-to-r from-red-600 via-yellow-500 to-red-600
      bg-size:200%_200% animate-[gradientMove_3s_linear_infinite]

      shadow-lg shadow-red-500/30
      hover:shadow-yellow-400/50
      hover:scale-110 active:scale-95

      transition-all duration-300 overflow-hidden
    "
        asChild
      >
        <Link
          href="/admissions/apply"
          className="relative z-10 flex items-center gap-2"
        >
          Apply Now
          {/* Shine effect */}
          <span className="absolute inset-0 overflow-hidden rounded-xl">
            <span className="absolute -left-20 top-0 h-full w-20 bg-white/30 blur-md rotate-12 animate-shine"></span>
          </span>
        </Link>
      </Button>
    </div>
  );
}
