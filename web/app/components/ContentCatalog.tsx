import React from "react";
import { Catalog, Home, Tag } from "../types/schema";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { _linkResolver } from "../utils/utils";

type Props = {
  input: Catalog;
  tags: Tag[];
};

const ContentCatalog = ({ input, tags }: Props) => {
  const { products } = input;
  return (
    <div className='content-catalog'>
      {products && products.length > 0 && (
        <section className='products p-md '>
          {tags && tags.length > 0 && (
            <nav className='nav-tags mb-md'>
              <ul className=''>
                {tags.map((item, i) => (
                  <li key={item._id}>
                    <Link href={_linkResolver(item)}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className='grid md:grid-cols-4 gap-md'>
            {products.map((item, i) => (
              <ProductCard input={item} key={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ContentCatalog;
