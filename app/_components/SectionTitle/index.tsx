type Props = {
  children: string;
  sub: string;
};

export default function SectionTitle({ children, sub }: Props) {
  return (
    <div className="text-center">
      <h2 className="inline-flex flex-col pb-6 lg:pb-14 text-3xl lg:text-4xl">
        {children}
        <span className="font-medium text-xs lg:text-sm text-center text-muted">
          {sub}
        </span>
      </h2>
    </div>
  );
}
