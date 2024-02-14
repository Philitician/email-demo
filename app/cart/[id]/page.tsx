type CartPageProps = {
  params: {
    id: string;
  };
};

export default function CartPage({ params }: CartPageProps) {
  return <h1>Handlekurv {params.id}</h1>;
}
