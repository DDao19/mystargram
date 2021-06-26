import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    //We're retreiving the documents once a file is uploaded and any new file uploaded thereafter
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((docs) => {
          documents.push({ ...docs.data(), id: docs.id });
        });
        setDocs(documents);
      });

    return () => unsub(); //cleanup function
  }, [collection]);

  return { docs };
};

export default useFirestore;
