import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "~/components/header";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import Placeholder from "~/assets/placeholder.svg";
import { AspectRatio } from "~/components/ui/aspect-ratio";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Header />
      <main className="flex-1">
        <div className="container grid grid-cols-1 items-center gap-20 pb-24 pt-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="text-center text-3xl font-bold md:text-start md:text-5xl">
              <span className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent">
                Dive
              </span>{" "}
              <span>Into The Depths</span>
              <br />
              <span>Of</span>{" "}
              <span className="bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] bg-clip-text text-transparent">
                Virtual Reality
              </span>
            </h1>
            <p className="mt-12 hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae.
            </p>

            <div className="mt-16">
              <Button className="w-full rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-foreground md:w-auto">
                BUILD YOUR WORLD
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <AspectRatio ratio={1}>
              <Image
                src={Placeholder}
                alt="Placeholder"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center rounded-full bg-gradient-to-r from-[#211E2E] via-[#2E2942] to-[#211E2E] px-6 py-4 lg:flex-row lg:p-10">
            <div className="flex flex-grow items-center">
              <MapPinIcon className="h-16 w-16" />
              <div className="ml-2">
                <h4 className="hidden text-2xl font-bold md:block">
                  Pay Us a Visit
                </h4>
                <p className="text-sm">
                  Union St, Seattle, WA 98101, United States
                </p>
              </div>
            </div>
            <Separator
              orientation="vertical"
              className="mx-6 hidden lg:block"
            />
            <div className="hidden flex-grow items-center lg:flex">
              <PhoneCallIcon className="h-16 w-16" />
              <div className="ml-2">
                <h4 className="text-2xl font-bold">Give Us a Call</h4>
                <p className="text-sm">(110) 1111-1010</p>
              </div>
            </div>
            <Separator
              orientation="vertical"
              className="mx-6 hidden lg:block"
            />
            <div className="hidden flex-grow items-center lg:flex">
              <MailIcon className="h-16 w-16" />
              <div className="ml-2">
                <h4 className="text-2xl font-bold">Send Us a Message</h4>
                <p className="text-sm">Contact@HydraVTech.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
