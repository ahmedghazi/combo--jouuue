// import { SanityKeyed } from "sanity-codegen";

import {
  CallOutUI,
  ContactsUI,
  HeroSplitScrollUI,
  HeroSplitUI,
  HeroUI,
  ImageUI,
  ListCardImageTextUI,
  // ListLieuUI,
  ListLModulaireUI,
  // ListStudioUI,
  ListPageUI,
  MarqueeUI,
  SanityKeyed,
  // SliderUI,
  SplitImageTextUI,
  TextImageUI,
  TextUI,
  SliderCardImageTextUI,
  TextsUI,
  ImagesUI,
  LogosUI,
  ListProductUI,
} from "./schema";

export interface ModulesList {
  modules: Array<
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
    | SanityKeyed<ListProductUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;
}
