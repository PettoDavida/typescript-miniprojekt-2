
export interface Clothing{
    name: string,
    image: string,
    color: object,
    sizes: string[],
    type: string,

}

const whiteShirtURL = 'https://www.asket.com/imgproxy/e:1/format:jpeg/width:1080/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg@jpg';
const blackShirtURL = 'https://images.maskinklippet.se/b82298ea-a73f-457b-a556-6feabeebdf7e?m=pad&f=jpg'

const beigePantsURL = 'https://www.lafuma.com/media/catalog/product/cache/18/image/9df78eab33525d08d6e5fb8d27136e95/l/f/lfv11318-2768-pantalon-homme-access-cargo-pants-m-beige_2.jpg'
const blackPantsURL = 'https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1635784138/D16985-C106-B564-M01/g-star-raw-skinny-chino-pants-black.jpg'

const redHoodieURL = 'https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/products/1616/images/2064/Cardinal__08936.1419662561.1280.1280.png?c=2'
const orangeHoodieURL= 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/besthoodiefenty-1616603464.jpg?crop=1xw:0.999288256227758xh;center,top&resize=480:*'

const whiteColor = {'name': 'white', 'hex': '#fff'}
const blackColor = {'name': 'black', 'hex': '#000'}
const beigeColor = {'name': 'beige', 'hex': '#fff'}
const redColor = {'name': 'red', 'hex': '#fff'}
const orangeColor = {'name': 'orange', 'hex': '#fff'}


export const clothes: Clothing[] = [
    {'name': "white shirt",'image': whiteShirtURL,'color': whiteColor,'sizes': ['L', 'M', 'S'], 'type': 'shirt'},
    {'name': "black shirt",'image': blackShirtURL,'color': blackColor,'sizes': ['XXL', 'XL', 'XS'], 'type': 'shirt'},
    {'name': "beige pants",'image': beigePantsURL,'color': beigeColor,'sizes': ['M', 'S'], 'type': 'pants'},
    {'name': "black pants",'image': blackPantsURL,'color': blackColor,'sizes': ['XL', 'L', 'M'], 'type': 'pants'},
    {'name': "red hoodie",'image': redHoodieURL,'color': redColor,'sizes': ['L', 'S'], 'type': 'hoodie'},
    {'name': "orange hoodie",'image': orangeHoodieURL,'color': orangeColor,'sizes': ['S', 'XS'], 'type': 'hoodie'},

]

