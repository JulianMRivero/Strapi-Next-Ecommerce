/* eslint-disable @next/next/no-img-element */
'use client';
import useStore from "@/store/store";
import RenderProducts from "../component/RenderProducts/RenderProducts";
import { PaginationFuntion } from "../component/Pagination/pagination";


import { useEffect } from "react";
import Filters from "../component/Filters/Filters";
export default function Products({ searchParams }) {
  const {  pag, getProducts,getFakeProducts  } = useStore();
  const { page } = searchParams;
  useEffect(() => {
    getFakeProducts();
  }, [getFakeProducts, page]);

  return (
    <main className="min-h-screen max-w-full bg-stone-200 ">
     
      <Filters />
     <RenderProducts/>

      <PaginationFuntion pagination={pag} />
    </main>
  );
}