import Gallery from 'react-grid-gallery';



const IMAGES =
  [{
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }]

const data = [
  {
    src:
      "https://i.ibb.co/x7pt2ZT/suffix.jpg",

    thumbnail:
      "https://i.ibb.co/x7pt2ZT/suffix.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    isSelected: false
  },
  {
    src:
      "https://i.ibb.co/Q9WMfX8/suffix1.png",

    thumbnail:
      "https://i.ibb.co/Q9WMfX8/suffix1.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    isSelected: false
  },
  {
    src:
      "https://i.ibb.co/TL7zgWL/suffix4.jpg",

    thumbnail:
      "https://i.ibb.co/TL7zgWL/suffix4.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    isSelected: false
  },
  {
    src:
      "https://i.ibb.co/HG6k4Gr/suffix2.png",

    thumbnail:
      "https://i.ibb.co/HG6k4Gr/suffix2.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    isSelected: false
  },
  {
    src:
      "https://i.ibb.co/kcGr49M/suffix5.png",

    thumbnail:
      "https://i.ibb.co/kcGr49M/suffix5.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    isSelected: false
  },



];

const SuffixGallery = () => {
  return (

    <div className="gallery " style={{ padding: "50px 0px", minHeight: "100vh", background: `rgba(247,247,247) center center/cover no-repeat` }}>
      <div className="text-center pt-5">
        <h1 style={{ color: "#525252", fontSize: "28px", paddingBottom: "30px" }}><strong>Suffix <span style={{ color: "#609dce" }}>Gallery</span></strong></h1>
      </div>
      <div className="container" style={{ paddingTop: "10px", paddingBottom: "40px", width: "80vw" }}>
        <Gallery images={data} enableLightbox={true} enableImageSelection={false} />
      </div>
    </div>
  )
}

export default SuffixGallery
