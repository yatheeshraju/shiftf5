import { useTheme } from '@/components/ThemeProvider';
import { useState } from 'react';

export interface ColorPickerProps {}

export default function ColorPicker(props: ColorPickerProps) {
  const { theme } = useTheme();
  const [color, setColor] = useState(theme === 'dark' ? '#000000' : '#FFFFFF');
  return (
    <div
      className={`flex w-full h-[90vh] items-center justify-center`}
      style={{ backgroundColor: `${color}` }}
    >
      <span className="flex flex-col items-center gap-2">
        <span className="text-4xl">{color}</span>
        <input
          type="color"
          defaultValue={color}
          value={color}
          className="w-14 h-14 rounded-none border-0 shadow-none"
          onChange={(e) => setColor(e.target.value)}
          alt="color picker"
        />
      </span>
    </div>
  );
}
