import DztImageGalleryComponent from "reactjs-image-gallery";
import suffix from "../../media/download/suffix.jpg";

const data = [
  {
    url:
      "https://i.ibb.co/x7pt2ZT/suffix.jpg",

    thumbUrl:
      "https://i.ibb.co/x7pt2ZT/suffix.jpg"
  },
  {
    url:
      "https://i.ibb.co/Q9WMfX8/suffix1.png",

    thumbUrl:
      "https://i.ibb.co/Q9WMfX8/suffix1.png"
  },
  {
    url:
      "https://i.ibb.co/TL7zgWL/suffix4.jpg",

    thumbUrl:
      "https://i.ibb.co/TL7zgWL/suffix4.jpg"
  },
  {
    url:
      "https://i.ibb.co/HG6k4Gr/suffix2.png",

    thumbUrl:
      "https://i.ibb.co/HG6k4Gr/suffix2.png"
  },
  {
    url:
      "https://i.ibb.co/kcGr49M/suffix5.png",

    thumbUrl:
      "https://i.ibb.co/kcGr49M/suffix5.png"
  },

  {
    url:
      "https://i.ibb.co/ZxzKnm1/suffix3.jpg",

    thumbUrl:
      "https://i.ibb.co/ZxzKnm1/suffix3.jpg"
  },
  {
    url:
      "https://i.ibb.co/nRmT7GK/suffix3.png",

    thumbUrl:
      "https://i.ibb.co/nRmT7GK/suffix3.png"
  },
  {
    url:
      "https://i.ibb.co/gmS7ZMj/suffix2.jpg",

    thumbUrl:
      "https://i.ibb.co/gmS7ZMj/suffix2.jpg"
  },
  {
    url:
      "https://i.ibb.co/x7pt2ZT/suffix.jpg",

    thumbUrl:
      "https://i.ibb.co/x7pt2ZT/suffix.jpg"
  },
  {
    url:
      "https://i.ibb.co/Q9WMfX8/suffix1.png",

    thumbUrl:
      "https://i.ibb.co/Q9WMfX8/suffix1.png"
  },
  {
    url:
      "https://i.ibb.co/TL7zgWL/suffix4.jpg",

    thumbUrl:
      "https://i.ibb.co/TL7zgWL/suffix4.jpg"
  },
  {
    url:
      "https://i.ibb.co/HG6k4Gr/suffix2.png",

    thumbUrl:
      "https://i.ibb.co/HG6k4Gr/suffix2.png"
  },
  {
    url:
      "https://i.ibb.co/kcGr49M/suffix5.png",

    thumbUrl:
      "https://i.ibb.co/kcGr49M/suffix5.png"
  },

  {
    url:
      "https://i.ibb.co/ZxzKnm1/suffix3.jpg",

    thumbUrl:
      "https://i.ibb.co/ZxzKnm1/suffix3.jpg"
  },
  {
    url:
      "https://i.ibb.co/nRmT7GK/suffix3.png",

    thumbUrl:
      "https://i.ibb.co/nRmT7GK/suffix3.png"
  },
  {
    url:
      "https://i.ibb.co/gmS7ZMj/suffix2.jpg",

    thumbUrl:
      "https://i.ibb.co/gmS7ZMj/suffix2.jpg"
  },

];

const Gallery = () => {
  return (
    <div className="gallery" style={{ padding: "50px 0px", minHeight: "100vh", background: `rgb(252, 252, 252) center center/cover no-repeat` }}>
      <div className="text-center pt-5">
        <h1 style={{ color: "#525252", fontSize: "28px", paddingBottom: "30px" }}><strong>Suffix <span style={{ color: "#609dce" }}>Gallery</span></strong></h1>
      </div>
      <div className="galleryMainContent" style={{ paddingTop: "10px", paddingBottom: "40px" }}>
        <DztImageGalleryComponent images={data} hideDownload={true} imageBackgroundColor="red" />
      </div>


    </div>
  )
}

export default Gallery
