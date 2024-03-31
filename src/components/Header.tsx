import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import { Link, useNavigate } from 'react-router-dom';
import { ModeToggle } from './ModeToggle';
export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const navigate = useNavigate();
  return (
    <nav className="flex p-2 sticky top-0 border-b bg-white dark:bg-zinc-950">
      <span className="flex  justify-between w-full">
        <Link to="/" className="flex items-center gap-2">
          <RocketIcon width={24} height={24} />{' '}
          <span className="font-semibold">Shift F5</span>
        </Link>
        <span className="flex gap-2">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger id="endArrow">
              <HamburgerMenuIcon width={20} height={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => navigate('json_formatter')}>
                JSON Formatter
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('compare')}>
                Comparator
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('epoch')}>
                Epoch
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('pomodoro')}>
                Pomodoro
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('notepad')}>
                Notepad
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('comingsoon')}>
                URL Encode Decode
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('colorpicker')}>
                Color Picker
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('ipaddress')}>
                IP Address
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  to="https://github.com/yatheeshraju/shiftf5"
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  <GitHubLogoIcon />
                  <span> GitHub</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
      </span>
    </nav>
  );
}
