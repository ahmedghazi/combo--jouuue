export const seo = `
	...,
	metaImage{
		asset->
	}
`;

export const blockContent = `
	...,
	_type == "figures" =>{
		items[]{
			...,
			image{
				asset->
			}
		}
	},
	markDefs[] {
		...,
		_type == "linkInternal" => {
			...,
			reference->,
		}
	}
`;

export const figure = `
	...,
	image{
		asset->
	},
	caption,
	link->{
		_type,
		slug
	}
`;

export const productCard = `
	_id,
  _type,
  slug,
  imageCover{
    ...,
    image{
			asset->
		}
  },
  title,
	price,
	publisher->{
    title
  }
`;

export const moduleText = `
	_type == 'textUI' => {
		...,
		text[]{
			${blockContent}
		}
	}
`;

export const moduleImage = `
	_type == 'imageUI' => {
		...,
		image {
			...,
			asset->
		}
	}
`;

export const moduleTextImage = `
	_type == 'textImageUI' => {
		text[]{
			${blockContent}
		},
		image {
			...,
			asset->
		}
	}
`;

export const moduleFeaturedProducts = `
	_type == 'moduleFeaturedProducts' => {
		...,
		items[]-> {
			${productCard}
		}
	}
`;

export const moduleProducts = `
	_type == 'moduleProducts' => {
		...,
		items[]-> {
			${productCard}
		}
	}
`;

export const moduleEmbed = `
	_type == 'moduleEmbed' => {
		...,
		embed{
			...,
			thumbnail {
				...,
				asset->
			}
		}
	}
`;

export const content = `
	...,
	items[]{
		...,
		image{
			asset->
		},

	}
`;

// export const textUI = `
// 	_type == 'textUI' => {
// 		...,
// 		text{
// 			${blockContent}
// 		},
// 		backgroundImage{
// 			...,
// 			asset->
// 		}
// 	}
// `;
export const textsUI = `
	_type == 'textsUI' => {
		...,
		backgroundImage{
			...,
			asset->
		},
    items[]{
      ${blockContent}
    }
	}
`;

// export const textImageUI = `
// 	_type == 'textImageUI' => {
// 		...,
// 		text{
// 			${blockContent}
// 		},
// 		image{
// 			${figure}
// 		}
// 	}
// `;

export const heroUI = `
	_type == 'heroUI' => {
		...,
		image {
			...,
			asset->
		}
	}
`;
export const imagesUI = `
  _type == 'imagesUI' => {
    ...,
    items[]{
      ...,
      image{
        ...,
        asset->
      }
    }
  }
`;

export const logosUI = `
  _type == 'logosUI' => {
    ...,
    items[]{
      ...,
      image{
        ...,
        asset->
      }
    }
  }
`;

export const contactsUI = `
	_type == 'contactsUI' => {
		...,
		items[] {
			...,
		}
	}
`;

export const listStudioUI = `
	_type == 'listStudioUI' => {
		...,
		items[]-> {
			...,
			sliderHero[]{
				image {
					...,
					asset->
				}
			}
			// modules[]{
			// 	...
  		// },
		}
	}
`;

export const listLModulaireUI = `
	_type == 'listLModulaireUI' => {
		...,
		items[] {
			...,
			backgroundImage{
				...,
				asset->
			}
		}
	}
`;
export const listLPageUI = `
	_type == 'listPageUI' => {
		...,
		navTags[]->,
		items[]-> {
			...,
			imageCover{
				...,
				asset->
			},
			tags[]->
		}
	}
`;

export const listLProductUI = `
	_type == 'listProductUI' => {
		...,
		items[]-> {
			${productCard}
		}
	}
`;

export const callOutUI = `
	_type == 'callOutUI' => {
		...,
		backgroundImage{
			...,
			asset->
		}
	}
`;

export const splitImageTextUI = `
	_type == 'splitImageTextUI' => {
		...,
		image{
			...,
			asset->
		},
		text{
			${blockContent}
		}
	}
`;

export const heroSplitScrollUI = `
	_type == 'heroSplitScrollUI' => {
		...,
		itemsLeft[]{
			...,
			image{
				asset->
			}
		},
		itemsRight[]{
			...,
			image{
				asset->
			}
		}
	}
`;

export const heroSplitUI = `
	_type == 'heroSplitUI' => {
		...,
		itemsLeft{
			...,
			image{
				asset->
			}
		},
		itemsRight{
			...,
			image{
				asset->
			}
		}
	}
`;

export const listCardImageTextUI = `
	_type == 'listCardImageTextUI' => {
		...,
		items[] {
			...,
			image{
				${figure}
			},
			text{
				${blockContent}
			},
      tagsFilter[]->{
        title,
        slug
      }
		},
    navTags[]->{
      title,
      slug
    }
	}
	`;

export const sliderCardImageTextUI = `
	_type == 'sliderCardImageTextUI' => {
		...,
		items[] {
			...,
			image{
				...,
				asset->
			},
			text{
				${blockContent}
			},
		}
	}
	`;

// export const listLieuUI = `
// _type == 'listLieuUI' => {
// 	...,
// 	items[]-> {
// 		...,
// 		modules[]{
// 			...,
// 			${heroUI},
//       ${imagesUI},
//       ${logosUI},
// 			${textUI},
// 			${textsUI},
// 			${textImageUI},
// 			${contactsUI},
// 			${listStudioUI},
// 			${listLPageUI},
// 			${callOutUI},
// 			${listLModulaireUI},
// 			${splitImageTextUI},
// 			${heroSplitScrollUI},
// 			${listCardImageTextUI},
// 			${heroSplitUI},
// 			${sliderCardImageTextUI}
// 		},
// 	}
// }
// `;

export const modules = `
	...,
	${heroUI},
  ${imagesUI},
  ${logosUI},
	${moduleText},
	${moduleImage},
	${moduleTextImage},
	${textsUI},
	${contactsUI},
	${listStudioUI},
	${listLPageUI},
	${listLProductUI},
	${callOutUI},
	${listLModulaireUI},
	${splitImageTextUI},
	${heroSplitScrollUI},
	${listCardImageTextUI},
	${heroSplitUI},
	${sliderCardImageTextUI}
`;
