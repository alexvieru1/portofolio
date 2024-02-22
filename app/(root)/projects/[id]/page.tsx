import Image from "next/image";

interface searchParamsTypes {
    id: string;
    title: string;
    description: string;
    image: string;
    github: string;
}

const ProjectFolio = ({ searchParams }: { searchParams: searchParamsTypes }) => {

  const project = searchParams

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
      <h2 className="text-4xl font-bold uppercase text-center mt-10 text-gray-500 my-3">{project.title}</h2>
      <div className="flex md:gap-20 4xs:gap-5 relative mt-10 md:flex-row 4xs:flex-col">
        <article>
          <p className="text-xl">
            {project.description}
          </p>
        </article>
      </div>

    </div>
  )
}

export default ProjectFolio