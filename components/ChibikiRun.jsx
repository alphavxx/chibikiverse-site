/* eslint-disable react/no-unescaped-entities */
import { BsController } from "react-icons/bs";
export default function ChibikiRun() {
  return (
    <div className="hidden lg:grid place-content-center ">
      <h1 className="text-3xl text-center font-black uppercase italic mb-6 bg-shine">
        Play Chibiki Run
      </h1>

      <div className="h-[600px] overflow-hidden">
        <iframe
          src="https://chibiki-run-v1.netlify.app/"
          height="650"
          width="960"
          scrolling="no"
        />
      </div>

      <div className="mt-2 text-gray-400 w-full flex justify-between items-end	">
        <p className="inline">
          <BsController className="inline mr-1 -translate-y-[2px]" /> CONTROLS :{" "}
           "<span className="font-bold">SPACE BAR</span>" for Jump , Long Press "<span className="font-bold">SPACE BAR</span>" for longer Jump.
        </p>

        <span className="text-sm italic"> Play Chibiki Run v0.1</span>
      </div>
    </div>
  );
}
