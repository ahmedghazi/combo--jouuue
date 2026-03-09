import {type DefaultDocumentNodeResolver} from 'sanity/structure'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `home`:
    case `pageModulaire`:
      return S.document().views([S.view.form()])
    default:
      return S.document().views([S.view.form()])
  }
}
