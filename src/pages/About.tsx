import { Jumbotron } from '@components/Jumbotron';

export function About() {
  return (
    <>
      <Jumbotron
        title={'About'}
        description={
          "I'm a full-stack developer with a background in design based in Perth, Western Australia."
        }
      />
      <div className="mx-auto my-0 w-full max-w-screen-lg px-4">
        <p>test</p>
      </div>
    </>
  );
}
