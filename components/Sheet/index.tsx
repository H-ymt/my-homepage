type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return (
    <div className="w-[calc(100%-56px)] md:w-[calc(100%-100px)] mx-auto pb-6 md:pb-20">
      {children}
    </div>
  );
}
