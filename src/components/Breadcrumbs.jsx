import React from 'react';
import Link from 'next/link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Breadcrumbs = ({ product }) => {
  const breadcrumbItems = [
    { label: "Página Inicial", href: "/" },
    { label: product.category, href: "#" },
    { label: product.subcategory, href: "#" },
    { label: product.subsubcategory, href: "#" },
    { label: product.title, href: "#" },
];
  
  return (
      <nav aria-label="Breadcrumb" className="w-full">
        <ol className="flex items-center flex-wrap gap-2">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2">
                  <ChevronRightIcon className='text-primary'/>
                </span>
              )}
              
              {index === breadcrumbItems.length - 1 ? (
                <span 
                  className="text-on-surface-variant font-medium" 
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-primary hover:bg-gray-100 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  };
  
  export default Breadcrumbs;