interface Props {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function InfoSection({
  title,
  description,
  image,
  reverse,
}: Props) {
  return (
    <section className="py-24">
      <div
        className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <img
          src={image}
          alt="Construction"
          className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
        />

        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
             {title}
          </h3>

        <p className="text-gray-200 leading-relaxed text-lg">
            {description}
        </p>
        </div>
      </div>
    </section>
  );
}