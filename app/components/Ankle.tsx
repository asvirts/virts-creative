export default function Ankle() {
  return (
    <div className="w-full mx-auto bg-yellow-500">
      <div className="container mx-auto py-16 flex items-center justify-between">
        <div className="flex items-center gap-4 text-start">
          <h2 className="text-4xl text-dark">Portfolio</h2>
          <div className="text-4xl text-yellow-50">View more of my work.</div>
        </div>
        <div>
          <a
            href="https://layers.to/asvirts"
            target="_blank"
            className="mt-8 mx-auto px-6 py-2 text-text-dark rounded-full border border-dark hover:opacity-90 transition-opacity"
          >
            View more &gt;
          </a>
        </div>
      </div>
    </div>
  )
}
