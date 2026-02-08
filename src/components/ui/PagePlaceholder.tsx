type Props = {
  title: string
}

export default function PagePlaceholder({ title }: Props) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">
        {title}
      </h1>
    </section>
  )
}
