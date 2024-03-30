import { useTheme } from '@/components/ThemeProvider';
import { Textarea } from '@/components/ui/textarea';
import { DiffEditor } from '@monaco-editor/react';
import githubDark from 'monaco-themes/themes/Tomorrow-Night-Bright.json';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export interface CompareProps {}

export default function Compare(props: CompareProps) {
  const { theme } = useTheme();

  const mainEditor = useRef();

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
  };

  const [input1, setinput1] = useState<string>();
  const [input2, setinput2] = useState<string>();

  return (
    <div className="fira-code-regular">
      <Helmet>
        <title>Compare</title>
      </Helmet>
      <div className="flex ">
        <Textarea
          placeholder="text 1"
          className="rounded-none"
          value={input1}
          onChange={(e) => setinput1(e.target.value)}
        />
        <Textarea
          className="rounded-none"
          placeholder="text 2"
          value={input2}
          onChange={(e) => setinput2(e.target.value)}
        />
      </div>
      <DiffEditor
        theme={theme === 'dark' ? 'githubDark' : 'vs-light'}
        options={options}
        height="85vh"
        language="text"
        onMount={handleEditorDidMount}
        beforeMount={handleEditorPreMount}
        original={input1}
        modified={input2}
      />
    </div>
  );
}
