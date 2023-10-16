import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";
import { Aside } from "./components/aside";
import { Player } from "./components/player";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album1.jpg"
                width={96}
                height={96}
                alt="Capa album"
              />
              <strong>Titulo do album</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album1.jpg"
                width={96}
                height={96}
                alt="Capa album"
              />
              <strong>Titulo do album</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album1.jpg"
                width={96}
                height={96}
                alt="Capa album"
              />
              <strong>Titulo do album</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album1.jpg"
                width={96}
                height={96}
                alt="Capa album"
              />
              <strong>Titulo do album</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album1.jpg"
                width={96}
                height={96}
                alt="Capa album"
              />
              <strong>Titulo do album</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album1.jpg"
                width={96}
                height={96}
                alt="Capa album"
              />
              <strong>Titulo do album</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for Wanderson</h2>
          <div className="grid grid-cols-5 gap-4 mt-4 group">
            <a
              href=""
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2 relative"
            >
              <Image
                className="w-full"
                src="/album1.jpg"
                width={120}
                height={120}
                alt="Capa album"
              />
              <button className=" absolute top-28 left-28 w-10 h-10 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
              <strong className="font-semibold">Titulo do album</strong>
              <span className="text-sm text-zinc-400">
                Cantor 1, Cantor 2, Cantor 3
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2 relative"
            >
              <Image
                className="w-full"
                src="/album1.jpg"
                width={120}
                height={120}
                alt="Capa album"
              />
              <button className=" absolute top-28 left-28 w-10 h-10 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
              <strong className="font-semibold">Titulo do album</strong>
              <span className="text-sm text-zinc-400">
                Cantor 1, Cantor 2, Cantor 3
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2 relative"
            >
              <Image
                className="w-full"
                src="/album1.jpg"
                width={120}
                height={120}
                alt="Capa album"
              />
              <button className=" absolute top-28 left-28 w-10 h-10 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
              <strong className="font-semibold">Titulo do album</strong>
              <span className="text-sm text-zinc-400">
                Cantor 1, Cantor 2, Cantor 3
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2 relative"
            >
              <Image
                className="w-full"
                src="/album1.jpg"
                width={120}
                height={120}
                alt="Capa album"
              />
              <button className=" absolute top-28 left-28 w-10 h-10 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
              <strong className="font-semibold">Titulo do album</strong>
              <span className="text-sm text-zinc-400">
                Cantor 1, Cantor 2, Cantor 3
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2 relative"
            >
              <Image
                className="w-full"
                src="/album1.jpg"
                width={120}
                height={120}
                alt="Capa album"
              />
              <button className=" absolute top-28 left-28 w-10 h-10 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
              <strong className="font-semibold">Titulo do album</strong>
              <span className="text-sm text-zinc-400">
                Cantor 1, Cantor 2, Cantor 3
              </span>
            </a>
          </div>
        </main>
      </div>
      <Player />
    </div>
  );
}
