export default function Container({ children }: { children: React.ReactNode }) {
  return <main className="max-w-[1312px] mx-auto">{children}</main>;
}