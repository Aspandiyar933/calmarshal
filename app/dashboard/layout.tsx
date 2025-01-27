import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logoas.svg"
import DashboardPage from "./page";

export default function DashboardLayout({children}: {children: ReactNode}) {
  return (
    <>
      <div className="min-h-screen w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr]">
        <div className="hidden md:block border-r bg-muted/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg lg:px-6">
              <Link href="/">
                <Image src={Logo} alt="Logo" className="size-8"/>
                <p className="text-xl font-bold">
                  Cal<span className="text-primary">Marshal</span>
                </p>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 lg:px-4">
                <DashboardPage />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}