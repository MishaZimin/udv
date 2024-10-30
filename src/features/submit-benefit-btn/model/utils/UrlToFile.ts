export const urlToFile = async (url: RequestInfo, defaultFilename: string) => {
  const response = await fetch(url);
  const blob = await response.blob();

  const mimeType = blob.type;
  let extension = "";
  if (mimeType === "image/png") {
    extension = ".png";
  } else if (mimeType === "image/svg+xml") {
    extension = ".svg";
  } else {
    throw new Error("Unsupported file type");
  }

  const filename = defaultFilename + extension;
  return new File([blob], filename, { type: mimeType });
};
