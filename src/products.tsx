
export interface Clothing{
    id: number,
    name: string,
    image: string,
    price: number,
    type: string,
    about: string

}

const whiteShirtURL = 'https://www.asket.com/imgproxy/e:1/format:jpeg/width:1080/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg@jpg';
const blackShirtURL = 'https://images.maskinklippet.se/b82298ea-a73f-457b-a556-6feabeebdf7e?m=pad&f=jpg'

const beigePantsURL = 'https://www.lafuma.com/media/catalog/product/cache/18/image/9df78eab33525d08d6e5fb8d27136e95/l/f/lfv11318-2768-pantalon-homme-access-cargo-pants-m-beige_2.jpg'
const blackPantsURL = 'https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1635784138/D16985-C106-B564-M01/g-star-raw-skinny-chino-pants-black.jpg'

const redHoodieURL = 'https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/products/1616/images/2064/Cardinal__08936.1419662561.1280.1280.png?c=2'
const orangeHoodieURL= 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/besthoodiefenty-1616603464.jpg?crop=1xw:0.999288256227758xh;center,top&resize=480:*'

export const clothes: Clothing[] = [
    {'id': 0, 'name': "white shirt",'image': whiteShirtURL,'price': 200,'type': 'shirt', 'about': "En t-shirt i mjuk bomullstrikå med klassisk passform. T-shirten har rund halsringning med ribbad mudd. Rakt skuren nederkant.", },
    {'id': 1, 'name': "black shirt",'image': blackShirtURL,'price': 250,'type': 'shirt', 'about': "En t-shirt i mjuk bomullstrikå med klassisk passform. T-shirten har rund halsringning med ribbad mudd. Rakt skuren nederkant.", },
    {'id': 3, 'name': "beige pants",'image': beigePantsURL,'price': 500,'type': 'pants', 'about': "Ett par chinos i stretchig twill av bomull. De har sidfickor och stolpfickor bak med knapp. Gylf med dragkedja. Slim Fit _ en passform som är smal över lår, knä och ankel. Detta skapar en figursydd silhuett.", },
    {'id': 4, 'name': "black pants",'image': blackPantsURL,'price': 600,'type': 'pants', 'about': "Ett par chinos i stretchig twill av bomull. De har sidfickor och stolpfickor bak med knapp. Gylf med dragkedja. Slim Fit _ en passform som är smal över lår, knä och ankel. Detta skapar en figursydd silhuett.", },
    {'id': 5, 'name': "red hoodie",'image': redHoodieURL,'price': 800,'type': 'hoodie', 'about': "En långärmad tröja i bomullsblandad sweatshirtkvalitet med avslappnad passform. Tröjan har trikåfodrad huva med dragsko. Bred, ribbad mudd vid ärmslut och i nederkant. Känguruficka. Mjuk, borstad insida.", },
    {'id': 6, 'name': "orange hoodie",'image': orangeHoodieURL,'price': 750,'type': 'hoodie', 'about': "En långärmad tröja i bomullsblandad sweatshirtkvalitet med avslappnad passform. Tröjan har trikåfodrad huva med dragsko. Bred, ribbad mudd vid ärmslut och i nederkant. Känguruficka. Mjuk, borstad insida.", },

]

