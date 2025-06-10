import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[var(--background)] relative">
      {/* Shopping bag icon in top right, sticky */}
      <div className="sticky top-6 right-8 z-50 float-right w-fit ml-auto">
        <Link href="/cart" aria-label="View Cart">
          <span className="inline-block p-2 rounded-full bg-white border border-[var(--primary)] shadow hover:bg-[var(--primary)] hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75h19.5M6.75 6.75V5.25A2.25 2.25 0 019 3h6a2.25 2.25 0 012.25 2.25v1.5m-10.5 0h10.5m-10.5 0l1.5 12.75a2.25 2.25 0 002.25 2.25h3a2.25 2.25 0 002.25-2.25l1.5-12.75" />
            </svg>
          </span>
        </Link>
      </div>
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <Image
            src="/logo.jpg"
            alt="Goldman Snacks Logo"
            width={180}
            height={180}
            className="mx-auto mb-4 rounded-none"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold candy-text mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          Goldman Snacks
        </h1>
        <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text)' }}>
          Your Sweet Adventure Awaits!
        </p>
        {/* 4 product boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {[1,2,3,4].map((num) => (
            <Link key={num} href={`/product${num}`} className="block">
              <div className="candy-card flex flex-col items-center justify-center h-48 cursor-pointer hover:shadow-lg transition-shadow relative">
                {/* Placeholder for image */}
                <div className="w-20 h-20 bg-[var(--secondary)] border-2 border-[var(--primary)] rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl text-[var(--primary)]">🍬</span>
                </div>
                <span className="text-lg font-semibold mb-1" style={{ color: 'var(--primary)' }}>Product {num}</span>
                <span className="text-sm text-gray-500">Coming Soon</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 