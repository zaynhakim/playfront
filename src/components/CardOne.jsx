export default function CardOne() {
  return (
    <div className="mx-auto flex h-24 max-w-md rounded-lg border border-sky-500">
      <div className="flex w-24 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-12 w-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
          />
        </svg>
      </div>
      <div className="flex w-64 flex-col border-l border-sky-500">
        <dt className="my-2 ml-2 font-semibold leading-4">
          Perdukunan Post-pesulap Merah
        </dt>
        <dd className="ml-2 text-sm italic leading-4">
          Sabtu, 20 September 2022
        </dd>
        <dd className="ml-2 text-sm">deskripsi panjang</dd>
      </div>
    </div>
  );
}
