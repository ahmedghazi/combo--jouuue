// import { SanityKeyed } from "sanity-codegen";

import {
  CallOutUI,
  ContactsUI,
  HeroSplitScrollUI,
  HeroSplitUI,
  HeroUI,
  ImageUI,
  ListCardImageTextUI,
  ListLieuUI,
  ListLModulaireUI,
  ListStudioUI,
  ListPageUI,
  MarqueeUI,
  SanityKeyed,
  SliderUI,
  SplitImageTextUI,
  TextImageUI,
  TextUI,
  SliderCardImageTextUI,
  TextsUI,
  ImagesUI,
  LogosUI,
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
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
    // | SanityKeyed<TextUI>
    // | SanityKeyed<TextsUI>
    // | SanityKeyed<TextImageUI>
    // | SanityKeyed<HeroUI>
    // | SanityKeyed<ImagesUI>
    // | SanityKeyed<LogosUI>
    // | SanityKeyed<ContactsUI>
    // | SanityKeyed<ListCardImageTextUI>
    // | SanityKeyed<ListLieuUI>
    // | SanityKeyed<ListStudioUI>
    // | SanityKeyed<ListLModulaireUI>
    // | SanityKeyed<ListPageUI>
    // | SanityKeyed<ImageUI>
    // | SanityKeyed<MarqueeUI>
    // | SanityKeyed<SplitImageTextUI>
    // | SanityKeyed<SliderUI>
    // | SanityKeyed<CallOutUI>
    // | SanityKeyed<HeroSplitScrollUI>
    // | SanityKeyed<HeroSplitUI>
    // | SanityKeyed<SliderCardImageTextUI>
  >;
}
