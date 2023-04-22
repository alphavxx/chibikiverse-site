export default function Roadmap() {
  return (
    <div
      className="w-full my-32 p-10  text-center h-fit bg-roadmap-texture bg-center flex flex-col gap-8 items-center"
      id="roadmap"
    >
      <h2 className="uppercase text-xl font-medium">Chibiki Roadmap</h2>
      <p className="text-6xl font-bold max-w-[60rem]">
        Roadmap is being designed but you can take a look at our gitbook for
        now....
      </p>
      <a
        className="block py-3 px-6 w-fit border-2 text-black bg-white rounded-full  hover:scale-110  transition-all active:scale-90 uppercase"
        href="https://chibikiverse.gitbook.io/chibiki-whitepaper/enter-the-chibikiverse/introduction-to-chibikiverse-whitepaper"
      >
        Go To Gitbook
      </a>
    </div>
  );
}
