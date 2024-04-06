export default function Review({ 
    params, 
}: {
    params: {productId: string}
}) {
    return <h1>All reviews for product number {params.productId}</h1>;
  }