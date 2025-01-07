import React from "react";

const Breadcrumb = ({ pageName, breadcrumbs }) => {
  return (
    // <section
    //   aria-label="breadcrumb"
    //   className="w-full h-[300px] flex justify-center items-center bg-gradient-to-r from-green-500 to-yello-500  to-yello-300 text-white"
    // >
       <section
  aria-label="breadcrumb"
  style={{
    background: "linear-gradient(to left , #EFEFBB, #D4D3DD)",
  }}
  className="w-full h-[300px] flex justify-center items-center text-black"
> 

      <ol className="flex space-x-2 text-lg">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center space-x-1">
            {index > 0 && <span className="text-white/60">/</span>}
            {index < breadcrumbs.length - 1 ? (
              <a
                rel="noopener noreferrer"
                href={crumb.path}
                className="flex items-center px-1 capitalize hover:underline"
              >
                {crumb.label}
              </a>
            ) : (
              <span className="flex items-center px-1 capitalize cursor-default">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Breadcrumb;
