export function Statistics() {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "Connections",
      description: "Classic NY Times Connections game, no new rules added.",
    },
    {
      quantity: "Wordle",
      description: "Boring old Wordle.",
    },
    {
      quantity: "LangGuessr",
      description: "You're given a word in a random language and have to figure out which language it came from.",
    },
    {
      quantity: "Total games played",
      description: "TBD",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
