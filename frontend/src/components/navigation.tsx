import React from "react";

function Navigation() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex items-center justify-start p-5 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <h1 className="text-2xl text-bold">Legacy.</h1>
          </a>
        </div>
        <div className="flex lg:flex-1">
          <p></p>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
