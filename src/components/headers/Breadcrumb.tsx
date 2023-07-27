
type BreadType = {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  breads: BreadType[];
}

export const Breadcrumb = ({
  breads,
  ...props
}: BreadcrumbProps) => {
  return(
    <nav aria-label="Breadcrumb" className="flex">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {breads.map((bread, index) => (
          <>
            {index === breads.length-1?
              (
                <li className="flex items-center">
                  <span className="mr-1 text-sm font-medium text-gray-500 md:mr-2 dark:text-gray-400">
                    {bread.name}
                  </span>
                </li>
              )
              :(
                <li className="flex items-center">
                  <a href={bread.href} className="mr-1 text-sm font-medium text-gray-700 hover:text-gray-600 md:mr-2 dark:text-gray-400 dark:hover:text-white">
                    {bread.name}
                  </a>
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                </li>
              )
            }

          </>
        ))}
      </ol>
    </nav>
  )
}