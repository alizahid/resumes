import {
  LinkedinLogo,
  MapPin,
  DeviceMobileCamera,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import { clsx } from "clsx";

export function Omar() {
  return (
    <div>
      <div className="page">
        <div className="flex justify-between gap-4">
          <h1 className="text-4xl font-bold">Omar Zahid</h1>

          <div className="items-start flex flex-col gap-2">
            {contact.map((item, index) => (
              <a
                className="flex items-center gap-2"
                key={index}
                href={item.href}
              >
                <item.Icon
                  className={clsx("size-5", item.className)}
                  weight="duotone"
                />

                <span className="text-sm">{item.content}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl text-cyan11">Profile</h2>

            <p className="text-sm">
              I am a Senior (final year student) at Ozyegin University,
              currently doing my undergraduate in Business Administration with a
              specialization in Marketing. I recently completed my Erasmus+
              exchange semester abroad in the Netherlands at Maastricht
              University School of Business and Economics.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl text-tomato11">Experience</h2>

            <div className="grid grid-cols-2 gap-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "flex flex-col gap-2 relative",
                    item.className
                  )}
                >
                  <div className="text-xs tabular-nums bg-tomato3 font-medium text-tomato12 leading-none p-1 rounded-md absolute top-0 right-0">
                    {item.date}
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-semibold text-tomato12">
                      {item.position}
                    </h3>

                    {item.company ? (
                      <p className="font-semibold text-tomato12">
                        {item.company}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-1">
                    {item.description.map((line, index) => (
                      <p className="text-sm" key={index}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl text-jade11">Education</h2>

            <div className="grid grid-cols-2 gap-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "flex relative flex-col gap-2",
                    item.className
                  )}
                >
                  <div className="absolute items-center top-0 right-0 flex gap-2">
                    <img
                      className="size-5"
                      src={`https://willa.github.io/circle-flags/flags/${item.flag}.svg`}
                    />

                    <div className="text-xs tabular-nums bg-jade3 font-medium text-jade12 leading-none p-1 rounded-md">
                      {item.date}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-semibold text-jade12">{item.degree}</h3>

                    <p className="font-semibold text-jade12">{item.school}</p>
                  </div>

                  {item.description ? (
                    <div className="text-sm">{item.description}</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl text-violet11">Skills</h2>

            <div className="flex gap-2 items-start flex-wrap">
              {skills.map((item, index) => (
                <div
                  className={clsx(
                    "text-sm font-medium leading-tight px-2 py-1 rounded-md",
                    item.className
                  )}
                  key={index}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xl text-tomato11">Awards</h2>

              <div className="flex gap-2 flex-wrap">
                {awards.map((item, index) => (
                  <div className="flex items-center gap-4" key={index}>
                    <img
                      className="size-5"
                      src={`https://willa.github.io/circle-flags/flags/${item.flag}.svg`}
                    />

                    <div className="flex-1">
                      <div className="font-semibold">{item.name}</div>

                      <div className="text-sm">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xl text-jade11">
                Volunteering
              </h2>

              <div className="flex gap-2 flex-wrap">
                {volunteering.map((item, index) => (
                  <div className="flex items-center gap-4" key={index}>
                    <img
                      className="size-5"
                      src={`https://willa.github.io/circle-flags/flags/${item.flag}.svg`}
                    />

                    <div className="flex-1">
                      <div className="font-semibold">{item.organization}</div>

                      <div className="text-sm">{item.position}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const contact = [
  {
    className: "fill-violet11 tabular-nums",
    Icon: DeviceMobileCamera,
    content: "+90 552 853 51 64",
    href: "tel:+905528535164",
  },
  {
    className: "fill-tomato11",
    Icon: EnvelopeSimple,
    content: "omarzahid2@gmail.com",
    href: "mailto:omarzahid2@gmail.com",
  },
  {
    className: "fill-jade11",
    Icon: MapPin,
    content: "Istanbul, Turkey",
  },
  {
    className: "fill-cyan11",
    Icon: LinkedinLogo,
    content: "omarzah1d",
    href: "https://www.linkedin.com/in/omarzah1d/",
  },
];

const experience = [
  {
    position: "Digital Marketing Intern",
    company: "Integral Systems",
    date: "Sep → Dec 2023",
    description: [
      "A high-tech smart solutions firm based in Islamabad, Pakistan.",
      "My tasks included: blog writing, content creation, social media planning & management, market research.",
    ],
  },
  {
    position: "1:1 Accounting Tutor",
    date: "2021 → 2023",
    description: [
      "Significantly improved the student's understanding and grades in the course.",
      "Utilized tailored teaching methods and study plans to simplify complex concepts and enhance comprehension.",
    ],
  },
];

const education = [
  {
    school: "Maastricht University",
    degree: "BBA",
    description:
      "Bachelors in Business Administration, major in Marketing. Erasmus+ exchange semester.",
    date: "2023 → 2024",
    flag: "nl",
  },
  {
    school: "Ozyegin University",
    degree: "BBA",
    description:
      "Major in Marketing. CGPA 3.65 — ranked 12th in the BBA program, 28th in the Faculty of Business.",
    date: "2021 → 2025",
    flag: "tr",
  },
  {
    school: "Roots IVY International School",
    degree: "A Levels",
    date: "2019 → 2021",
    flag: "pk",
  },
  {
    school: "DHA Creek School System",
    degree: "Primary → O Levels",
    date: "2008 → 2019",
    flag: "pk",
  },
];

const skills = [
  {
    className: "bg-plum3 text-plum12",
    name: "English",
  },
  {
    className: "bg-plum3 text-plum12",
    name: "Turkish",
  },
  {
    className: "bg-plum3 text-plum12",
    name: "Urdu",
  },
  {
    className: "bg-cyan3 text-cyan12",
    name: "Microsoft Office",
  },
  {
    className: "bg-cyan3 text-cyan12",
    name: "SPSS",
  },
  {
    className: "bg-cyan3 text-cyan12",
    name: "Canva",
  },
  {
    className: "bg-cyan3 text-cyan12",
    name: "Notion",
  },
  {
    className: "bg-jade3 text-jade12",
    name: "Microsoft SQL",
  },
  {
    className: "bg-jade3 text-jade12",
    name: "Python",
  },
  {
    className: "bg-tomato3 text-tomato12",
    name: "Team management",
  },
  {
    className: "bg-tomato3 text-tomato12",
    name: "Leadership",
  },
  {
    className: "bg-tomato3 text-tomato12",
    name: "Communication",
  },
  {
    className: "bg-violet3 text-violet12",
    name: "Black-Scholes",
  },
  {
    className: "bg-violet3 text-violet12",
    name: "CAPM",
  },
  {
    className: "bg-violet3 text-violet12",
    name: "Statistical models",
  },
  {
    className: "bg-violet3 text-violet12",
    name: "Linear programming",
  },
  {
    className: "bg-violet3 text-violet12",
    name: "Financial accounting",
  },
  {
    className: "bg-violet3 text-violet12",
    name: "Costing",
  },
  {
    className: "bg-violet3 text-violet12",
    name: "Budgeting",
  },
];

const awards = [
  {
    name: "High Honors list",
    description: "Faculty of Business, Ozyegin University",
    flag: "tr",
  },
  {
    name: "Erasmus+ grantee",
    description: "European Commission",
    flag: "eu",
  },
  {
    name: "High achiever, gold medalist",
    description: "Roots IVY International Schools",
    flag: "pk",
  },
];

const volunteering = [
  {
    organization: "OzU Quest",
    position: "Founding president",
    flag: "tr",
  },
  {
    organization: "Psychological Well-being Society",
    position: "Founding member, vice president",
    flag: "pk",
  },
  {
    organization: "Literary Society",
    position: "Vice president",
    flag: "pk",
  },
];
