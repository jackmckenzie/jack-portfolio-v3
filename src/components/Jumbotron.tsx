import { ReactNode } from 'react';

interface JumbotronProps {
  title: string;
  description: string;
  image?: ReactNode;
}

export function Jumbotron(props: JumbotronProps) {
  return (
    <div className="bg-amber-50 py-20">
      <div className="mx-auto my-0 flex w-full max-w-screen-lg px-4">
        <div className="space-y-5 text-slate-800">
          <h1 className="text-3xl font-bold">{props.title}</h1>
          <p className="text-xl">{props.description}</p>
        </div>
        {props.image && props.image}
      </div>
    </div>
  );
}
