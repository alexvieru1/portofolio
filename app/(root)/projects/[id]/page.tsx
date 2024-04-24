import {
  ChevronLeftIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

interface queryParamsTypes {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  deploy: string;
  contributors: string[];
  technologies: string[];
  details: string;
  createdAt: string;
}
const ReadMore = ({ searchParams }: { searchParams: queryParamsTypes }) => {
  const project = searchParams;
  return (
    <div className="select-none flex min-h-[90vh] flex-col p-24 4xs:mx-[-50px] md:mx-auto">
      <div className="w-[95%] flex justify-center mb-5">
        <Image
          src={project.image}
          width={1000}
          height={600}
          alt="image name from public folder"
          className="rounded-lg border-[3px] border-white/[0.2]"
        />
      </div>
      <h2 className="text-xl font-bold uppercase text-center mt-10 text-gray-300 my-3">
        {project.title}
      </h2>
      <div className="flex md:gap-20 4xs:gap-5 relative mt-10 md:flex-row 4xs:flex-col">
        <article>
          <p className="text-md">{project.details}</p>
          <p className="mt-2 text-md font-semibold text-gray-300 text-center">
            {" "}
            Technologies used:{" "}
          </p>
          <div className="flex justify-center p-6 items-center">
            {project.technologies.map((p, index) => (
              <Image
                className="mx-2"
                key={index}
                src={p}
                width={50}
                height={50}
                alt="technology"
              />
            ))}
          </div>
          {project.contributors && (
            <div className="inline-flex">
              <p className="mt-2 text-md italic text-gray-300 text-start mr-3">
                {" "}
                {Array.isArray(project.contributors) &&
                project.contributors.length > 1
                  ? "Contributors:"
                  : "Contributor:"}
              </p>
              <p className="mt-2 text-md italic text-gray-300 text-start">
                {Array.isArray(project.contributors)
                  ? project.contributors.join(", ")
                  : project.contributors}
              </p>
            </div>
          )}

          <div className="mt-5 flex gap-5 items-center">
            <span className="text-gray-400 text-sm italic">
              Project&apos;s release date: {project.createdAt}
            </span>
          </div>
        </article>
      </div>
      <div className="flex justify-between mt-4">
        <Link href="/#projects">
          <button className="inline-flex h-12 animate-shimmer items-center justify-between rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <ChevronLeftIcon className="w-5 h-5" />
            Projects
          </button>
        </Link>
        <Link href={project.github} target="_blank">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Image
              src="/images/github-mark-white.svg"
              width={20}
              height={20}
              alt="githublogo"
              className="mr-2"
              draggable={false}
            />
            Github
          </button>
        </Link>
      </div>
      {project.deploy && (
          <div className="flex justify-center mt-4">
            <Link href={project.deploy} target="_blank">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <CursorArrowRippleIcon className="mr-2 w-5 h-5" />
                Deployment
              </button>
            </Link>
          </div>
        )}
    </div>
  );
};
export default ReadMore;
