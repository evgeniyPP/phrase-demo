import { useSearchParams } from 'react-router-dom';

function Demo() {
  const [searchParams] = useSearchParams();
  const phrase = searchParams.get('phrase');

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl justify-center sm:mt-0 items-center px-6">
      <h1 className="mt-1 text-5xl font-extrabold text-center tracking-tight sm:text-6xl xl:text-7xl">
        {phrase}
      </h1>
    </main>
  );
}

export default Demo;
