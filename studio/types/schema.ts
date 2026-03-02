import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Home
 *
 *
 */
export interface Home extends SanityDocument {
  _type: "home";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Click on generate, Semantic URL based on title (no space no char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Slider — `array`
   *
   *
   */
  slider?: Array<SanityKeyed<Figure>>;

  /**
   * about — `blockContent`
   *
   *
   */
  about?: BlockContent;

  /**
   * products — `array`
   *
   *
   */
  products?: Array<SanityKeyedReference<Product>>;
}

/**
 * Page Modulaire
 *
 *
 */
export interface PageModulaire extends SanityDocument {
  _type: "pageModulaire";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `string`
   *
   * Le nom de la page
   */
  title?: string;

  /**
   * Soustitre — `string`
   *
   * Visible dans les listes page, dans la card (cartouche fond noir)
   */
  subTitle?: string;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Sous menu — `array`
   *
   * basé sur les slugs (ancre) des modules, générer le slug depuis le module, et mettre le slug dans le champs val
   */
  subMenu?: Array<SanityKeyed<KeyVal>>;

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyedReference<Tag>>;

  /**
   * Image clef — `figure`
   *
   * Visible dans les listes page, dans la card (1400px)
   */
  imageCover?: Figure;

  /**
   * Extrait — `string`
   *
   *
   */
  excerpt?: string;

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<ImageUI>
    | SanityKeyed<TextUI>
    | SanityKeyed<TextImageUI>
    | SanityKeyed<TextsUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ImagesUI>
    | SanityKeyed<LogosUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ListPageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;
}

/**
 * Infos
 *
 *
 */
export interface Infos extends SanityDocument {
  _type: "infos";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * ne pas éditer
   */
  slug?: { _type: "slug"; current: string };

  /**
   * modules — `array`
   *
   *
   */
  modules?: Array<SanityKeyed<ModulesGroup>>;

  /**
   * label à propos — `string`
   *
   *
   */
  titleAbout?: string;

  /**
   * Modules À propos — `array`
   *
   * Zone de contenu Modulaire (image, texte, embed)
   */
  modulesAbout?: Array<
    | SanityKeyed<ImageUI>
    | SanityKeyed<TextUI>
    | SanityKeyed<TextImageUI>
    | SanityKeyed<TextsUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ImagesUI>
    | SanityKeyed<LogosUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ListPageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;

  /**
   * label contact — `string`
   *
   *
   */
  titleContact?: string;

  /**
   * ModulesContact — `array`
   *
   * Zone de contenu Modulaire (image, texte, embed)
   */
  modulesContact?: Array<
    | SanityKeyed<ImageUI>
    | SanityKeyed<TextUI>
    | SanityKeyed<TextImageUI>
    | SanityKeyed<TextsUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ImagesUI>
    | SanityKeyed<LogosUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ListPageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;
}

/**
 * Réglages (header, footer, ...)
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: "settings";

  /**
   * Nom du site — `string`
   *
   *
   */
  siteName?: string;

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Naviguation Primary — `array`
   *
   *
   */
  navPrimary?: Array<
    | SanityKeyed<LinkInternal>
    | SanityKeyed<LinkExternal>
    | SanityKeyed<MenuItem>
  >;

  /**
   * Naviguation Publishers — `array`
   *
   *
   */
  navPublishers?: Array<SanityKeyed<LinkInternal>>;

  /**
   * newsletterUrl — `string`
   *
   *
   */
  newsletterUrl?: string;

  /**
   * footerText — `blockContent`
   *
   *
   */
  footerText?: BlockContent;

  /**
   * footerTextCarteDeVisite — `blockContent`
   *
   *
   */
  footerTextCarteDeVisite?: BlockContent;

  /**
   * Page de mentions légales — `linkInternal`
   *
   *
   */
  legalsUrl?: LinkInternal;

  /**
   * Message 404 — `blockContent`
   *
   *
   */
  message404?: BlockContent;

  /**
   * customCss — `text`
   *
   *
   */
  customCss?: string;
}

/**
 * Tag
 *
 *
 */
export interface Tag extends SanityDocument {
  _type: "tag";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Click on generate, Semantic URL based on title (no space no char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };
}

/**
 * product
 *
 *
 */
