import ImageZoomer from "./ImageZoomer";

const App = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-12">Image Zoomer</h1>

      <div className="w-56 flex">
        <ImageZoomer
          imageSrc="https://raw.githubusercontent.com/barajasss/image-zoomer/refs/heads/main/oranges.jpg"
          imageAlt=""
        />
      </div>
    </div>
  );
};

export default App;
