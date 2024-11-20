const ImageGrid = ({ images }: { images: string[] }) => {
  if (!images.length) return null;

  switch (images.length) {
    case 1:
      return (
        <div className="mt-4">
          <img
            src={images[0]}
            alt="Post content"
            className="rounded-lg w-full object-cover max-h-96"
          />
        </div>
      );

    case 2:
      return (
        <div className="mt-4 grid grid-cols-2 gap-1">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Post content ${index + 1}`}
              className="w-full h-72 object-cover rounded-lg"
            />
          ))}
        </div>
      );

    case 3:
      return (
        <div className="mt-4 grid grid-cols-2 gap-1">
          <img
            src={images[0]}
            alt="Post content 1"
            className="w-full h-[450px] object-cover rounded-lg"
          />
          <div className="grid grid-rows-2 gap-1">
            {images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Post content ${index + 2}`}
                className="w-full h-[224px] object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      );

    case 4:
      return (
        <div className="mt-4 grid grid-cols-2 gap-1">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Post content ${index + 1}`}
              className="w-full h-72 object-cover rounded-lg"
            />
          ))}
        </div>
      );

    default: // 5 or more images
      return (
        <div className="mt-4 grid grid-cols-2 gap-1">
          {images.slice(0, 2).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Post content ${index + 1}`}
              className="w-full h-72 object-cover rounded-lg"
            />
          ))}
          <div className="grid grid-cols-2 gap-1 col-span-2">
            {images.slice(2, 4).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Post content ${index + 3}`}
                className="w-full h-72 object-cover rounded-lg"
              />
            ))}
          </div>
          {images.length > 4 && (
            <div className="relative col-span-2">
              <img
                src={images[4]}
                alt={`Post content 5`}
                className="w-full h-72 object-cover rounded-lg brightness-50"
              />
              {images.length > 5 && (
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
                  +{images.length - 4}
                </div>
              )}
            </div>
          )}
        </div>
      );
  }
};

export default ImageGrid;
