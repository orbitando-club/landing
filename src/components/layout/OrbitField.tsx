export function OrbitField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src="/brand/isotipo.png"
        alt=""
        className="orbit-spin absolute -right-24 -top-16 w-[min(85vw,640px)] opacity-[0.28] md:-right-16 md:-top-10"
      />
      <img
        src="/brand/isotipo.png"
        alt=""
        className="orbit-spin-reverse absolute -bottom-28 -left-28 w-[min(70vw,420px)] opacity-[0.2] md:-bottom-20 md:-left-16"
      />
    </div>
  )
}
