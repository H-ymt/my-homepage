type Props = {
  children: string;
  eng: string;
};

export default function SectionTitle({ children, eng }: Props) {
  return (
    <div className="text-center">
      <h2 className="inline-flex flex-col pb-6 text-3xl lg:text-4xl">
        <span className="font-light text-sm text-left">{eng}</span>
        {children}
      </h2>
    </div>
  );
}
