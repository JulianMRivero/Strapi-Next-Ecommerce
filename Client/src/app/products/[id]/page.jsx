import {
  getProductsId,
  getImage,
  getFakeProductsId,
} from "../../../services/getProducts";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
const ProductsId = async ({ params }) => {
  const { id } = params;
  // const { attributes } = await getProductsId({ id });
  const data = await getFakeProductsId({ id });
 
  return (
    <div className="flex flex-col items-center justify-center lg:justify-between min-h-screen bg-purple-950 ">
      {/* <article className="flex  flex-col items-center justify-between gap-5 p-24">
          <h1 className="text-2xl text-blue-500">{attributes.title}</h1>
          <p>{attributes.description}</p>
          <img
                className="object-cover rounded-xl w-[270px]"
                src={getImage({ attributes })}
                alt={attributes.title}
              />
              {attributes.quantity <= 10 ? <Button color="success">
          Hay  {attributes.quantity}
        </Button>  :  <Button color="warning">
          Quedan  {attributes.quantity}
        </Button> }
        </article> */}
      {/* <Card
        isBlurred
        className="border-none bg-white dark:bg-default-100/50  w-[80%] m-10 "
        shadow="sm"
      >
        <CardBody>
          <div className=" lg:flex lg:space-x-10 lg:gap-4 ">
            <div className="flex justify-center items-center">
              <Image
                className="object-contain rounded-xl"
                height={800}
                src={getImage({ attributes })}
                alt={attributes.title}
                width={800}
              />
            </div>

            <div className="flex flex-col gap-5 lg:gap-20 w-full">
              <div className="flex flex-col items-center justify-center lg:justify-between gap-5 w-full">
              <h2 className="font-semibold mt-5  uppercase text-foreground/90 text-3xl text-blue-500">
                {attributes.title}
              </h2>
                <span className="font-bold text-4xl">${attributes.price}</span>
              </div>
              <p className="text-xl font-medium mt-10">
                {attributes.description}  La mayoría de las laptops tienen una pantalla LCD que muestra información visual. Las pantallas pueden variar en tamaño, desde unas pocas pulgadas hasta 17 pulgadas o más, y ofrecen diferentes resoluciones para la visualización de contenido.
              </p>
              <div className="flex flex-col items-center space-y-4 md:flex md:items-center md:justify-center md:flex-row md:gap-10 md:space-y-0 mb-5 mt-10">
                <Button
                  color="secondary"
                  className="w-[15rem] h-[3rem] text-lg"
                >
                  Comprar Ahora
                </Button>
                <Button
                  color="secondary"
                  variant="ghost"
                  className="w-[15rem] h-[3rem] text-lg"
                >
                  Añadir al Carrito
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card> */}
      <Card
        isBlurred
        className="border-none bg-white dark:bg-default-100/50  w-[80%] m-10 "
        shadow="sm"
      >
        <CardBody>
          <div className=" lg:flex lg:space-x-10 lg:gap-4 ">
            <div className="flex justify-center items-center">
              <Image
                className="object-contain rounded-xl"
                height={800}
                src={data.thumbnail}
                alt={data.title}
                width={800}
              />
            </div>

            <div className="flex flex-col gap-5 lg:gap-20 w-full">
              <div className="flex flex-col items-center justify-center lg:justify-between gap-5 w-full">
              <h2 className="font-semibold mt-5  uppercase text-foreground/90 text-3xl text-blue-500">
                {data.title}
              </h2>
                <span className="font-bold text-4xl">${data.price}</span>
              </div>
              <p className="text-xl font-medium mt-10">
                {data.description}  La mayoría de las laptops tienen una pantalla LCD que muestra información visual. Las pantallas pueden variar en tamaño, desde unas pocas pulgadas hasta 17 pulgadas o más, y ofrecen diferentes resoluciones para la visualización de contenido.
              </p>
              <div className="flex flex-col items-center space-y-4 md:flex md:items-center md:justify-center md:flex-row md:gap-10 md:space-y-0 mb-5 mt-10">
                <Button
                  color="secondary"
                  className="w-[15rem] h-[3rem] text-lg"
                >
                  Comprar Ahora
                </Button>
                <Button
                  color="secondary"
                  variant="ghost"
                  className="w-[15rem] h-[3rem] text-lg"
                >
                  Añadir al Carrito
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Link href="/products">
        <Button color="secondary" className="w-[10rem] h-[3rem] text-lg mb-10">
          Volver
        </Button>
      </Link>
    </div>
  );
};
export default ProductsId;
