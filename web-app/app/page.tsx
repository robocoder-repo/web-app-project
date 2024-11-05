import dynamic from 'next/dynamic';

const DynamicFooter = dynamic(() => import('./components/Footer'), {
  loading: () => <p>Loading...</p>,
});

const DynamicMainContent = dynamic(() => import('./components/MainContent'), {
  loading: () => <p>Loading main content...</p>,
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <DynamicMainContent />
      <DynamicFooter />
    </div>
  );
}
