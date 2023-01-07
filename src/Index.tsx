import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Index() {
  const [phrase, setPhrase] = useState('');

  const navigate = useNavigate();

  const showPhrase = () => {
    navigate(`/demo?phrase=${phrase}`);
  };

  return (
    <main className="mx-auto mt-8 flex min-h-screen max-w-7xl justify-center px-4 sm:mt-0 sm:items-center sm:px-6">
      <div className="flex flex-col gap-6">
        <div className="md:mx-auto md:max-w-2xl">
          <h1 className="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
            Демо Фраз
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Впишите своё слово или словосочетание, <br /> чтобы потом удобно показать его всем
            окружающим.
          </p>
        </div>

        <div className="mt-8 sm:mt-0 sm:max-w-lg sm:justify-center sm:text-center lg:mx-0 lg:text-left">
          <div className="mt-3 flex flex-col gap-4">
            <div className="sm:flex">
              <label htmlFor="phrase" className="sr-only">
                Слово или словосочетание
              </label>
              <input
                type="text"
                value={phrase}
                onChange={e => setPhrase(e.target.value)}
                id="phrase"
                placeholder="Слово или словосочетание"
                className="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-lime-600 focus:ring-lime-600 sm:flex-1"
              />
              <button
                onClick={showPhrase}
                className="mt-3 w-full rounded-md border border-transparent bg-lime-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
              >
                Показать
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
