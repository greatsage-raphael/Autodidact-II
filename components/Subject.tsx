
export default function Subject(props: { children: React.ReactNode }) {
    return (
      <h3 className="text-2xl font-bold leading-7 text-black-300 sm:truncate sm:text-3xl sm:tracking-tight">{props.children}</h3>
    )
  }
