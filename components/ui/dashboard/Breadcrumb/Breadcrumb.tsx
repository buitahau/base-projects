import Link from 'next/link';
interface BreadcrumbProps {
  pageName: string;
  pageUrl: string;
}

const Breadcrumb = ({ pageName, pageUrl }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li>
            <Link className="font-medium text-primary" href={pageUrl}>
              {pageName}
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
