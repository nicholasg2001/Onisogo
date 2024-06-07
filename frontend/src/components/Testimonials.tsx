import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import catpfp from "@/assets/catpfp.jpg"
import sassydog from "@/assets/sassydog.jpg"
import monkeypfp from "@/assets/monkeypfp.jpg";
import monkeypfpsad from "@/assets/monkeypfpsad.jpg";
import catglasses from "@/assets/catglasses.jpg";
import evildog from "@/assets/evildog.jpg";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: `${catpfp}`,
    name: "Trust me bro",
    userName: "@totallyarealperson",
    comment: "This UI is so much better than the NY Times app! (Template btw)",
  },
  {
    image: `${sassydog}`,
    name: "Joe",
    userName: "@alsoarealperson",
    comment:
      "This website helped me become a polyglot in literally 2 days.",
  },

  {
    image: `${monkeypfp}`,
    name: "Cornelius",
    userName: "@corneliusjones",
    comment:
      "Such a unique idea no ones ever thought to clone NY times games before!",
  },
  {
    image: `${monkeypfpsad}`,
    name: "Nick Gutierrez",
    userName: "@nickgutierrez",
    comment:
      "Play my game plz.",
  },
  {
    image: `${evildog}`,
    name: "D'Coldest Toevadoit",
    userName: "@coldest",
    comment:
      "These games are fun and challenging, too bad I'm just better.",
  },
  {
    image: `${catglasses}`,
    name: "Super fan",
    userName: "@addict",
    comment:
      "I can't stop learning about new languages thanks to this game. I'm too addicted to stop playing and lost my job, but at least I know French. Thanks Nick!",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        What
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Our Players
          {" "}
        </span>
        Are Saying
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        These testimonials are 100% real.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          ),
        )}
      </div>
    </section>
  );
}
