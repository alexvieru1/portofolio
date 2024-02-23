import Image from "next/image";
import Link from "next/link";

interface queryParamsTypes {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  contributors: string[];
  technologies: string[];
  details: string;
  createdAt: string;
}

const ReadMore = ({ searchParams }: { searchParams: queryParamsTypes }) => {
  const project = searchParams;
  return (
    <div className="flex min-h-[90vh] flex-col p-24 4xs:mx-[-50px] md:mx-auto">
      <div className="w-[95%] flex justify-center mb-5">
        <Image
          src={project.image}
          width={1000}
          height={600}
          alt="image name from public folder"
          objectFit="cover"
        />
      </div>
      <h2 className="text-4xl font-bold uppercase text-center mt-10 text-gray-500 my-3">
        {project.title}
      </h2>
      <div className="flex md:gap-20 4xs:gap-5 relative mt-10 md:flex-row 4xs:flex-col">
        <article>
          <p className="text-xl">{project.details}</p>
          <div className="mt-5 flex gap-5 items-center">
              <span className="text-gray-400 text-sm italic">
                {project.createdAt}
              </span>

          </div>
        </article>
      </div>
      <Link href="/#projects">
        <div className="mt-10 w-full flex items-center justify-center">
          <button className="px-3 py-2">GitHub</button>
        </div>
      </Link>
    </div>
  );
};
export default ReadMore;
