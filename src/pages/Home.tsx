export interface HomeProps {}
import Xarrow from 'react-xarrows';

export default function Home(props: HomeProps) {
  return (
    <div className="flex  h-[780px] items-center justify-center flex-col container ">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Tools to help you with your daily workflow
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
        json formatter , url encoder ,notepad .... and more ...
      </p>
      <span id="startArrow" />
      <span className="flex">
        <Xarrow
          zIndex={0}
          color="gold"
          path="smooth"
          animateDrawing={true}
          start="startArrow"
          end="endArrow"
        />
      </span>
    </div>
  );
}
