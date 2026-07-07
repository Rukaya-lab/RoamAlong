import type { ReactNode } from "react";

const googleFormUrl = "https://forms.gle/N9T2staoXdfUgbtZA";

const trustBadges = [
  "18+ only",
  "Same-gender matching",
  "Public places first",
  "Identity verification planned",
  "UK pilot",
];

const steps = [
  {
    title: "Share your plans",
    text: "Tell us where you are, when you are free, and the kind of local experience you want.",
  },
  {
    title: "Get matched",
    text: "We connect you with a verified local host who fits your preferences.",
  },
  {
    title: "Roam together",
    text: "Meet in a public place, explore safely, and end the session through the platform.",
  },
];

const experiences = [
  "Food and dessert evening",
  "City orientation",
  "Cafés and study spots",
  "Local markets and shopping",
  "Neighbourhood walks",
  "Fun activities and hobbies",
];

const safetyItems = [
  "Same-gender matching",
  "18+ only",
  "Public meeting points",
  "In-app communication planned",
  "Live location/check-ins planned",
  "Ratings and reporting planned",
];

const audiences = [
  "Solo travellers",
  "New students",
  "New residents",
  "Locals who enjoy showing people around",
  "People who want real local experiences without performative energy",
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path
        d="m5 12 4 4L19 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-7 text-graphite sm:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({
  children,
  href = "#interest",
}: {
  children: ReactNode;
  href?: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#c94f36] focus:outline-none focus:ring-4 focus:ring-clay/25"
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

function SecondaryButton({
  children,
  href = "#interest",
}: {
  children: ReactNode;
  href?: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-clay/50 hover:bg-white focus:outline-none focus:ring-4 focus:ring-clay/20"
    >
      {children}
    </a>
  );
}

function App() {
  return (
    <main className="overflow-hidden bg-linen text-ink">
      <section className="relative min-h-[92vh] px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <div className="absolute inset-0 -z-0">
          <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-clay/15 bg-oat/70" />
          <div className="absolute right-0 top-24 h-44 w-44 rounded-full border-[18px] border-moss/15" />
          <div className="absolute bottom-12 left-0 h-52 w-52 rounded-full border-[26px] border-clay/10" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col">
          <nav className="flex items-center justify-between py-3">
            <a href="#" className="flex items-center gap-3 font-semibold">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-paper">
                <SparkIcon />
              </span>
              <span className="text-lg tracking-tight">RoamAlong</span>
            </a>
            <a
              href="#interest"
              className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-sm font-semibold text-graphite transition hover:border-clay/50 hover:text-ink"
            >
              UK pilot
            </a>
          </nav>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:py-24">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-clay/25 bg-white/75 px-4 py-2 text-sm font-semibold text-clay">
                Safety-first local experiences for explorers
              </p>
              <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Explore a city with a verified local - not a scripted tour.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite sm:text-xl">
                RoamAlong helps travellers and newcomers experience real local
                life through safe, same-gender city experiences with trusted local
                hosts.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton>Join the UK pilot</PrimaryButton>
                <SecondaryButton>Become a local host</SecondaryButton>
                <SecondaryButton>Give feedback</SecondaryButton>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="rounded-[2rem] border border-ink/10 bg-paper p-5 shadow-soft">
                <div className="rounded-[1.5rem] bg-oat p-5">
                  <div className="grid gap-4">
                    <div className="rounded-3xl bg-paper p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-clay">
                            Pilot session
                          </p>
                          <p className="mt-1 text-2xl font-semibold">
                            UK city intro
                          </p>
                        </div>
                        <span className="rounded-full bg-moss px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                          Public
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-3xl bg-paper p-5">
                        <p className="text-sm font-semibold text-graphite">
                          Match type
                        </p>
                        <p className="mt-3 text-xl font-semibold">
                          Same-gender
                        </p>
                      </div>
                      <div className="rounded-3xl bg-ink p-5 text-paper">
                        <p className="text-sm font-semibold text-paper/70">
                          Age
                        </p>
                        <p className="mt-3 text-xl font-semibold">18+ only</p>
                      </div>
                    </div>
                    <div className="rounded-3xl bg-[#f8dfcf] p-5">
                      <div className="flex items-center gap-4">
                        <span className="h-12 w-12 rounded-full bg-clay" />
                        <div>
                          <p className="font-semibold">
                            Everyday local plans
                          </p>
                          <p className="mt-1 text-sm leading-6 text-graphite">
                            Cafés, markets, study spots, neighbourhood walks,
                            and first-week city confidence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full bg-oat px-4 py-2 text-sm font-semibold text-graphite"
            >
              <span className="h-2 w-2 rounded-full bg-clay" />
              {badge}
            </span>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
              The gap
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Real city life is hard to find when you are new.
            </h2>
          </div>
          <p className="text-lg leading-8 text-graphite">
            Solo travellers and newcomers often want to explore a city with
            someone who understands everyday local life. Formal tours can feel
            scripted, social apps create the wrong expectations, and random
            online groups can feel unsafe. RoamAlong is designed around a
            clearer promise: practical local experiences, careful matching, and
            public-first meetups.
          </p>
        </div>
      </section>

      <section className="bg-oat px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="How it works" title="Simple, guided, and built for safety." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.5rem] border border-ink/10 bg-paper p-6 shadow-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-clay text-lg font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-graphite">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Example experiences"
            title="Everyday plans that feel local."
          >
            Early sessions are designed around normal city moments, not
            rehearsed scripts.
          </SectionHeading>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <article
                key={experience}
                className="group rounded-[1.5rem] border border-ink/10 bg-paper p-6 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-8 flex h-16 items-end gap-2">
                  <span className="h-10 w-10 rounded-full bg-clay/90" />
                  <span className="h-14 w-8 rounded-full bg-moss/80" />
                  <span className="h-8 w-14 rounded-full bg-[#f2c9a4]" />
                </div>
                <h3 className="text-xl font-semibold">{experience}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-paper sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0b49e]">
              Safety-first
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              The pilot starts with clear boundaries.
            </h2>
            <p className="mt-5 text-lg leading-8 text-paper/72">
              RoamAlong is not a scripted tour service. It
              is being shaped around trust, public settings, and purpose-built
              local hosting.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {safetyItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-4"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-clay text-white">
                  <CheckIcon />
                </span>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Who it is for" title="Built for people entering a city with intention." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((audience) => (
              <article
                key={audience}
                className="rounded-[1.5rem] border border-ink/10 bg-paper p-5"
              >
                <span className="mb-5 block h-3 w-14 rounded-full bg-clay" />
                <h3 className="text-lg font-semibold leading-snug">
                  {audience}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="interest" className="bg-oat px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-ink/10 bg-paper p-8 text-center shadow-soft sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
            Early interest
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Help shape the UK pilot.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-graphite">
            We are collecting early interest from travellers, newcomers, and
            local hosts before launching the first test sessions.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton href={googleFormUrl}>
              Join as a traveller/newcomer
            </PrimaryButton>
            <SecondaryButton href={googleFormUrl}>
              Apply as a local host
            </SecondaryButton>
            <SecondaryButton href={googleFormUrl}>Give feedback</SecondaryButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-paper px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-graphite sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-ink">
            RoamAlong - real city experiences, safely matched.
          </p>
          <p>Pilot concept by Hayati.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
