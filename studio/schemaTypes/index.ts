import home from './singletons/home'
// import pageModulaire from './documents/pageModulaire'
import tag from './documents/tag'
import infos from './singletons/infos'
import settings from './singletons/settings'
import product from './shop/product'
import publisher from './documents/publisher'
import pageModulaire from './documents/pageModulaire'
import catalog from './singletons/catalog'

import blockContent from './objects/blockContent'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import menuItem from './objects/menuItem'
import seo from './objects/seo'
import figure from './objects/figure'
import keyVal from './objects/keyVal'
import cardImageText from './objects/cardImageText'

import variant from './shop/variant'

import imageUI from './objects/modules/imageUI'
import textUI from './objects/modules/textUI'
import textImageUI from './objects/modules/textImageUI'
import modulesGroup from './objects/modules/modulesGroup'
import heroUI from './objects/modules/heroUI'
import textsUI from './objects/modules/textsUI'
import contactsUI from './objects/modules/contactsUI'
import listCardImageTextUI from './objects/modules/listCardImageTextUI'
import marqueeUI from './objects/modules/marqueeUI'
import splitImageTextUI from './objects/modules/splitImageTextUI'
import sliderUI from './objects/modules/sliderUI'
import calloutUI from './objects/modules/calloutUI'
// import listLieuUI from './objects/modules/listLieuUI'
// import listStudioUI from './objects/modules/listStudioUI'
import listLModulaireUI from './objects/modules/listLModulaireUI'
import heroSplitScrollUI from './objects/modules/heroSplitScrollUI'
import heroSplitUI from './objects/modules/heroSplitUI'
import listPageUI from './objects/modules/listPageUI'
import sliderCardImageTextUI from './objects/modules/sliderCardImageTextUI'
import imagesUI from './objects/modules/imagesUI'
import logosUI from './objects/modules/logosUI'

export const schemaTypes = [
  home,
  pageModulaire,
  infos,
  settings,
  tag,
  product,
  publisher,
  catalog,

  blockContent,
  linkExternal,
  linkInternal,
  menuItem,
  seo,
  figure,
  keyVal,
  variant,
  cardImageText,

  modulesGroup,
  imageUI,
  textUI,
  textsUI,
  textImageUI,
  imagesUI,
  heroUI,
  logosUI,
  contactsUI,
  listCardImageTextUI,
  // listLieuUI,
  // listStudioUI,
  listLModulaireUI,
  listPageUI,
  marqueeUI,
  splitImageTextUI,
  sliderUI,
  calloutUI,
  heroSplitScrollUI,
  heroSplitUI,
  sliderCardImageTextUI,
]
export default schemaTypes
