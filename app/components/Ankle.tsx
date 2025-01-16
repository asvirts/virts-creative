export default function Ankle() {
  return (
    <div className="w-full mx-auto bg-yellow-500 px-4">
      <div className="container mx-auto py-16 flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-4xl text-dark text-center">Portfolio</h2>
          <div className="text-4xl text-yellow-50 text-center">
            View more of my work.
          </div>
        </div>
        <div className="flex items-center justify-center pt-4 lg:pt-0">
          <a
            href="https://layers.to/asvirts"
            target="_blank"
            className="mx-auto px-6 py-2 text-text-dark rounded-full border border-dark hover:opacity-90 transition-opacity"
          >
            View more &gt;
          </a>
        </div>
      </div>
    </div>
  )
}
