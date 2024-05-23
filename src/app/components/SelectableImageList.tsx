import React, {useEffect, useState} from "react";
import Image from "next/image";
import {ImageItem} from "@/app/types/common";
import clsx from "clsx";
import ErrorLabel from "@/app/lib/ui-kit/ErrorLabel";
import {FieldError} from "react-hook-form";


type ImageListProps = {
  src: string;
  alt: string;
  label?: string
  width?: number;
  height?: number;
  isSelected: boolean;
  onClick: () => void;
}
type SelectedImageListProps = {
  listImages: ImageItem[];
  handleClickOfImage: (image: string | undefined) => void;
  error?: string | FieldError;
}

const ImageOnList: React.FC<ImageListProps> = (
  {src, alt, label, width = 300, height = 300, isSelected, onClick}
) => {

  const selectedClass = `${isSelected ? "border-4 border-primary rounded-2xl" : ""}`

  return (
    <div>
      <Image
        className={clsx("relative h-auto max-w-full rounded-lg cursor-pointer", selectedClass)}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={onClick}
      />
      {label && <p className="text-sm text-gray-600">{label}</p>}
    </div>
  );
};

const SelectableImageList: React.FC<SelectedImageListProps> = ({listImages, handleClickOfImage, error}) => {

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    handleClickOfImage(selectedImageIndex + "")
  }, [selectedImageIndex]);

  return <div className="flex flex-wrap justify-center">
    {listImages.map((item, index) => (
      <div
        className={"px-5"}
        key={index}
      >
        <ImageOnList
          src={item.src}
          alt={item.alt}
          label={item.label}
          isSelected={index === selectedImageIndex}
          onClick={() => setSelectedImageIndex(index)}
        />
      </div>
    ))}
    {error && <ErrorLabel error={error}/>}

  </div>


}


export default SelectableImageList