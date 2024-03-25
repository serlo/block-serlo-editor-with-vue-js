// Receiving Duplicate CKEditor5 Error when importing from here
// import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
// import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import { Command, Plugin } from '@ckeditor/ckeditor5-core'
import { ViewModel, addListToDropdown, createDropdown } from '@ckeditor/ckeditor5-ui'
import { Widget, toWidget } from '@ckeditor/ckeditor5-widget'

import serloIconSvg from '../assets/serlo.svg'

export default class InsertSerloButton extends Plugin {
  static get pluginName() {
    return 'InsertSerloButton'
  }

  static get requires() {
    return [Widget]
  }

  init() {
    const editor = this.editor

    editor.ui.componentFactory.add('serloButton', (locale) => {
      const buttonView = new editor.ui.view.ButtonView(locale)

      buttonView.set({
        label: 'Insert Serlo Component',
        icon: serloIconSvg,
        tooltip: true
      })

      buttonView.on('execute', () => {
        const model = editor.model
        const selection = model.document.selection

        model.change((writer) => {
          const insertPosition = selection.getFirstPosition()
          writer.insertElement('serloComponent', insertPosition)
        })
      })

      return buttonView
    })

    this._defineSchema()
    this._defineConverters()
  }

  _defineSchema() {
    const schema = this.editor.model.schema

    schema.register('serloComponent', {
      isObject: true,
      isBlock: true,
      allowWhere: '$block',
      allowContentOf: '$block'
    })
  }

  _defineConverters() {
    const conversion = this.editor.conversion

    conversion.for('upcast').elementToElement({
      view: 'serlo-component',
      model: (viewElement, { writer: modelWriter }) => {
        return modelWriter.createElement('serloComponent')
      }
    })

    conversion.for('dataDowncast').elementToElement({
      model: 'serloComponent',
      view: (modelElement, { writer: viewWriter }) => {
        return viewWriter.createContainerElement('serlo-component')
      }
    })

    conversion.for('editingDowncast').elementToElement({
      model: 'serloComponent',
      view: (modelElement, { writer: viewWriter }) => {
        const serloComponentView = viewWriter.createContainerElement('serlo-component')
        return toWidget(serloComponentView, viewWriter)
      }
    })
  }
}
