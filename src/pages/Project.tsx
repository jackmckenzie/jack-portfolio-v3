import { projects } from '@data/projects';
import { Wrapper } from '@components/Wrapper';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Prose } from '@components/Prose';
import ReactMarkdown from 'react-markdown';

export function Project() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = useLoaderData() as string;

  function goHome() {
    navigate('/');
  }

  console.log('loaderData');
  console.log(data);

  if (!slug) {
    // navigate to home
    goHome();
    return null;
  }

  const project = projects.find((project) => project.id === parseInt(slug, 10));

  if (!project) {
    // navigate to home
    goHome();
    return null;
  }

  return (
    <Wrapper className="flex-col pt-16">
      <button
        onClick={() => goHome()}
        className={
          'group -ml-4 inline-flex items-center self-start px-4 py-2 text-gray-700 dark:text-gray-300'
        }
      >
        <ArrowLeft size={20} className="mr-1" />
        <span className="group-hover:underline">Back</span>
      </button>
      <h1 className="text-normal mb-24 font-jost text-5xl leading-[4rem] text-gray-700 dark:text-gray-100">
        {project.title}
      </h1>
      <Prose>
        <ReactMarkdown children={data} />
      </Prose>
    </Wrapper>
  );
}
