export const urlToFile = async (url: RequestInfo, defaultFilename: string) => {
  const response = await fetch(url);
  const blob = await response.blob();

  const mimeType = blob.type;
  const extensionMap: Record<string, string> = {
    "image/png": ".png",
    "image/jpeg": ".jpg",
    "image/jpg": ".jpg",
    "image/gif": ".gif",
    "image/webp": ".webp",
    "image/svg+xml": ".svg",
  };

  const extension = extensionMap[mimeType];
  if (!extension) {
    throw new Error("Unsupported file type");
  }

  const filename = defaultFilename + extension;
  return new File([blob], filename, { type: mimeType });
};
