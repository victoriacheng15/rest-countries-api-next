import Image from "next/image";

function ImageContainer({
	src,
	alt,
	width = 1600,
	height = 800,
	...props
}: ImageContainerProps) {
	return <Image src={src} alt={alt} width={width} height={height} {...props} />;
}

export default ImageContainer;
