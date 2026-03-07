export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-4xl font-extrabold tracking-wide text-black">
        PLS
      </h1>

      <div className="flex flex-col leading-tight text-black">
        <span className="text-sm font-semibold border-b border-black w-fit">
          construction
        </span>
        <span className="text-sm font-semibold">
          materials
        </span>
      </div>
    </div>
  );
}