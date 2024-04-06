export default function Products({ 
    params, 
}: {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    return <h1>Review number {params.reviewId} for product number {params.productId} </h1>;
  }