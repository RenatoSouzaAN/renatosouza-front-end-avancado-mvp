import Image from "next/image";
import Link from "next/link";

import QuantityButtons from "@/components/QuantityButtons";

import { DeleteOutline, OpenInBrowser } from "@mui/icons-material";

const ProductInCart = ({ product, onRemove, onUpdateQuantity }) => {
    return (
        <div className="flex flex-row items-center rounded-md border shadow-md transform motion-safe:hover:scale-[1.02] transition duration-300">
            <Link href={`/products/${product.id}`}>
                <div className="w-48 h-48 bg-gray-100 flex items-center justify-center relative">
                    <div className="absolute top-2 right-2 z-10">
                        <OpenInBrowser className="text-primary" />
                    </div>
                    <div className="w-full h-full flex items-center justify-center border-2 border-gray-200">
                        <Image
                            src={product.images[0]}
                            alt={product.title}
                            layout="fill"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </Link>

            <div className="flex flex-1 flex-row p-4 text-primary items-center justify-between">
                <div className="flex flex-col">
                    <h3 className="text-3xl mb-2">{product.title}</h3>

                    <div className="flex items-center mb-3">
                        <span className="mr-2">Quantidade: </span>
                        <QuantityButtons
                            currentQuantity={product.quantity}
                            maxQuantity={product.stock}
                            onQuantityChange={onUpdateQuantity}
                            buttonStyles={{
                                decrease:
                                    "text-primary hover:bg-gray-100 rounded-tl-xl rounded-bl-xl flex items-center",
                                increase:
                                    "text-primary hover:bg-gray-100 rounded-tr-xl rounded-br-xl flex items-center",
                            }}
                            inputStyles="text-on-primary bg-primary flex items-center"
                            containerStyles="border rounded-xl bg-background flex items-center"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-start">
                    <p className="text-3xl pl-1">
                        Preço: R${(product.price * product.quantity).toFixed(2)}
                    </p>
                    {product.quantity > 1 && (
                        <p className="text-primary pl-1">
                            Preço unitário: R${product.price.toFixed(2)}
                        </p>
                    )}
                    <button
                        onClick={onRemove}
                        className="flex items-center text-primary mt-2 gap-0"
                    >
                        <DeleteOutline />
                        Remover produto
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInCart;
