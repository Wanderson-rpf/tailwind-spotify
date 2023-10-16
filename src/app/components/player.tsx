import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";

export function Player() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/album1.jpg" width={56} height={56} alt="Capa album" />
        <div className="flex flex-col gap-1">
          <strong className="font-normal">Titulo do album</strong>
          <span className="text-xs text-zinc-400">
            Musica tocando atualmente
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={18} className="text-zinc-200" />
          <SkipBack size={18} className="text-zinc-200" />
          <button className="w-8 h-8 flex items-center justify-center pl-2 p-2 rounded-full bg-white text-black">
            <Play fill="bg-black" />
          </button>
          <SkipForward size={18} className="text-zinc-200" />
          <Repeat size={18} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 w-96 bg-zinc-600 rounded">
            <div className="h-1 w-40 bg-zinc-200 rounded"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={18} />
        <LayoutList size={18} />
        <Laptop2 size={18} />
        <div className="flex items-center gap-2">
          <Volume size={25} />
          <div className="h-1 w-20 bg-zinc-600 rounded">
            <div className="h-1 w-10 bg-zinc-200 rounded"></div>
          </div>
        </div>
        <Maximize2 size={18} />
      </div>
    </footer>
  );
}
