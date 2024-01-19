export default function Navigation({ prevHandler, nextHandler }) {
  return (
    <div className="mt-8 flex justify-end gap-x-2">
      {prevHandler && (
        <button
          className="py-2 px-8 border bg-slate-50 border-gray-600 rounded-md"
          onClick={prevHandler}
        >
          Previous
        </button>
      )}
      {nextHandler && (
        <button
          className="py-2 px-8 border bg-slate-50 border-gray-600 rounded-md"
          onClick={nextHandler}
        >
          Next
        </button>
      )}
    </div>
  );
}
