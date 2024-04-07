import { notFound } from "next/navigation"

export default function Products({ 
    params, 
}: {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    if(parseInt(params.reviewId) > 1000){
        notFound();
    }
    return <h1>Review number {params.reviewId} for product number {params.productId} </h1>;
  }