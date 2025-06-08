import { projects } from '@data/projects';
import { Wrapper } from '@components/Wrapper';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Prose } from '@components/Prose';
import ReactMarkdown from 'react-markdown';
import { useLayoutEffect } from 'react';

export function Project() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = useLoaderData() as string;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <Wrapper className="max-w-prose flex-col pt-16">
      <button
        onClick={() => goHome()}
        className={
          'group -ml-4 inline-flex cursor-pointer items-center self-start px-4 py-2 text-gray-700 dark:text-gray-300'
        }
      >
        <ArrowLeft size={20} className="mr-1" />
        <span className="group-hover:underline">Back</span>
      </button>
      <Prose className="mt-5 self-center">
        <ReactMarkdown children={data} />
      </Prose>
    </Wrapper>
  );
}
