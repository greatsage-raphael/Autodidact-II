type Props = {
    content: any;
  };

export default function Subject({ children }: React.PropsWithChildren<Props>) {
    return (
      <h3 className="text-2xl font-bold leading-7 text-blue-300 sm:truncate sm:text-3xl sm:tracking-tight">{children}</h3>
    )
  }
