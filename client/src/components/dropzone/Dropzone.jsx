import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDropzone } from "react-dropzone";
import styles from "./Dropzone.module.css";
import { toast } from "react-toastify";

const MyDropzone = () => {
   const [files, setFiles] = useState([]);

   const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
      if (acceptedFiles) {
         setFiles((prevFiles) => [
            ...prevFiles,
            ...acceptedFiles.map((file) =>
               Object.assign(file, { preview: URL.createObjectURL(file) }),
            ),
         ]);
      }

      if (rejectedFiles.length > 0) {
         const errorCode = rejectedFiles[0].errors[0].code;

         if (errorCode === "too-many-files") {
            toast.error("Maximo de archivos es 10");
         } else if (errorCode === "file-too-large") {
            toast.error("Tamaño limite es 20 MB");
         } else {
            toast.error("Error al subir imagen");
         }
      }
   }, []);

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      maxFiles: 10,
      maxSize: 20 * 1024 * 1024, // 20 MB
      accept: {
         "image/png": [".png"],
         "image/jpeg": [".jpg", ".jpeg"],
      },
   });

   const removeFile = (name) => {
      setFiles((files) => files.filter((file) => file.name !== name));
   };

   // useEffect(() => {
   //    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
   // }, [files]);

   return (
      <>
         <div {...getRootProps()} className={styles.container}>
            <input {...getInputProps()} />
            {isDragActive ? (
               <p>Suelta los archivos aqui...</p>
            ) : (
               <>
                  <p>Arrastra o haz clic para subir tus imagenes</p>
                  <p className={styles.span}>Tamaño maximo por imagen: 20 MB</p>
               </>
            )}
         </div>
         {files.length > 0 && (
            <div className={styles.imgArray}>
               {files.map((file, i) => (
                  <div key={i} className={styles.imgContainer}>
                     <button
                        onClick={() => removeFile(file.name)}
                        className={styles.removeBtn}
                     >
                        <FontAwesomeIcon icon="fa-solid fa-xmark" />
                     </button>
                     <img
                        src={file.preview}
                        alt={file.name}
                        // onLoad={() => {
                        //    URL.revokeObjectURL(file.preview);
                        // }}
                     />
                  </div>
               ))}
            </div>
         )}
      </>
   );
};

export default MyDropzone;
