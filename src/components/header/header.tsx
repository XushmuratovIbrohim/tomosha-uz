import Nav from "../nav/nav";

export default function Header() {
  return (
    <header className='flex align-middle justify-between w-full border-b border-solid border-dark-600 px-[32px] py-[24px] mb-[16px]'>
      <div className=''>Tomosha TV</div>
      <Nav />
    </header>
  );
}
