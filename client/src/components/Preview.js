function Preview({ file }) {
    return (
      <div className="w-56">
        <figure className="flex flex-col justify-center">
          <img
            className="w-56 h-56"
            src={file.preview}
            alt={file.name}
            id="image"
          />
          <figcaption className="text-center">
            {file.name}
          </figcaption>
        </figure>
      </div>
    )
  }
  
  export default Preview
  