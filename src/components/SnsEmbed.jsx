import React from "react";

const SnsEmbed = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="mt-5 text-gray-900 text-4xl font-extrabold text-center uppercase">
          {" "}
          Stay Connected{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 p-5">
          <div className="card p-5">
            <h3 className=" py-4 text-center font-bold text-4xl text-blue-600">
              Facebook
            </h3>
            <iframe
              className="pt-5"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fichiragpaswan%2F&tabs=timeline&width=450&height=550&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="100%"
              height="550px"
              style={{ border: "none", overflow: "hidden" }}
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="card p-5">
            <h3 className=" py-4 text-center font-bold text-4xl text-blue-600">
              Twitter
            </h3>
            <iframe
              width="100%"
              height="550px"
              src="https://twitframe.com/show?url=https://twitter.com/LJP4India/status/1668945323325280256?ref_src=twsrc%5Etfw"
            ></iframe>
          </div>
          <div className="card p-5">
            <h3 className=" py-4 text-center font-bold text-4xl text-blue-600">
              Instagram
            </h3>
            <iframe
              src="https://www.instagram.com/p/CteFOhRN5Gl/embed"
              width="100%"
              height="550px"
              frameborder="0"
              allowtransparency="true"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnsEmbed;
