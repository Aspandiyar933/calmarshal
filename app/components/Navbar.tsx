import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logoas.svg"
import { AuthModal } from "./AuthModal";

export function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Logo" className="w-auto h-auto" />
        <h4 className="text-3xl font-semibold">
          Cal<span className="text-blue-500">Marshal</span>
        </h4>
      </Link>
      <AuthModal />
    </div>
  )
}