export interface Product extends SanityDocument {
  _type: "product";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Click on generate, Semantic URL based on title (no space no char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * imageCover — `figure`
   *
   *
   */
  imageCover?: Figure;

  /**
   * images — `array`
   *
   * slider
   */
  images?: Array<SanityKeyed<Figure>>;

  /**
   * publisher — `reference`
   *
   *
   */
  publisher?: SanityReference<Publisher>;

  /**
   * tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyedReference<Tag>>;

  /**
   * SKU — `string`
   *
   * default sku if no variants
   */
  sku?: string;

  /**
   * price — `number`
   *
   *
   */
  price?: number;

  /**
   * Prix barré (optionnel) — `number`
   *
   *
   */
  priceCrossed?: number;

  /**
   * weight — `number`
   *
   *
   */
  weight?: number;

  /**
   * productCategory — `reference`
   *
   *
   */
  productCategory?: SanityReference<Tag>;

  /**
   * description — `blockContent`
   *
   *
   */
  description?: BlockContent;

  /**
   * information — `text`
   *
   *
   */
  information?: string;

  /**
   * contributors — `blockContent`
   *
   *
   */
  contributors?: BlockContent;
}

/**
 * Publisher
 *
 *
 */
export interface Publisher extends SanityDocument {
  _type: "publisher";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Click on generate, Semantic URL based on title (no space no char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (image, texte, embed)
   */
  modules?: Array<
    | SanityKeyed<ImageUI>
    | SanityKeyed<TextUI>
    | SanityKeyed<TextImageUI>
    | SanityKeyed<TextsUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ImagesUI>
    | SanityKeyed<LogosUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ListPageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;
}

export type BlockContent = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<Figure>
>;

export type LinkExternal = {
  _type: "linkExternal";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Link — `string`
   *
   *
   */
  link?: string;
};

export type LinkInternal = {
  _type: "linkInternal";
  /**
   * label — `string`
   *
   *
   */
  label?: string;

  /**
   * link — `reference`
   *
   *
   */
  link?: SanityReference<Home | Product | Publisher | Infos | PageModulaire>;

  /**
   * cta — `boolean`
   *
   * Look Bouton avec outline
   */
  cta?: boolean;
};

export type MenuItem = {
  _type: "menuItem";
  /**
   * link — `linkInternal`
   *
   *
   */
  link?: LinkInternal;

  /**
   * Sub menu — `array`
   *
   *
   */
  subMenu?: Array<SanityKeyed<LinkInternal> | SanityKeyed<LinkExternal>>;
};

export type Seo = {
  _type: "seo";
  /**
   * Meta title — `string`
   *
   *
   */
  metaTitle?: string;

  /**
   * Meta description — `string`
   *
   *
   */
  metaDescription?: string;

  /**
   * Meta image — `image`
   *
   *
   */
  metaImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Figure = {
  _type: "figure";
  /**
   * Image — `image`
   *
   * jpg, 1400px de large, 72dpi
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alt Description — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;
};

export type KeyVal = {
  _type: "keyVal";
  /**
   * Clef — `string`
   *
   *
   */
  key?: string;

  /**
   * Valeur — `blockContent`
   *
   *
   */
  val?: BlockContent;
};

export type Variant = {
  _type: "variant";
  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * sku — `string`
   *
   *
   */
  sku?: string;

  /**
   * price — `number`
   *
   *
   */
  price?: number;

  /**
   * stock — `number`
   *
   *
   */
  stock?: number;

  /**
   * images — `array`
   *
   *
   */
  images?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;

  /**
   * size — `string`
   *
   *
   */
  size?: "XS" | "S" | "M" | "L" | "XL" | "XXL";

  /**
   * color — `string`
   *
   *
   */
  color?: "Red" | "Blue" | "Green" | "Yellow" | "Black" | "White";
};

export type CardImageText = {
  _type: "cardImageText";
  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * Tag — `string`
   *
   *
   */
  tag?: string;

  /**
   * Tag Filter — `reference`
   *
   * Pour créer la nav filter sur la grille de Card Image Text
   */
  tagFilter?: SanityReference<Tag>;

  /**
   * text — `blockContent`
   *
   *
   */
  text?: BlockContent;

  /**
   * image — `figure`
   *
   *
   */
  image?: Figure;
};

export type ModulesGroup = {
  _type: "modulesGroup";
  /**
   * Title — `string`
   *
   * Title
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<
    | SanityKeyed<ImageUI>
    | SanityKeyed<TextUI>
    | SanityKeyed<TextImageUI>
    | SanityKeyed<TextsUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ImagesUI>
    | SanityKeyed<LogosUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ListPageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;
};

export type ImageUI = {
  _type: "imageUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alt Text — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * width — `number`
   *
   * Size in a 12 column grid (1/12, 2/12, ..... 12/12). cf flexboxgrid.com
   */
  width?: number;

  /**
   * Offset — `number`
   *
   * Indent in a 12 column grid (1/12, 2/12, ..... 12/12). cf flexboxgrid.com
   */
  offset?: number;
};

export type TextUI = {
  _type: "textUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * Text — `blockContent`
   *
   *
   */
  text?: BlockContent;

  /**
   * width — `number`
   *
   * Size in a 12 column grid (1/12, 2/12, ..... 12/12). cf flexboxgrid.com
   */
  width?: number;

  /**
   * Offset — `number`
   *
   * Indent in a 12 column grid (1/12, 2/12, ..... 12/12). cf flexboxgrid.com
   */
  offset?: number;

  /**
   * columns — `number`
   *
   * 1 columns text, 2, default 1
   */
  columns?: number;
};

export type TextsUI = {
  _type: "textsUI";
  /**
   * look — `string`
   *
   *
   */
  look?: "default" | "offset";

  /**
   * title — `string`
   *
   * Module titre (visible uniquement dans l'admin)
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<BlockContent>>;

  /**
   * titleCentered — `boolean`
   *
   * Titre centré?
   */
  titleCentered?: boolean;

  /**
   * backgroundImage — `image`
   *
   * Image de fond
   */
  backgroundImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * backgroundColor — `string`
   *
   * Couleur de fond
   */
  backgroundColor?: string;

  /**
   * foregroundColor — `string`
   *
   * Couleur de texte
   */
  foregroundColor?: string;
};

export type TextImageUI = {
  _type: "textImageUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * Text — `blockContent`
   *
   *
   */
  text?: BlockContent;

  /**
   * image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * width — `number`
   *
   * Size in a 12 column grid (1/12, 2/12, ..... 12/12). cf flexboxgrid.com
   */
  width?: number;

  /**
   * Offset — `number`
   *
   * Indent in a 12 column grid (1/12, 2/12, ..... 12/12). cf flexboxgrid.com
   */
  offset?: number;
};

export type ImagesUI = {
  _type: "imagesUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<Figure>>;
};

export type HeroUI = {
  _type: "heroUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * image — `figure`
   *
   *
   */
  image?: Figure;
};

export type LogosUI = {
  _type: "logosUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<Figure>>;

  /**
   * backgroundColor — `string`
   *
   * Couleur de fond
   */
  backgroundColor?: string;

  /**
   * foregroundColor — `string`
   *
   * Couleur de texte
   */
  foregroundColor?: string;
};

export type ContactsUI = {
  _type: "contactsUI";
  /**
   * Titre — `string`
   *
   *
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<BlockContent>>;
};

export type ListCardImageTextUI = {
  _type: "listCardImageTextUI";
  /**
   * Titre — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Click sur generate, ancre servant au sous menu, pour que la page scroll vers cette section
   */
  slug?: { _type: "slug"; current: string };

  /**
   * gridSize — `number`
   *
   * Items par ligne, par défaut 3
   */
  gridSize?: number;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<CardImageText>>;

  /**
   * navTags — `array`
   *
   *
   */
  navTags?: Array<SanityKeyedReference<Tag>>;
};

export type ListLModulaireUI = {
  _type: "listLModulaireUI";
  /**
   * Titre — `string`
   *
   *
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<
    | SanityKeyed<ImageUI>
    | SanityKeyed<TextUI>
    | SanityKeyed<TextImageUI>
    | SanityKeyed<TextsUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ImagesUI>
    | SanityKeyed<LogosUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ListPageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;
};

export type ListPageUI = {
  _type: "listPageUI";
  /**
   * Titre — `string`
   *
   *
   */
  title?: string;

  /**
   * navTags — `array`
   *
   *
   */
  navTags?: Array<SanityKeyedReference<Tag>>;

  /**
   * gridSize — `number`
   *
   * Items par ligne, par défaut 3
   */
  gridSize?: number;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<PageModulaire>>;
};

export type MarqueeUI = {
  _type: "marqueeUI";
  /**
   * text — `string`
   *
   *
   */
  text?: string;

  /**
   * foregroundColor — `string`
   *
   * format hex : #123321
   */
  foregroundColor?: string;

  /**
   * backgroundColor — `string`
   *
   * format hex : #123321
   */
  backgroundColor?: string;
};

export type SplitImageTextUI = {
  _type: "splitImageTextUI";
  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * title — `string`
   *
   * Module title
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Click sur generate, ancre servant au sous menu, pour que la page scroll vers cette section
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Text — `blockContent`
   *
   *
   */
  text?: BlockContent;
};

export type SliderUI = {
  _type: "sliderUI";
  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * images — `array`
   *
   *
   */
  images?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;
};

export type CallOutUI = {
  _type: "callOutUI";
  /**
   * title — `text`
   *
   * Module title
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Click sur generate, ancre servant au sous menu, pour que la page scroll vers cette section
   */
  slug?: { _type: "slug"; current: string };

  /**
   * backgroundImage — `image`
   *
   * Image de fond
   */
  backgroundImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * links — `array`
   *
   *
   */
  links?: Array<SanityKeyed<LinkExternal>>;
};

export type HeroSplitScrollUI = {
  _type: "heroSplitScrollUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * itemsLeft — `array`
   *
   *
   */
  itemsLeft?: Array<SanityKeyed<Figure>>;

  /**
   * itemsRight — `array`
   *
   *
   */
  itemsRight?: Array<SanityKeyed<Figure>>;
};

export type HeroSplitUI = {
  _type: "heroSplitUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * itemsLeft — `figure`
   *
   *
   */
  itemsLeft?: Figure;

  /**
   * itemsRight — `figure`
   *
   *
   */
  itemsRight?: Figure;
};

export type SliderCardImageTextUI = {
  _type: "sliderCardImageTextUI";
  /**
   * Titre — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Click sur generate, ancre servant au sous menu, pour que la page scroll vers cette section
   */
  slug?: { _type: "slug"; current: string };

  /**
   * gridSize — `number`
   *
   * Items par ligne, par défaut 3
   */
  gridSize?: number;

  /**
   * autoplay — `boolean`
   *
   *
   */
  autoplay?: boolean;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<CardImageText>>;
};

export type Documents =
  | Home
  | PageModulaire
  | Infos
  | Settings
  | Tag
  | Product
  | Publisher;
