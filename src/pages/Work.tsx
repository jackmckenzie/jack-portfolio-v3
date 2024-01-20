import { Jumbotron } from '@components/Jumbotron';
import jackHeadshot from '@assets/jack-headshot.png';

export function Work() {
  return (
    <Jumbotron
      title={'Full-stack Developer'}
      description={
        "Hi, I'm Jack, a full-stack developer with a design background, focused on building accessible web experiences."
      }
      image={<img src={jackHeadshot} alt="Jack McKenzie" />}
    />
  );
}
