import { ListProductUI, SanityKeyedReference, Tag } from "@/app/types/schema";
import React, { useState } from "react";
import ProductCard from "../ProductCard";
import clsx from "clsx";

type Props = {
  input: ListProductUI;
};

const ModuleListProductUI = ({ input }: Props) => {
  const { title, items, navTags } = input;
  const [tag, setTag] = useState<string>("");

  const updateTag = (val: string) => {
    if (!val) return;
    setTag(val === tag ? "" : val);
  };

  // const getIsInTag = (val: string) => {
  //   if (!val) return "";
  //   console.log(val, tag);
  //   return tag !== "" && val === tag ? "is-selected" : "";
  // };

  const getIsInTag = (val: SanityKeyedReference<Tag>[] | undefined) => {
    if (!val) return "";
    const tagsSlug = val.map((el) => el.slug?.current);
    return tag !== "" && tagsSlug.includes(tag) ? "is-selected" : "";
  };

  return (
    <section className='module module--list-product-ui'>
      <div className='inner'>
        {navTags && navTags?.length > 0 && (
          <ul className='flex flex-wrap justify-center gap-md mb-50'>
            {navTags.map((item: SanityKeyedReference<Tag>, i) => (
              <li key={i}>
                <button
                  className={clsx(
                    "text-lg",
                    tag === item.slug?.current && "is-active",
                  )}
                  onClick={() => updateTag(item.slug?.current || "")}>
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        )}

        <div
          className={clsx("grid md:grid-cols-4 gap-md", tag && "is-filtering")}>
          {items?.map((item, i) => (
            <div className={clsx("item", getIsInTag(item.tags))} key={i}>
              <ProductCard input={item} key={i} />
            </div>
          ))}
        </div>
      </div>
      {/* <pre>{JSON.stringify(input.items, null, 2)}</pre> */}
    </section>
  );
};

export default ModuleListProductUI;
