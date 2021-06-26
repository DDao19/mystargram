import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images"); //listens to the collection in the databse and return any docs we have
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={doc.id}>
            <img src={doc.url} alt="user photo" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
