"use client";
import Link from "next/link";
import { Pagination } from "@nextui-org/pagination";
import { useState } from "react";
import { useRouter } from "next/navigation";
export function PaginationFuntion({ pagination }) {
  const { page, pageCount, total, pageSize } = pagination;
  const [algo, setalgo] = useState(page);

  const ifFirstPage = page === 1;
  const isLastPage = page === pageCount;
  const nextPage = page + 1;
  const prevPage = page - 1;
  const prevPageUrl = ifFirstPage ? "#" : `/products/?page=${prevPage}`;
  const nextPageUrl = isLastPage ? "#" : `/products/?page=${nextPage}`;
  const router = useRouter();
  const handlePageChange = (event) => {
    router.push(`/products/?page=${event}`);
  };
  return (
    <div className="flex flex-row items-center justify-center min-w-full ">
        <div className="gap-2 mb-4 ml-10 ">
          <Pagination
            total={pageCount}
            color="secondary"
            page={page}
            onChange={handlePageChange}
            showShadow
            showControls
          />
        </div>

    </div>
  );
}
{/* bottom-10 right-11 md:left-[4rem] */}