import { ListProductUI } from "@/app/types/schema";
import React from "react";
import ProductCard from "../ProductCard";

type Props = {
  input: ListProductUI;
};

const ModuleListProductUI = ({ input }: Props) => {
  return (
    <section className='module module--list-product-ui'>
      <div className='inner'>
        <div className='grid md:grid-cols-4 gap-md'>
          {input.items?.map((item, i) => (
            <ProductCard input={item} key={i} />
          ))}
        </div>
      </div>
      {/* <pre>{JSON.stringify(input.items, null, 2)}</pre> */}
    </section>
  );
};

export default ModuleListProductUI;
