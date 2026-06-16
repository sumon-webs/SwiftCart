import { Card } from "@heroui/react";
import Image from "next/image";
import { ProductModal } from "./ProductModal";

export default function ProductCard({ product, onOpenModal }) {
  const {  title, price, image, category, rating } = product;
  const handleModal = async (id) => {
    console.log(id);
  };

  return (
    <Card
      // "variant=default" perfectly adapts automatically if HeroUI global themes are configured,
      // or you can use Tailwind dark: modifiers for explicit dark theme custom configurations.
      variant="default"
      className="w-full flex flex-col justify-between overflow-hidden group hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 cursor-pointer"
      onClick={() => onOpenModal(product)}
    >
      {/* Product Image Area */}
      <div className="relative aspect-square w-full p-6 bg-white flex items-center justify-center overflow-hidden border-b border-gray-100 dark:border-zinc-800">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-300 ease-in-out"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 px-2 py-1 rounded z-10">
          {category}
        </span>
      </div>

      {/* Main Header Information */}
      <Card.Header className="p-4 pb-1">
        <Card.Title className="text-sm font-semibold line-clamp-2 text-gray-900 dark:text-zinc-100 min-h-[40px] leading-tight">
          {title}
        </Card.Title>
        <Card.Description className="flex items-center gap-1 mt-2 text-xs text-amber-500 font-medium">
          ⭐ {rating?.rate || 0}{" "}
          <span className="text-gray-400 dark:text-zinc-500 font-normal">
            ({rating?.count})
          </span>
        </Card.Description>
      </Card.Header>

      {/* Pricing & Footer Content */}
      <Card.Content className="p-4 pt-2 mt-auto">
        <div className="flex items-center justify-between">
          <span className="text-lg font-black text-blue-600 dark:text-blue-400">
            ${price.toFixed(2)}
          </span>

          <ProductModal  product={product}/>
        </div>
      </Card.Content>
    </Card>
  );
}
