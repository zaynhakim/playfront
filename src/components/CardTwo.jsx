export default function CardTwo() {
  return (
    <div className="group">
      <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-2xl bg-zinc-50 p-6 shadow-lg group-hover:bg-zinc-100 dark:bg-zinc-900 dark:group-hover:bg-zinc-800">
        <div className="shrink-0">
          <div className="text-zinc-600 group-hover:text-zinc-700 dark:text-zinc-300 dark:group-hover:text-zinc-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-10 w-10"
            >
              <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
              <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
            </svg>
          </div>
        </div>
        <div>
          <div className="text-xl font-medium text-zinc-900 group-hover:text-zinc-800 dark:text-zinc-100 dark:group-hover:text-zinc-200">
            Alert
          </div>
          <div className="flex flex-col">
            <p className="text-zinc-800 group-hover:text-zinc-700 dark:text-zinc-200 dark:group-hover:text-zinc-300">
              You have a new message!
            </p>
            <div className="mt-2 flex space-x-2 hidden group-hover:block">
              <button className="rounded-full border border-blue-200 px-4 py-1 text-sm font-semibold text-blue-500 bg-transparent hover:border-transparent hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Reply
              </button>
              <button className="rounded-full border border-blue-200 px-4 py-1 text-sm font-semibold text-blue-500 bg-transparent hover:border-transparent hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Mark as read
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
