import Link from "next/link";
import Image from "next/image";

export default function Loader() {
    return (
        <div className="bg-stone-300 min-h-screen  flex flex-col space-y-7 items-center text-center justify-center font-bold text-4xl">
                
            
            <div className="flex gap-4">
                <h1 className="bg-purple-100 rounded-full p-1 px-4 flex text-center items-center">Your</h1>
                <h1 className="bg-purple-200 rounded-md py-3 px-2">Content</h1>
            </div>
            <div className="flex flex-row gap-4">
                <h1>is</h1>
                <h1 className="bg-yellow-400 hover:bg-red-600 rounded-sm p-1 px-4 flex text-center items-center">Being</h1>
                <h1>Loading</h1>
            </div>
            <div className="bg-transparent">
                <video
                src={"https://v.ftcdn.net/01/36/49/34/700_F_136493482_3VQ7YB2HxiI54ZNSZpR8SVWJHuas0Xpu_ST.mp4"}
                muted
                autoPlay
                height={150}
                className=" h-auto "
                >
                </video>
            </div>
            
        </div>
    );
}
