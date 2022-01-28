import './About us.css'
import AboutUs from "../components/AboutUs";

const AboutUss = () => {

    const products = [
        {
          name: "Ali Visram",
          imgUrl:
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
          description:
            "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
        },
        {
          name: "NVIDIA GeForce RTX 3080",
          imgUrl:
                "https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/n/v/nvidia_geforce_rtx_3080_founders_edition_-_5tejar_1.jpg",
          description:
              "The GeForce RTX 3080 is an enthusiast-class graphics card by NVIDIA, launched on September 1st, 2020. Built on the 8 nm process, and based on the GA102 graphics processor, in its GA102-200-KD-A1 variant, the card supports DirectX 12 Ultimate. This ensures that all modern games will run on GeForce RTX 3080.",
        },
        {
          name: "Iphone 12",
          imgUrl:
            "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
          description:
            "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
        },
      ];

    return (

        <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {
          products.map((product) => (
            <AboutUs
              key={product._id}
              name={product.name}
              description={product.description}
              imgUrl={product.imgUrl}
            />
          ))
        }
      </div>
    </div>
        // <div className="aboutus__screen">
        //     <div className="about__title">About us</div>
        //         <div className="student">
        //             <p>Ali Visram</p>
        //             <p>O meu nome é...</p>
        //             <img src="" alt="">
        //             </img>
        //         </div>
        //         <div className="student">
        //             <p>Leonardo Rodrigues</p>
        //             <p>O meu nome é...</p>
        //             <img src="" alt="">
        //             </img>
        //         </div>
        //         <div className="student">
        //             <p>Yuri Banzato</p>
        //             <p>O meu nome é...</p>
        //             <img src="" alt="">
        //             </img>
        //         </div>
        // </div>
    )
}

export default AboutUss