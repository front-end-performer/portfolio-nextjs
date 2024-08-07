import Artist from "@/components/Artists/artist";

export default function Artists() {
  const artists = [
    {
        id: 0,
        name: "Dmitriy Liubashenko",
        slug: "/artist/dmitriy_liubashenko",
        description:
        "Ich heiße Dima und komme aus der Ukraine. Mein bevorzugter Stil ist definitiv Realismus in Black&White, jedoch passe ich mich auch gerne anderen Wünschen an und kreiere für jeden Kunden ein individuelles und einzigartiges Design. Vor dem Termin für das Tätowieren, arrangiere ich gerne einen persönlichen Beratungstermin um alles mit dem Kunden zu besprechen. Ich finde es wichtig sich die Zeit zu nehmen, sich zu treffen und verschiedene Optionen und Möglichkeiten zu diskutieren.",
        image: "/artists/artist_us.jpg",
      },
      {
        id: 0,
        name: "Denis Titarev",
        slug: "/artist/denis_titarev",
        description:
        "Mein Name ist Denis Titarev und ich komme ursprünglich aus der Ukraine. Seid nun 8 Jahren tätowiere ich schon. Meine bevorzugter Stil ist schwarz weißer Realismus, jedoch arbeite ich gerne auch in allen andern Stilen. Freue mich auf euch!",
        image: "/artists/artist_de.jpg",
      },
  ];

  return (
    <div className="flex justify-center max-w-full w-full py-28 px-2 bg-[url('/artists/artist_bg.jpg')] bg-cover bg-no-repeat z-0">
      <div className="flex flex-col gap-y-20 max-w-[1440px] w-full">
        {artists.map((artist) => {
          return (
            <Artist
              name={artist.name}
              image={artist.image}
              description={artist.description}
              slug={artist.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
