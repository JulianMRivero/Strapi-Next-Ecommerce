import useStore from "@/store/store";
import { getImage } from "../../../services/getProducts";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Link from "next/link";
import Image from "next/image";
const RenderProducts = () => {
  const { products, filterProducts,cart, addToCart, deleteToCart } = useStore();
  const filteredProducts = filterProducts(products);
  const checkProduct = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <>
      {filteredProducts.length == 0 ? (
      
          <span>NO HAY PRODUCTOS EN ESA CATEGORIA</span>
       
      ) : null}
        <div className="grid grid-cols-4 gap-10 p-10 ml-[12rem]">
      {/* {filteredProducts.map(({ attributes, id }) => (
        <Card
          className="py-4 md:h-[30rem] min-w-[20rem] md:w-96 flex justify-center items-center"
          key={id}
          isPressable
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start justify-center">
            <h4 className="font-bold text-large w-full h-14">
              {attributes.title}
            </h4>
            <p className="uppercase font-semibold text-xl mt-3">
              ${attributes.price}
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex justify-center items-center">
            <Link href={`/products/${id}`}>
              <Image
                className="object-cover rounded-xl"
                src={getImage({ attributes })}
                alt={attributes.title}
                width={230}
                height={230}
              />
            </Link>
          </CardBody>
        </Card>
      ))} */}
       {filteredProducts.map((prod, id) =>{ 
        const isProductInCart = checkProduct(prod)
        return(
        <Card
          className="py-4 md:h-[30rem] min-w-[20rem] md:w-96 flex justify-center items-center"
          key={id}
          isPressable
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start justify-center">
            <h4 className="font-bold text-large w-full h-14">
              {prod.title}
            </h4>
            <p className="uppercase font-semibold text-xl mt-3">
              ${prod.price}
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex justify-center items-center">
            <Link href={`/products/${id}`}>
              <Image
                className="object-cover rounded-xl"
                src={prod.images[0]}
                alt={prod.title}
                width={230}
                height={230}
              />
            </Link>
          </CardBody>
            <div>
                <button
                  style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
                  onClick={() =>
                    isProductInCart ? deleteToCart(prod) : addToCart(prod)
                  }
                >
                  {isProductInCart ? <span>add</span> :<span>not</span> }
                </button>
              </div>
        </Card>
      )})}
      </div>
    </>
  );
};

export default RenderProducts;
