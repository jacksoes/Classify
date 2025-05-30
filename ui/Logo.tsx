import Image from "next/image"

export default function Logo({src}){
    return <Image src={src} width={50} height={50} alt="image of classify logo" />
}