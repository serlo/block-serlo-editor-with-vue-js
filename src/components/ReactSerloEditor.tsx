import {
  SerloEditor,
  // SerloEditorProps,
  // selectHasPendingChanges,
  // useAppDispatch,
  // useAppSelector,
  // store,
  // selectPendingChanges,
  // selectHasUndoActions,
  // selectHasRedoActions,
  // persistHistory,
  // selectDocuments,
  // selectStaticDocument,
  // ROOT,
  // StaticRenderer,
  EditorPluginType,
  createRenderers,
  createBasicPlugins,
  editorPlugins,
  editorRenderers,
  instanceDataDe,
  loggedInDataDe
} from '@serlo/editor'
// import Switch from "react-switch";

import React from 'react'

export const ReactSerloEditor = () => {
  // const [checked, setChecked] = React.useState(false)
  // <SerloEditor  />,
  // This works great! npm libraries can easily be consumed.
  // return React.createElement(Switch, { onChange: () => setChecked((c) => !c), checked}, null)

  // return React.createElement(SerloEditor, { initialState: {} }, null)
  editorPlugins.init(
    // Note that createBasicPlugins does not support a few types like 'type-article'
    createBasicPlugins({
      editorStrings: loggedInDataDe.strings.editor,
      // parent: 'Article',
      enableTextAreaExercise: true,
      allowImageInTableCells: false,
      exerciseVisibleInSuggestion: true,
      allowedChildPlugins: [
        EditorPluginType.Text,
        EditorPluginType.Equations,
        EditorPluginType.Highlight
      ]
    })
  )
  editorRenderers.init(createRenderers())

  return React.createElement(
    SerloEditor,
    {
      // copied from first text element of http://localhost:3000/entity/repository/add-revision/1997
      initialState: {
        plugin: 'text',
        state: [
          {
            type: 'p',
            children: [
              {
                text: 'Das Urnenmodell ist eine Denkhilfe ain der '
              },
              {
                type: 'a',
                href: '/1751',
                children: [
                  {
                    text: 'Kombinatorik'
                  }
                ]
              },
              {
                text: ', um (mehrstufige) '
              },
              {
                type: 'a',
                href: '/1521',
                children: [
                  {
                    text: 'Zufallsexperimente'
                  }
                ]
              },
              {
                text: ' zu modellieren. Es heißt so, weil man sich diese Experimente wie das '
              },
              {
                text: 'Ziehen von Kugeln aus einer Urne',
                strong: true
              },
              {
                text: ' vorstellt.'
              }
            ]
          }
        ]
      },
      onChange: ({ changed, getDocument }) => {
        console.log('onChange', changed, getDocument())
        // if (!changed) return
        // void debouncedStoreToLocalStorage(getDocument())
      },
      instanceData: instanceDataDe,
      loggedInData: loggedInDataDe
    },
    null
  )
}

export const NormalReactTest = () => {
  return <div>Normal React works great!!</div>
}

// export const ReactTest = () => <div>Test</div>

export const ReactTest = React.createElement('div', null, 'Test from React')
