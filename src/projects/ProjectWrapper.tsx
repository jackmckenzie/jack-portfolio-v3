import { Prose } from '@components/Prose';
import { Wrapper } from '@components/Wrapper';
import ReactMarkdown from 'react-markdown';

interface ProjectWrapperProps {
  images: { src: string; alt: string }[];
  markdown: string;
}

export function ProjectWrapper({ images, markdown }: ProjectWrapperProps) {
  return (
    <div>
      <Wrapper>
        <div>
          <img src={images[0].src} alt={images[0].alt} className="w-full" />
          <div className="flex flex-wrap">
            {images.slice(1).map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="max-w-[25%] basis-1/4"
              />
            ))}
          </div>
        </div>
      </Wrapper>
      <Prose>
        <ReactMarkdown children={markdown} />
      </Prose>
    </div>
  );
}
