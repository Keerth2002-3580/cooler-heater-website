'use client';

import { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  name: string;
}

export default function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-4">
        <div className="aspect-square bg-gray-200">
          <img
            src={images[selectedImage]}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square rounded-xl overflow-hidden border-2 ${
              selectedImage === index ? 'border-primary' : 'border-transparent'
            }`}
          >
            <img src={image} alt={`${name} ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
