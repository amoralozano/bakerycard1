import Image from "next/image";
import itembakery1 from "./images/itembakery1.png";
import { Inter, Merriweather_Sans, Handlee } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const merri = Merriweather_Sans({ subsets: ["latin"] });
const handlee = Handlee({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[330px] h-[500px] bg-white mt-[150px] rounded-[20px] shadow-lg shadow-black">
        <div className="w-full h-[55%] bg-pink-500 rounded-t-[20px]">
          <Image
            src={itembakery1}
            alt="cardimage"
            className="w-full h-full rounded-t-[20px]"
          />
        </div>
        <div className="w-full h-[45%] bg-white rounded-b-[20px]">
          <div className="w-full h-[40px] bg-white mt-[10px]">
            <h1
              className={`${merri.className} text-left ml-[35px] font-bold text-[27px] text-gray-700`}
            >
              Potato Donuts
            </h1>
          </div>
          <div className="w-[full] h-[40px] mt-[5px] flex items-center bg-white justify-left">
            <div className="bg-black text-pink-300 w-[25%] h-[25px] text-[14px] flex items-center justify-center rounded-full ml-[30px]">
              Chocolate
            </div>
            <div className="bg-black text-pink-300 w-[25%] h-[25px] text-[14px] flex items-center justify-center rounded-full ml-[5px]">
              Vanilla
            </div>
            <div className="bg-black text-pink-300 w-[25%] h-[25px] text-[14px] flex items-center justify-center rounded-full ml-[5px]">
              Coco
            </div>
          </div>
          <div className="w-full h-[70px] mt-[05px] bg-white  text-left">
            <p className={`${handlee.className} text-[17px] w-[85%] ml-[30px]`}>
              This delecious dessert will go with any meal. Made with rich
              chocolate and vanilla glazing all for a mouth full.
            </p>
          </div>
          <div className="w-full h-[50px] mt-[10px] flex items-center justify-center">
            <div className="w-[50%] h-full flex items-center justify-center">
              <button
                className={`${merri.className} w-[150px] h-[40px] bg-black shadow-sm shadow-black rounded-lg text-white flex items-center justify-center font-bold ml-[30px]`}
              >
                Order
              </button>
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
              <p className="text-[22px] font-bold invisible">$12.99</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
