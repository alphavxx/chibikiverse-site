export default function Goal() {
  const cardStyle =
    "text-4xl font-black p-10 py-20 rounded-lg w-full lg:w-0 lg:flex-1 shadow-2xl ";
  return (
    <>
      <h3 className="uppercase mt-20 mb-10 w-fit mx-auto px-2 rounded-md drop-shadow- text-4xl font-black">
        The Ultimate Goal
      </h3>

      <div className="relative w-4/5 p-10 mx-auto mb-20 bg-goal-bg bg-center rounded-lg text-center">
        <div className="flex justify-around flex-wrap gap-5 lg:gap-36">
          <div className={cardStyle + "bg-[url('/img/welcome-img.png')]"}>
            
            Web 3.0 Games
          </div>
          <div className={cardStyle + "bg-[url('/img/goal-1.png')]"}>
            Phygital NFTs
          </div>
          <div className={cardStyle + "bg-[url('/img/goal-2.png')]"}>Manga</div>
        </div>
      </div>
    </>
  );
}