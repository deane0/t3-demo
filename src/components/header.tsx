/** eslint-disable @typescript-eslint/no-unused-vars */
import { MenuIcon } from "lucide-react";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "~/components/ui/button";

export function Header() {
  return (
    <header className="w-full">
      <div className="container flex items-center py-12">
        <div>
          <Link href="/" className="text-3xl">
            T3 App
          </Link>
        </div>

        <div className="flex-1">
          <nav className="hidden lg:block">
            <ul className="flex items-center justify-center">
              <li>
                <Link href="/about" className="px-4 py-2">
                  ABOUT
                </Link>
              </li>

              <li>
                <Link href="/services" className="px-4 py-2">
                  SERVICES
                </Link>
              </li>

              <li>
                <Link href="/technologies" className="px-4 py-2">
                  TECHNOLOGIES
                </Link>
              </li>

              <li>
                <Link href="/how" className="px-4 py-2">
                  HOW TO
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden space-x-8 md:block">
          <Button variant="outline" className="rounded-full bg-transparent">
            CONTACT US
          </Button>
          <Button className="rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
            JOIN HYDRA
          </Button>
        </div>
        <div className="block md:hidden">
          <Button
            size="icon"
            variant="ghost"
            className="bg-transparent active:bg-transparent"
          >
            <MenuIcon className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </header>
  );
}
