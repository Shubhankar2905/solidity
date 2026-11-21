"use client";

import { useEffect, useMemo, useState } from "react";
import { Bell, Check, ChevronDown, ChevronLeft, ChevronRight, CirclePlay, Info, Menu, Play, Plus, Search, Volume2, X } from "lucide-react";

type Movie = {
  id: number;
  title: string;
  year: string;
  rating: string;
  runtime: string;
  genre: string;
  image: string;
  description: string;
  rank?: number;
  badge?: string;
};

const movies: Movie[] = [
  { id: 1, title: "The Last Horizon", year: "2025", rating: "TV-MA", runtime: "2h 08m", genre: "Sci-Fi Adventure", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80", description: "When a signal from the edge of the universe reaches Earth, one astronaut is sent on a mission that will change everything humanity knows about its place among the stars.", badge: "#1 in Movies Today" },
  { id: 2, title: "The Quiet Wild", year: "2024", rating: "TV-14", runtime: "1h 52m", genre: "Drama", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80", description: "A grieving photographer returns to the remote landscape where she grew up, only to discover that moving forward means facing the stories she left behind." },
  { id: 3, title: "Midnight Run", year: "2025", rating: "TV-MA", runtime: "1h 46m", genre: "Thriller", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80", description: "One night. One city. One impossible choice. A getaway driver races against the clock after a routine job spirals into something much bigger." },
  { id: 4, title: "Blue Current", year: "2024", rating: "PG-13", runtime: "1h 58m", genre: "Adventure", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80", description: "An oceanographer and her crew uncover a hidden world beneath the waves and fight to protect it from the people who would exploit its secrets." },
  { id: 5, title: "House of Echoes", year: "2025", rating: "TV-MA", runtime: "6 Episodes", genre: "Mystery Series", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80", description: "A family inherits a sprawling estate with a history that refuses to stay buried. Every room holds a clue. Every clue raises a darker question." },
  { id: 6, title: "Golden Hour", year: "2024", rating: "TV-14", runtime: "1h 41m", genre: "Romance", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80", description: "Two strangers keep crossing paths in a coastal town, discovering that the best things in life rarely arrive on schedule." },
  { id: 7, title: "Wild at Heart", year: "2025", rating: "PG", runtime: "1h 36m", genre: "Family", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80", description: "A spirited young naturalist and an unlikely friend set off on a journey through the wilderness to find their way back home." },
  { id: 8, title: "City of Glass", year: "2024", rating: "TV-MA", runtime: "2h 02m", genre: "Crime Drama", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80", description: "A determined journalist follows a trail of corruption through a city that never tells the same story twice." },
  { id: 9, title: "After the Storm", year: "2025", rating: "TV-14", runtime: "1h 54m", genre: "Drama", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", description: "In the aftermath of a devastating storm, a small community finds unexpected strength in the people standing beside them." },
  { id: 10, title: "Neon Nights", year: "2024", rating: "TV-MA", runtime: "1h 49m", genre: "Action", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80", description: "A relentless detective and an enigmatic informant race to stop a series of daring heists before the city wakes up." },
];

const hero: Movie = {
  id: 11, title: "Beyond the Stars", year: "2025", rating: "TV-MA", runtime: "2h 14m", genre: "Sci-Fi · Adventure · Epic", image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=2000&q=90", description: "In a future where Earth is only a distant memory, a fearless pilot discovers an uncharted planet that could be humanity’s last hope. But the greatest discovery in the galaxy may be the truth about who—or what—got there first.", badge: "#1 in Movies Today" 
};

const collections = [
  { title: "Trending Now", items: [movies[0], movies[2], movies[4], movies[7], movies[1], movies[3]] },
  { title: "Because You Watched The Last Horizon", items: [movies[3], movies[0], movies[6], movies[8], movies[4], movies[2]] },
  { title: "Critically Acclaimed", items: [movies[1], movies[5], movies[8], movies[6], movies[7], movies[3]] },
  { title: "Your Next Binge", items: [movies[4], movies[7], movies[2], movies[9], movies[5], movies[0]] },
];

function MovieCard({ movie, onSelect, rank, saved, onSave }: { movie: Movie; onSelect: (movie: Movie) => void; rank?: number; saved: boolean; onSave: (id: number) => void }) {
  return (
    <article className="group relative min-w-0 cursor-pointer" onClick={() => onSelect(movie)}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-zinc-900 shadow-lg transition duration-300 ease-out group-hover:z-10 group-hover:scale-[1.06] group-hover:shadow-2xl group-hover:shadow-black/50">
        <img src={movie.image} alt={movie.title} className="h-full w-full object-cover transition duration-500 group-hover:brightness-75" loading="lazy" />
        {rank && <div className="absolute bottom-0 left-0 text-[5.7rem] font-black leading-[.78] tracking-tighter text-zinc-950 drop-shadow-[2px_2px_0_#d4d4d8]" aria-hidden="true">{rank}</div>}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between bg-gradient-to-t from-black/95 via-black/50 to-transparent p-3 pt-10 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="truncate pr-2 text-sm font-semibold text-white">{movie.title}</span>
          <button aria-label={saved ? `Remove ${movie.title} from My List` : `Add ${movie.title} to My List`} onClick={(event) => { event.stopPropagation(); onSave(movie.id); }} className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/60 bg-black/50 text-white transition hover:border-white hover:bg-white hover:text-black">
            {saved ? <Check size={16} /> : <Plus size={16} />}
          </button>
        </div>
      </div>
    </article>
  );
}

function MovieRow({ title, items, onSelect, saved, onSave, ranked = false }: { title: string; items: Movie[]; onSelect: (movie: Movie) => void; saved: number[]; onSave: (id: number) => void; ranked?: boolean }) {
  const [offset, setOffset] = useState(0);
  const maxOffset = Math.max(0, items.length - 4);
  return (
    <section className="group/row relative mb-9" aria-label={title}>
      <div className="mb-3 flex items-end justify-between px-5 sm:px-8 lg:px-14">
        <h2 className="text-lg font-bold tracking-tight text-white sm:text-xl">{title}</h2>
        <div className="flex gap-1 opacity-0 transition group-hover/row:opacity-100">
          <button aria-label={`Previous ${title}`} onClick={() => setOffset(Math.max(0, offset - 1))} disabled={offset === 0} className="rounded-full bg-white/10 p-1.5 text-white hover:bg-white/20 disabled:opacity-30"><ChevronLeft size={17} /></button>
          <button aria-label={`Next ${title}`} onClick={() => setOffset(Math.min(maxOffset, offset + 1))} disabled={offset >= maxOffset} className="rounded-full bg-white/10 p-1.5 text-white hover:bg-white/20 disabled:opacity-30"><ChevronRight size={17} /></button>
        </div>
      </div>
      <div className="overflow-hidden px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-2 gap-3 transition-transform duration-500 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6" style={{ transform: `translateX(-${offset * 16.66}%)` }}>
          {items.map((movie, i) => <MovieCard key={`${title}-${movie.id}-${i}`} movie={movie} onSelect={onSelect} rank={ranked ? i + 1 : undefined} saved={saved.includes(movie.id)} onSave={onSave} />)}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [selected, setSelected] = useState<Movie | null>(null);
  const [saved, setSaved] = useState<number[]>([]);
  const [activeNav, setActiveNav] = useState("Home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("nova-my-list");
    if (stored) {
      try { setSaved(JSON.parse(stored) as number[]); } catch { setSaved([]); }
    }
  }, []);
  useEffect(() => {
    if (!selected) return;
    const handleKey = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [selected]);
  const toggleSaved = (id: number) => setSaved((current) => {
    const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
    window.localStorage.setItem("nova-my-list", JSON.stringify(next));
    return next;
  });
  const searchResults = useMemo(() => [...movies, hero].filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase())), [query]);
  const isSaved = selected ? saved.includes(selected.id) : false;
  const visibleCollections = activeNav === "My List" ? [{ title: "My List", items: [...movies, hero].filter((movie) => saved.includes(movie.id)) }] : collections;

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-white selection:bg-red-600 selection:text-white">
      <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-black/90 via-black/65 to-transparent transition-colors">
        <nav className="mx-auto flex h-[68px] max-w-[1800px] items-center gap-7 px-5 sm:px-8 lg:px-14" aria-label="Main navigation">
          <a href="#home" onClick={() => setActiveNav("Home")} className="shrink-0 text-[1.7rem] font-black tracking-[-.09em] text-red-600 sm:text-[1.9rem]">NOVA<span className="text-white">+</span></a>
          <div className="hidden items-center gap-5 text-[13px] md:flex">
            {["Home", "Series", "Films", "New & Popular", "My List"].map((item) => <button key={item} onClick={() => setActiveNav(item)} className={`transition hover:text-white ${activeNav === item ? "font-bold text-white" : "text-zinc-300"}`}>{item}</button>)}
          </div>
          <div className="ml-auto flex items-center gap-4">
            {searchOpen ? <div className="flex items-center gap-2 border border-white/70 bg-black/70 px-2.5 py-1.5"><Search size={16} className="shrink-0" /><input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Escape" && (setSearchOpen(false), setQuery(""))} placeholder="Titles, people, genres" aria-label="Search titles" className="w-36 bg-transparent text-sm text-white outline-none placeholder:text-zinc-400 sm:w-52" /><button aria-label="Close search" onClick={() => { setSearchOpen(false); setQuery(""); }}><X size={15} /></button></div> : <button aria-label="Search" onClick={() => setSearchOpen(true)} className="text-white hover:text-zinc-300"><Search size={21} /></button>}
            <button aria-label="Notifications" className="hidden text-white hover:text-zinc-300 sm:block"><Bell size={19} /></button>
            <button aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded bg-gradient-to-br from-rose-500 to-orange-400 text-xs font-bold">A</span><ChevronDown size={14} className="hidden sm:block" /></button>
          </div>
        </nav>
        {menuOpen && <div className="absolute right-5 top-16 z-50 w-48 rounded-md border border-white/10 bg-zinc-950 p-2 shadow-xl sm:right-8"><p className="px-3 py-2 text-xs text-zinc-400">Browsing as Alex</p><button onClick={() => { setActiveNav("My List"); setMenuOpen(false); }} className="w-full rounded px-3 py-2 text-left text-sm hover:bg-white/10">My List</button><button onClick={() => { setActiveNav("Home"); setMenuOpen(false); }} className="w-full rounded px-3 py-2 text-left text-sm hover:bg-white/10">Browse all titles</button></div>}
      </header>

      {searchOpen && query.trim() ? <section className="min-h-screen px-5 pb-16 pt-28 sm:px-8 lg:px-14">
        <h1 className="mb-7 text-xl font-semibold">Search results for <span className="text-zinc-400">“{query}”</span></h1>
        {searchResults.length ? <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">{searchResults.map((movie) => <MovieCard key={movie.id} movie={movie} onSelect={setSelected} saved={saved.includes(movie.id)} onSave={toggleSaved} />)}</div> : <p className="text-zinc-400">No titles found. Try a different search.</p>}
      </section> : <>
        {activeNav !== "My List" && <section id="home" className="relative flex min-h-[590px] items-center sm:min-h-[660px] lg:min-h-[740px]">
          <img src={hero.image} alt="A luminous galaxy stretching across the night sky" className="absolute inset-0 h-full w-full object-cover object-[center_38%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/30" />
          <div className="relative z-10 max-w-2xl px-5 pb-4 pt-24 sm:px-8 lg:ml-0 lg:px-14">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[.3em] text-zinc-300"><span className="text-red-600">N</span> Original Film</div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[.28em] text-red-400 sm:text-sm">A journey beyond imagination</p>
            <h1 className="max-w-xl text-5xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl lg:text-7xl">BEYOND<br />THE STARS</h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-200"><span className="font-bold text-emerald-400">98% Match</span><span>2025</span><span className="rounded border border-white/40 px-1.5 py-0.5 text-[11px]">{hero.rating}</span><span>{hero.runtime}</span><span className="rounded border border-white/40 px-1.5 py-0.5 text-[10px]">4K</span></div>
            <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-200 sm:text-base sm:leading-7">{hero.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => { setSelected(hero); setPlaying(true); }} className="flex h-11 items-center gap-2 rounded bg-white px-6 text-sm font-bold text-black transition hover:bg-white/80"><Play size={20} fill="currentColor" /> Play</button>
              <button onClick={() => setSelected(hero)} className="flex h-11 items-center gap-2 rounded bg-zinc-500/70 px-5 text-sm font-bold text-white transition hover:bg-zinc-500/50"><Info size={20} /> More Info</button>
              <button onClick={() => toggleSaved(hero.id)} aria-label={saved.includes(hero.id) ? "Remove from My List" : "Add to My List"} className="grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-black/25 transition hover:border-white"><span className="text-xl leading-none">{saved.includes(hero.id) ? <Check size={20} /> : <Plus size={20} />}</span></button>
            </div>
          </div>
          <div className="absolute bottom-16 right-0 hidden items-center gap-3 sm:flex"><button onClick={() => setPlaying(!playing)} aria-label={playing ? "Mute preview" : "Play preview"} className="rounded-full border border-white/50 bg-black/30 p-2 text-white hover:bg-white/20">{playing ? <Volume2 size={18} /> : <CirclePlay size={18} />}</button><span className="border-l-2 border-white/80 bg-black/30 px-4 py-2 text-sm">13+</span></div>
        </section>}
        <div className={`relative z-10 ${activeNav === "My List" ? "pt-28" : "-mt-10 sm:-mt-12"}`}>
          {activeNav === "My List" && <div className="px-5 pb-8 sm:px-8 lg:px-14"><h1 className="text-3xl font-bold">My List</h1><p className="mt-2 text-sm text-zinc-400">Your saved movies and series, all in one place.</p></div>}
          {visibleCollections.map((collection, index) => collection.items.length > 0 ? <MovieRow key={collection.title} title={collection.title} items={collection.items} onSelect={setSelected} saved={saved} onSave={toggleSaved} ranked={index === 0 && activeNav !== "My List"} /> : null)}
          {activeNav === "My List" && !saved.length && <div className="px-5 py-14 text-center sm:px-8"><p className="text-lg font-semibold">Your list is waiting.</p><p className="mt-2 text-sm text-zinc-400">Add movies and shows you want to watch later.</p><button onClick={() => setActiveNav("Home")} className="mt-5 rounded bg-white px-5 py-2.5 text-sm font-bold text-black hover:bg-zinc-200">Explore titles</button></div>}
        </div>
      </>}

      <footer className="mx-auto mt-16 max-w-5xl px-5 pb-10 text-zinc-500 sm:px-8">
        <div className="mb-5 flex gap-5">{["Facebook", "Instagram", "X", "YouTube"].map((label) => <a key={label} href="#home" className="text-xs transition hover:text-white">{label}</a>)}</div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs sm:grid-cols-4">{["Audio Description", "Help Center", "Gift Cards", "Media Center", "Investor Relations", "Jobs", "Terms of Use", "Privacy", "Legal Notices", "Cookie Preferences", "Corporate Information", "Contact Us"].map((item) => <a key={item} href="#home" className="hover:underline">{item}</a>)}</div>
        <p className="mt-7 text-[11px]">© 2025 Nova+. All rights reserved.</p>
      </footer>

      {selected && <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }} role="presentation">
        <section role="dialog" aria-modal="true" aria-labelledby="detail-title" className="relative my-auto w-full max-w-3xl overflow-hidden rounded-lg bg-[#18181b] shadow-2xl shadow-black/70">
          <div className="relative aspect-video max-h-[55vh] overflow-hidden"><img src={selected.image} alt={selected.title} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-black/5 to-black/10" />
            <button onClick={() => setSelected(null)} aria-label="Close details" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#18181b] text-white hover:bg-zinc-700"><X size={20} /></button>
            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8"><p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-red-500">NOVA+ FILM</p><h2 id="detail-title" className="text-3xl font-black tracking-tight sm:text-5xl">{selected.title}</h2><div className="mt-4 flex flex-wrap gap-3"><button onClick={() => setPlaying(!playing)} className="flex h-10 items-center gap-2 rounded bg-white px-5 text-sm font-bold text-black hover:bg-zinc-200"><Play size={17} fill="currentColor" /> {playing ? "Playing" : "Play"}</button><button onClick={() => toggleSaved(selected.id)} aria-label={isSaved ? "Remove from My List" : "Add to My List"} className="grid h-10 w-10 place-items-center rounded-full border border-white/50 hover:border-white">{isSaved ? <Check size={19} /> : <Plus size={19} />}</button></div></div>
          </div>
          <div className="grid gap-6 px-5 pb-7 pt-1 sm:grid-cols-[1fr_220px] sm:px-8 sm:pb-9">
            <div><div className="mb-3 flex flex-wrap items-center gap-3 text-sm"><span className="font-bold text-emerald-400">98% Match</span><span>{selected.year}</span><span className="border border-zinc-500 px-1 text-xs">{selected.rating}</span><span>{selected.runtime}</span><span className="border border-zinc-500 px-1 text-[10px]">HD</span></div><p className="text-sm leading-6 text-zinc-200">{selected.description}</p></div>
            <div className="space-y-3 text-sm"><p><span className="text-zinc-500">Genres: </span><span>{selected.genre}</span></p><p><span className="text-zinc-500">Cast: </span>Starring a remarkable ensemble</p><p><span className="text-zinc-500">This show is: </span>Imaginative, Atmospheric, Gripping</p></div>
          </div>
        </section>
      </div>}
    </main>
  );
}
