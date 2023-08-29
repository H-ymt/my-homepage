type Props = {
  children: string;
  eng: string;
};

export default function SectionTitle({ children, eng }: Props) {
  return (
    <div className="text-center">
      <h2 className="inline-flex flex-col pb-6 lg:pb-14 text-3xl lg:text-4xl">
        {children}
        <span className="font-medium text-xs lg:text-sm text-center text-mutedBlack dark:text-mutedGray">
          {eng}
        </span>
      </h2>
    </div>
  );
}
