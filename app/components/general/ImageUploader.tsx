"use client";

import React, { useState } from "react";
import { supabase } from "@/libs/supabaseClient";

interface ImageUploaderProps {
  onImageUpload: (url: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("Fayl seçin");
      return;
    }

    setUploadStatus("Yüklənir...");
    const fileName = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("product-images")
      .upload(`products/${fileName}`, file);

    if (error) {
      setUploadStatus("Yükləmə uğursuz oldu");
      console.error("Error uploading image:", error.message);
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("product-images")
      .getPublicUrl(`products/${fileName}`);

    setUploadStatus("Yükləmə tamamlandı");
    onImageUpload(publicUrl || "");
  };

  return (
    <div className="flex flex-col gap-2 my-4 ">
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Yüklə
      </button>
      {uploadStatus && (
        <div className="font-medium text-sm">{uploadStatus}</div>
      )}
    </div>
  );
};
export default ImageUploader;
