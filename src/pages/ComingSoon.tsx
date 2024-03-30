import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export interface ComingSoonProps {}

export default function ComingSoon(props: ComingSoonProps) {
  const navigate = useNavigate();
  return (
    <div className="flex  items-center justify-center rounded-lg h-[500px]">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">Under Development</h3>
        <p className="text-sm text-muted-foreground">Will be available soon.</p>
        <Button onClick={() => navigate('/')} className="mt-4">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
