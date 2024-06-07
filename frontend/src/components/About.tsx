import meme from "@/assets/meme.gif";
import { Statistics } from "./Statistics";

export function About() {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={meme}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About
                  {" "}
                </span>
                Onisogo
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                My friends and I love to compete against each other in the NY Times games,
                but you can only play 1 game every 24 hours, so I made a platform where we
                can play whenever we want.
                <br/>
                <br/>
               Also my mother is trying to learn Italian, so I internationalized this game in an effort
                to provide her and anyone else learing languages with a fun way to practice their skills.
                <br />
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
}
