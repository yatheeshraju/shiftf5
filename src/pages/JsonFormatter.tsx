import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Editor, Monaco } from '@monaco-editor/react';
import githubDark from 'monaco-themes/themes/Tomorrow-Night-Bright.json';
import { MutableRefObject, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
export interface JsonFormatterProps {}

export default function JsonFormatter(props: JsonFormatterProps) {
  const { theme } = useTheme();

  const mainEditor = useRef() as MutableRefObject<Monaco | null>;

  const handleEditorDidMount = (monaco) => {
    mainEditor.current = monaco;
  };
  const handleEditorPreMount = (monaco) => {
    monaco.editor.defineTheme('githubDark', githubDark);
  };

  const options = {
    formatOnPaste: true,
    formatOnType: true,
    minimap: { enabled: false },
    fontLigatures: 'true',
  };

  const handleFormat = () => {
    mainEditor.current.getAction('editor.action.formatDocument').run();
    mainEditor.current.setPosition({ lineNumber: 1, column: 1 });
  };
  const handleCollapse = () => {
    mainEditor.current.trigger('fold', 'editor.foldAll');
  };
  const handleExpand = () => {
    mainEditor.current.trigger('unfold', 'editor.unfoldAll');
    mainEditor.current.setPosition({ lineNumber: 1, column: 1 });
  };

  return (
    <div className="flex flex-col fira-code-regular">
      <Helmet>
        <title>JSON Formatter</title>
      </Helmet>
      <div className="flex gap-2 absolute top-2 items-center ml-[60vw] justify-end px-4">
        <Button
          className="rounded-none"
          variant="default"
          onClick={handleFormat}
        >
          Format
        </Button>
        <Button
          className="rounded-none"
          variant="default"
          onClick={handleCollapse}
        >
          Collapse
        </Button>
        <Button
          className="rounded-none"
          variant="default"
          onClick={handleExpand}
        >
          Expand
        </Button>
      </div>
      <Editor
        theme={theme === 'dark' ? 'githubDark' : 'vs-light'}
        height="90vh"
        language="json"
        beforeMount={handleEditorPreMount}
        onMount={handleEditorDidMount}
        defaultValue={`{"key":"paste your json "}`}
        options={options}
      />
    </div>
  );
}
