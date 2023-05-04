/* eslint-disable @next/next/no-img-element */
export default function Team() {
  const team = [
    {
      name: "The Kami Chibiki",
      words:
        " A NFT Veteran who has been working on chibikiverse since 2021. A game Dev / Digital artist / CEO and the creator of Chibikiverse ",
      tag: "CEO",
      img: "/img/team-0.jpg",
    },
    {
      name: "The Dev Chibiki",
      words:
        " Unity Wiz who has created three successful games, now working on CHIBKIS - ORIGIN for its smoother gameplay and story. ",
      tag: "CTO",
      img: "/img/team-1.jpg",
    },
    {
      name: "Matty Sensei",
      words:
        " An Energetic Moderator/collab manager who’s currently ruling the Sui Ecosystem by managing successful projects including Chibikiverse. ",
      tag: "Moderator",
      img: "/img/team-2.jpg",
    },
    {
      name: "Vickie Sensei",
      words:
        "Community Growth strategist who have been the part of chibikiverse since the early days helping us nurture the chibiki family.",
      tag: "Moderator",
      img: "/img/team-3.jpg",
    },
    {
      name: "Riddhi chan",
      words:
        " A Wonderful artist who excels in designing tricky game levels joined the chibiki team to bring the dream to life. ",
      tag: "Game Artist",
      img: "/img/team-4.jpg",
    },
  ];
  return (
    <section className="mt-20 mb-44 text-center" id="team">
      <div className="">
        <h2 className="text-4xl uppercase font-black -rotate-3 bg-shine mb-6">
          Team
        </h2>
        <p className="font-bold text-5xl leading-tight">
          Meet the Hard Working Chibikis
        </p>
      </div>
      <div className="container mx-auto mt-20 lg:px-32 flex gap-16 flex-wrap justify-center">
        {team.map((member, i) => (
          <div
            className="bg-blue-950 rounded-xl pb-6 mt-20   w-72 flex flex-col items-center gap-5"
            key={i}
          >
            <img
              src={member.img}
              alt="team"
              className="w-36 rounded-full -mt-20"
            />
            <div className="font-semibold text-lg">
              <h3>{member.tag}</h3>
              <h3>{member.name}</h3>
            </div>
            <p className="block mx-6">{member.words}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
