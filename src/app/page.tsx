import Image from "next/image";
import {IoChevronDown} from "react-icons/io5";

function Header() {
  return (
    <div className={'w-full grid py-2 grid-cols-3 border-b border-b-white/15'}>
      <div className={'flex justify-end items-center pr-8 w-full'}>
        <Image
          src={'/Amplyfy.png'}
          alt={'Amplyfy'}
          width={70}
          height={70}
        />
      </div>
      <div className={'flex justify-center items-center px-8 w-full'}>
        <div className={'px-8 py-3 border-white/15 rounded-full border flex flex-row'}>
          <div className={'mx-6 text-sm font-medium text-white/60 flex justify-center items-center'}>
            <h1>Page</h1>
            <IoChevronDown className={'ml-1'}/>
          </div>
          <div className={'mx-6 text-sm font-medium text-white/60 flex justify-center items-center'}>
            <h1>Page</h1>
          </div>
          <div className={'mx-6 text-sm font-medium text-white/60 flex justify-center items-center'}>
            <h1>Page</h1>
            <IoChevronDown className={'ml-1'}/>
          </div>
          <div className={'mx-6 text-sm font-medium text-white/60 flex justify-center items-center'}>
            <h1>Page</h1>
          </div>
          <div className={'mx-6 text-sm font-medium text-white/60 flex justify-center items-center'}>
            <h1>Page</h1>
          </div>
        </div>
      </div>
      <div className={'flex justify-start items-center w-full pl-8'}>
        <div className={'p-2 border-white/15 rounded-xl border flex flex-row'}>
          <button className={'px-10 text-sm py-1 text-white font-medium rounded-lg bg-[#003B57] bg-gradient-to-b from-[#05445E] to-[#003B57] hover:shadow-none shadow-[inset_0_0_20px_#00bcd4] hover:opacity-50 transition duration-200 cursor-pointer'}>
            CTA
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-start px-24">
      <Header/>


    </div>
  );
}
