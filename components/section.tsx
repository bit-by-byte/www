interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

export default function Section({ title, id, children }: SectionProps) {
  return (
    <section id={id} className="p-12 flex flex-col gap-5">
      <h1 className="font-bold text-5xl">{title}</h1>
      {children}
    </section>
  );
}
