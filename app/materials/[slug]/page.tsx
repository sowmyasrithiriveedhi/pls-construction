import Image from "next/image";
import { notFound } from "next/navigation";

const materialsData: any = {
  "column-boxes": {
    title: "Column Boxes",
    description:
      "High-quality reusable column boxes designed for strong and durable column construction.",
    images: [
      "/images/materials/column1.jpg",
      "/images/materials/column2.jpg",
    ],
    features: [
      "Heavy-duty steel construction",
      "Reusable and long-lasting",
      "Accurate column shaping",
      "Easy installation",
    ],
  },

  "cutting-machine": {
    title: "Cutting Machine",
    description:
      "Industrial cutting machine built for precision and efficient material cutting.",
    images: [
      "/images/materials/cutting1.jpg",
      "/images/materials/cutting2.jpg",
    ],
    features: [
      "High-speed performance",
      "Low maintenance",
      "Durable motor system",
    ],
  },

  "pillar-boxes": {
    title: "Pillar Boxes",
    description:
      "Strong and durable pillar boxes used for reinforced construction frameworks.",
    images: [
      "/images/materials/pillar1.jpg",
      "/images/materials/pillar2.jpg",
    ],
    features: [
      "High load capacity",
      "Rust resistant",
      "Long service life",
    ],
  },
};

export default function MaterialPage({
  params,
}: {
  params: { slug: string };
}) {
  const material = materialsData[params.slug];

  if (!material) {
    notFound();
  }

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-slate-900">
          {material.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-slate-600 max-w-3xl">
          {material.description}
        </p>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-8">
          {material.images.map((img: string, index: number) => (
            <div key={index} className="relative h-80 w-full">
              <Image
                src={img}
                alt={material.title}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">
            Key Features
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            {material.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}