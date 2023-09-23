type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return (
    <div className="w-[calc(100%-56px)] md:w-[calc(100%-100px)] max-w-[640px] mx-auto py-16 md:py-20">
      {children}
    </div>
  );
}
