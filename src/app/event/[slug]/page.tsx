import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: EventoEvent = await response.json();

  return (
    <main>
      <section
        className="z-0 relative overflow-hidden
      flex items-center justify-center py-14 md:py20"
      >
        <Image
          className="object-cover blur-3xl "
          src={event.imageUrl}
          alt="Event background image"
          quality={50}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
        />

        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-x-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            height={200}
            width={300}
            className="rounded-xl object-cover border-2 border-white/50"
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button
              className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto 
              w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2
              state-effects"
            >
              Get Tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section title="About this event" subtext={event.description} />

        <Section title="Location" subtext={event.location} />
      </div>
    </main>
  );
}

type SectionProps = {
  title: string;
  subtext: string;
};
function Section({ title, subtext }: SectionProps) {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl mb-8">{title}</h2>
        <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
          {subtext}
        </p>
      </section>
    </>
  );
}
