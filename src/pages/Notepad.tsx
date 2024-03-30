import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import Editor from '@monaco-editor/react';
import { saveAs } from 'file-saver';
import githubDark from 'monaco-themes/themes/Tomorrow-Night-Bright.json';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
export interface NotepadProps {}

export default function Notepad(props: NotepadProps) {
  const { theme } = useTheme();
  const notepad = useRef(null);
  const handleEditorDidMount = (editor, monaco) => {
    notepad.current = editor;
  };
  const handleEditorPreMount = (monaco) => {
    monaco.editor.defineTheme('githubDark', githubDark);
  };

  const handleDownload = () => {
    const newFile = new File([notepad.current.getValue()], 'hello world.txt', {
      type: 'text/plain;charset=utf-8',
    });
    try {
      saveAs(newFile, 'note.txt');

      toast({
        className: cn(
          'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
        ),
        title: 'Saved !',
        description: 'Check your downloads location',
      });
    } catch (e) {}
  };
  const options = {
    lineNumbers: 'off',
    glyphMargin: false,
    folding: false,
    minimap: { enabled: false },
  };
  return (
    <div className="flex relative fira-code-regular">
      <Helmet>
        <title>Notepad</title>
      </Helmet>
      <Editor
        theme={theme === 'dark' ? 'githubDark' : 'vs-light'}
        height="90vh"
        language="text"
        beforeMount={handleEditorPreMount}
        onMount={handleEditorDidMount}
        defaultValue={''}
        options={options}
      />
      <div className="flex absolute  gap-2 w-full items-center justify-end px-4">
        <Button
          className="rounded-none"
          variant="default"
          onClick={handleDownload}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
