interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="flex flex-1 flex-col rounded-xl shadow-xl overflow-hidden border border-gray-200">
      <div className="shadow-md px-5 py-3 font-bold">{title}</div>
      <div className="flex flex-col divide-y divide-gray-200">{children}</div>
    </div>
  );
}
