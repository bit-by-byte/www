interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col rounded-xl shadow-xl overflow-hidden border border-gray-200">
        <div className="shadow-md px-5 py-3 font-bold">{title}</div>
        <div className="flex flex-col divide-y divide-gray-200 flex-shrink">
          {children}
        </div>
      </div>
    </div>
  );
}

interface CardSectionProps {
  children: React.ReactNode;
}

Card.Section = function CardSection({ children }: CardSectionProps) {
  return <div className="p-5 text-gray-500">{children}</div>;
};
