type Props = {
  children: string;
  sub: string;
};

export default function SectionTitle({ children, sub }: Props) {
  return (
    <div className="text-center">
      <h2 className="inline-flex flex-col pb-6 text-3xl lg:pb-14 lg:text-4xl">
        {children}
        <span className="text-center text-xs font-medium text-muted lg:text-sm">
          {sub}
        </span>
      </h2>
    </div>
  );
}
