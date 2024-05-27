import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const buttonStyles = `text-white px-5 py-3 bg-white/ flex items-center gap-x-2 opacity-75 
hover:opacity-100 transition text-sm`;

export default function PaginationControls({
  previousPath,
  nextPath,
}: {
  previousPath: string;
  nextPath: string;
}) {
  return (
    <section className="flex justify-between w-full">
      <div>
        <Link
          href={previousPath || "/"}
          className={cn(buttonStyles, previousPath == "" && "hidden")}
        >
          <ArrowLeftIcon />
          Previous
        </Link>
      </div>

      <div>
        <Link
          href={nextPath}
          className={cn(buttonStyles, nextPath == "" && "hidden")}
        >
          Next
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}
