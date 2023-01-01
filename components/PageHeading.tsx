export default function PageHeading(props: { children: React.ReactNode }) {
    return (
      <h1 className="text-2xl font-bold leading-7 text-green-300 sm:truncate sm:text-3xl sm:tracking-tight">{children}</h1>
    )
  }

