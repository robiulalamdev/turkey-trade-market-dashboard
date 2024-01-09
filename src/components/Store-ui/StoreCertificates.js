import React, { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { iView } from "@/utils/icons/icons";
import { IconButton } from "@material-tailwind/react";
import { base_url } from "@/lib/global";

const StoreCertificates = ({ saveCertificates }) => {
  const [index, setIndex] = useState(-1);
  const certificates = saveCertificates?.map((certificate) => {
    return {
      src: `${base_url}/uploads/${certificate}`,
      width: 800,
      height: 600,
      href: `${base_url}/uploads/${certificate}`, // You can customize this URL
    };
  });
  return (
    <div className="w-full h-fit relative">
      <div className="bg-pm absolute rounded right-0 -top-10 z-50">
        <IconButton className="bg-pm" size="sm" onClick={() => setIndex(0)}>
          {iView}
        </IconButton>
      </div>
      <div className="grid grid-cols-6 gap-3 flex-wrap w-full h-fit my-2 overflow-y-auto max-h-[400px] cursor-pointer">
        {saveCertificates?.map((img, index) => (
          <div
            onClick={() => setIndex(index)}
            key={index}
            className="relative w-full bg-gray-100 max-h-[100px] p-2 flex justify-start items-center rounded-md border"
          >
            <img
              className="w-full h-full object-contain"
              src={`${base_url}/uploads/${img}`}
              alt=""
            />
          </div>
        ))}
      </div>

      {/* <PhotoAlbum
        photos={certificates}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      /> */}

      <Lightbox
        slides={certificates}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default StoreCertificates;
