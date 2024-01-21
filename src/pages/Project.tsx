import { projects } from '@data/projects';
import { Wrapper } from '@components/Wrapper';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Prose } from '@components/Prose';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export function Project() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = useLoaderData() as string;

  const [lightboxIndex, setLightboxIndex] = useState(-1);

  function goHome() {
    navigate('/');
  }

  if (!slug) {
    goHome();
    return null;
  }

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    goHome();
    return null;
  }

  // const slides = project.images.map((image) => {
  //   return {
  //     src: image.src,
  //     caption: image.alt,
  //   };
  // });

  return (
    <Wrapper className="max-w-prose flex-col pt-16">
      <button
        onClick={() => goHome()}
        className={
          'group -ml-4 inline-flex items-center self-start px-4 py-2 text-gray-700 dark:text-gray-300'
        }
      >
        <ArrowLeft size={20} className="mr-1" />
        <span className="group-hover:underline">Back</span>
      </button>
      {/* <h1 className="text-normal mb-24 font-jost text-5xl leading-[4rem] text-gray-700 dark:text-gray-100">
        {project.title}
      </h1> */}
      {/* <ul className="flex flex-wrap">
        {project.images.map((image, index) => (
          <li key={image.src} className="basis-1/2">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full"
              onClick={() => setLightboxIndex(index)}
            />
          </li>
        ))}
      </ul> */}
      <Prose className="mt-5 self-center">
        <ReactMarkdown children={data} />
      </Prose>
      {/* <Lightbox
        slides={slides}
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
      /> */}
    </Wrapper>
  );
}
