import Link from "next/link";
import { Button } from "./ui/button";

export function ApplyNow(){
    return(
         <div className="hidden md:flex">
              <Button
                className="px-6 py-2 text-sm font-semibold rounded-md text-white
                bg-gradient-to-r from-[#B30000] via-[#E3A008] to-[#B30000]
                bg-[length:200%_200%]
                animate-[goldRedBlink_1.5s_infinite]
                hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/admissions/apply">Apply Now</Link>
              </Button>
            </div>
    )
}