import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Editor } from '@monaco-editor/react';
import githubDark from 'monaco-themes/themes/Tomorrow-Night-Bright.json';
import { useRef } from 'react';
export interface JsonFormatterProps {}

export default function JsonFormatter(props: JsonFormatterProps) {
  const { theme } = useTheme();

  const mainEditor = useRef(null);

  const handleEditorDidMount = (editor: any) => {
    mainEditor.current = editor;
  };
  const handleEditorPreMount = (monaco: any) => {
    monaco.editor.defineTheme('githubDark', githubDark);
  };

  const options = {
    formatOnPaste: true,
    formatOnType: true,
    minimap: { enabled: false },
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
    <div className="flex relative">
      <Editor
        theme={theme === 'dark' ? 'githubDark' : 'vs-light'}
        height="90vh"
        language="json"
        beforeMount={handleEditorPreMount}
        onMount={handleEditorDidMount}
        defaultValue={`{"key":"paste your json "}`}
        options={options}
      />
      <div className="flex absolute  gap-2 w-full items-center justify-end px-4">
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
    </div>
  );
}
