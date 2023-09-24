import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journal" prevLocation={prevLocation} />
      <article className="pb-10">
        <header>
          <h1 className="max-w-[600px] text-3xl sm:text-4xl text-primeColor font-semibold mb-4">
            CouponsPort Journal
          </h1>
        </header>
        <section>
          <p className="max-w-[800px] text-lg sm:text-xl text-lightText leading-7">
            Welcome to The CouponsPort Journal, your source for shopping insights and tips. We share valuable insights, smart tips, and inspiring stories from our community of savvy shoppers.
          </p>
        </section>
      </article>
      <section className="py-10">
        <h2 className="text-2xl sm:text-3xl text-primeColor font-semibold mb-4">User Stories</h2>
        <p className="max-w-[800px] text-lg sm:text-xl text-lightText leading-7">
          Discover how our community members have unlocked incredible savings and rewarding shopping experiences with CouponsPort. Read their inspiring stories and learn from their successful shopping strategies.
        </p>
        {/* You can add user stories here as needed */}
      </section>
    </div>
  );
};

export default Journal;
