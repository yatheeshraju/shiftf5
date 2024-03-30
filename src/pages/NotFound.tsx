import { Helmet } from 'react-helmet-async';

export interface NotFoundProps {}

export default function NotFound(props: NotFoundProps) {
  return (
    <div>
      <Helmet>
        <title>404</title>
      </Helmet>
      Not Found !
    </div>
  );
}
