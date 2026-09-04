"use client";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import portableTextComponents from "../utils/portableTextComponents";
import { Settings } from "../types/schema";
import { _linkResolver, getScrollingElement } from "../utils/utils";
import Link from "next/link";
import { urlFor } from "../utils/sanity-utils";

type Props = {
  settings: Settings;
};

const Footer = ({ settings }: Props) => {
  // const [perc, setPerc] = useState<number>(0);
  // useEffect(() => {
  //   window.addEventListener("scroll", _handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", _handleScroll);
  //   };
  // }, []);

  // const _handleScroll = (evt: Event) => {
  //   const scroller = getScrollingElement();
  //   if (!scroller) return;

  //   const scrollTop =
  //     (window.pageYOffset || scroller.scrollTop) - (scroller.clientTop || 0);
  //   const scrollHeight = scroller.scrollHeight - window.innerHeight;
  //   const _perc = scrollTop / scrollHeight;
  //   console.log(_perc);
  //   setPerc(_perc);
  // };

  return (
    <footer>
      <nav className='nav-publishers mb-md'>
        <ul className='flex justify-center gap-md md:text-lg'>
          {settings.navPublishers?.map((item, i) => (
            <li key={i}>
              <Link href={_linkResolver(item.link)}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='row'>
        <div className='col-md-4 col-xs-12'>
          <div className='text '>
            {settings.footerText && (
              <PortableText
                value={settings.footerText}
                components={portableTextComponents}
              />
            )}
          </div>
        </div>
        <div className='col-md-4 col-xs-12'>
          {/* <div
            className='image--center  '
            style={
              {
                // "--perc": perc,
              } as React.CSSProperties
            }>
            <Image
              src={`/logo-combo-editions.svg`}
              width={207}
              height={112}
              alt={""}
              sizes='100vw'
            />
          </div> */}
          <div className='logo'>
            {settings?.comboLogo && (
              <Image
                src={urlFor(settings.comboLogo?.asset, 230)}
                width={
                  settings.comboLogo.asset?.metadata?.dimensions.width || 230
                }
                height={
                  settings.comboLogo.asset?.metadata?.dimensions.height || 230
                }
                alt={"Combo Studio settings.comboLogo"}
                sizes='100vw'
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: `${settings.comboLogo.asset?.metadata?.dimensions.width} / ${settings.comboLogo.asset?.metadata?.dimensions.height}`,
                  // objectFit: "cover",
                }}
                blurDataURL={settings.comboLogo.asset?.metadata?.lqip}
                // placeholder='blur'
                // placeholder={logo.asset?.metadata?.lqip}
              />
            )}
          </div>
        </div>
        <div className='col-md-4 col-xs-12'>
          <div className='text  md:text-right  '>
            {settings.footerTextCarteDeVisite && (
              <PortableText
                value={settings.footerTextCarteDeVisite}
                components={portableTextComponents}
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
