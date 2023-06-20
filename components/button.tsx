interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <a
      className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full"
      href={href}
    >
      {children}
    </a>
  );
}
