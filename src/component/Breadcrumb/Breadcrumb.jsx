import React from "react";
import "./Breadcrumb.css"

const Breadcrumb = ({ pageName, breadcrumbs, backgroundImage }) => {
  return (
    <section
      aria-label="breadcrumb"
      style={{
        backgroundColor: "#EFEFBB",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
      }}
      className="w-full h-[300px] flex justify-center items-center text-black relative"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50"></div>

      <ol className="flex space-x-2 text-lg relative z-10">
  {breadcrumbs.map((crumb, index) => (
    <li key={index} className="flex items-center space-x-1 text-white/100 font-10">
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
