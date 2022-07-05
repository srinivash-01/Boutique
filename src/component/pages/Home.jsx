import CarouselHome from "./HomeComponents/Carousel_Home";

const datas = [
    {
        image: "https://rukminim1.flixcart.com/image/150/150/l15bxjk0/chopper/j/v/m/3-stainless-steel-blade-powerful-mini-handy-quick-450-ml-chopper-original-imagcru36scrs6ze.jpeg?q=70",
        title: "Cookware & Serveware",
        price: "Min. 40% off",
        discription: "Deal on! Shopping on!"
    }, {
        image: "https://rukminim1.flixcart.com/image/150/150/kcm9t3k0/diaper/s/w/9/total-care-l-76-himalaya-original-imaftpm5pgswea4w.jpeg?q=70",
        title: "Baby Daipers",
        price: "Min. 20% off",
        discription: "Deal on! Shopping on!"
    }, {
        image: "https://rukminim1.flixcart.com/image/150/150/kyhlfgw0/microphone-accessory/p/j/c/3-5mm-clip-microphone-collar-mic-for-youtube-recording-mike-for-original-imagapgqacgwwvbz.jpeg?q=70",
        title: "Mobile Skin Stickers",
        price: "Explore Now",
        discription: "Deal on! Shopping on!"
    }, {
        image: "https://rukminim1.flixcart.com/image/150/150/kfcv6vk0/power-bank/q/z/q/power-bank-10000-plm13zm-mi-original-imafvtreeefx5thb.jpeg?q=70",
        title: "Power Bank",
        price: "Under ₹699",
        discription: "Deal on! Shopping on!"
    }, {
        image: "https://rukminim1.flixcart.com/image/150/150/ku2zjww0/diaper/p/f/g/pant-style-diaper-m-cuddles-super-pants-original-imag7agyfhhbsksk.jpeg?q=70",
        title: "UV Protection, Gradient Butterfly Sunglasses (62)",
        price: "Under ₹699",
        discription: "Deal on! Shopping on!"
    }, {
        image: "https://rukminim1.flixcart.com/image/150/150/ksw4ccw0/headphone/f/h/3/rockerz-255-pro-fast-charging-rockerz-255f-pro-boat-original-imag6cvfhacc9mrp.jpeg?q=70",
        title: "UV Protection, Gradient Butterfly Sunglasses (62)",
        price: "Under ₹699",
        discription: "Deal on! Shopping on!"
    }, {
        image: "https://rukminim1.flixcart.com/image/200/200/kylvr0w0/shoe/k/x/0/-original-imagasu6fzhk8gbu.jpeg?q=70",
        title: "UV Protection, Gradient Butterfly Sunglasses (62)",
        price: "Under ₹699",
        discription: "Deal on! Shopping on!"
    }, {
        image: "https://rukminim1.flixcart.com/image/200/200/kylvr0w0/shoe/k/x/0/-original-imagasu6fzhk8gbu.jpeg?q=70",
        title: "UV Protection, Gradient Butterfly Sunglasses (62)",
        price: "Under ₹699",
        discription: "Deal on! Shopping on!"
    }, {
        image: "https://rukminim1.flixcart.com/image/200/200/kylvr0w0/shoe/k/x/0/-original-imagasu6fzhk8gbu.jpeg?q=70",
        title: "UV Protection, Gradient Butterfly Sunglasses (62)",
        price: "Under ₹699",
        discription: "Deal on! Shopping on!"
    }, {
        image: "https://rukminim1.flixcart.com/image/200/200/kylvr0w0/shoe/k/x/0/-original-imagasu6fzhk8gbu.jpeg?q=70",
        title: "UV Protection, Gradient Butterfly Sunglasses (62)",
        price: "Under ₹699",
        discription: "Deal on! Shopping on!"
    },
]
export default function Home() {
    return (
        <div>
            <CarouselHome datas={datas} title="Discounts for You" />
        </div>
    );
};