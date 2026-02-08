type Props = {
  title: string
  children: React.ReactNode
}

export default function PageSection({ title, children }: Props) {
  return (
    <section className="py-20 border-b border-dark-700">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
