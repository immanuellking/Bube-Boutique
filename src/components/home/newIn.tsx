import ProductCard from "../product/productCard";
import { getNewInProducts } from "@/queries/getProducts";

// export const revalidate = 60;

export default async function NewIn() {
  const newInItems = await getNewInProducts();
  // console.log(newInItems)

  return (
    <section className="py-12">
      <div className="w-[90%] lg:w-[70%] mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl">BUBE NEW IN & MUST HAVE!</h1>
        {newInItems.length === 0 ? (
          <div className="w-full h-[40vh] flex items-center justify-center">
            <h4 className="italic text-2xl">
              Couldn't retrieve New In Items 😔
            </h4>
          </div>
        ) : (
          <div className="flex snap-x snap-mandatory sm:grid sm:grid-cols-12 gap-4 overflow-auto">
            {newInItems.map((item, index) => {
              return <ProductCard newInItems={item} key={item._id} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
}
