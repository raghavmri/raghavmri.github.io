import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function LanguagesKnown() {
  const languages = [
    {
      name: "Tamil",
      proficiency: "Native",
      icon: "/language-icons/tamil.png",
      alt: "India flag icon",
    },
    {
      name: "Saurashtra",
      proficiency: "Native",
      icon: "/language-icons/saurashtra.png",
      alt: "Language icon",
    },
    {
      name: "English",
      proficiency: "Advanced",
      icon: "/language-icons/english.png",
      alt: "UK flag icon",
    },
    {
      name: "French",
      proficiency: "Learning",
      icon: "/language-icons/french.png",
      alt: "France flag icon",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1e3a8a] text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Languages Known
            </h2>
            <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A list of languages I speak and my proficiency level in each.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 w-full max-w-xs mx-auto"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={lang.icon || "/placeholder.svg"}
                  width={32}
                  height={32}
                  alt={lang.alt}
                  className="rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold">{lang.name}</h3>
              </div>
              <Badge variant="secondary" className="text-sm px-2 py-1">
                {lang.proficiency}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
