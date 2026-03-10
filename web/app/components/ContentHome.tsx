import React from "react";
import { Home, Tag } from "../types/schema";
import Image from "next/image";
import ProductCard from "./ProductCard";
import Slider from "./ui/slick-slider";
import Figure from "./ui/Figure";
import { urlFor } from "../utils/sanity-utils";
import Link from "next/link";
import { _linkResolver } from "../utils/utils";
import { PortableText } from "next-sanity";
import portableTextComponents from "../utils/portableTextComponents";
import Modules from "./modules";

type Props = {
  input: Home;
  tags: Tag[];
};

const ContentHome = ({ input, tags }: Props) => {
  const { slider, about, products, modules } = input;
  return (
    <div className='content-home'>
      {/* {slider && slider.length > 0 && (
        <section className='hero-slider'>
          <Slider settingsOverride={{}}>
            {input.slider &&
              input.slider.length > 0 &&
              input.slider?.map((iten, i) => (
                <div className='slide w-screen bg-black' key={i}>
                  {iten.image && (
                    <Image
                      src={urlFor(iten.image.asset)}
                      width={1440}
                      height={809}
                      alt={""}
                      sizes='100vw'
                      style={{
                        width: "100vw",
                        height: "calc(var(--vh) * 100 - var(--header-h))",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </div>
              ))}

            {input.slider &&
              input.slider.length === 1 &&
              input.slider[0].image && (
                <Image
                  src={urlFor(input.slider[0].image?.asset)}
                  width={1440}
                  height={809}
                  alt={""}
                  sizes='100vw'
                />
              )}
          </Slider>
        </section>
      )}

      {about && (
        <section className='about p-md md:p-lg'>
          <div className='row center-xs'>
            <div className='col-md-8 col-xs-12'>
              <div className='text text-center'>
                <PortableText
                  value={about}
                  components={portableTextComponents}
                />
              </div>
            </div>
          </div>
        </section>
      )}
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
      )} */}

      {modules && <Modules modules={modules} />}
    </div>
  );
};

export default ContentHome;
