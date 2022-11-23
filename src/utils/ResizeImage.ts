import sharp from "sharp";

export const resizeImage = async (
  imgPath: string,
  width: number,
  height: number,
  fileName: string
): Promise<void> => {
  try {
    await sharp(`images/${imgPath}`)
      .resize(width, height)
      .png()
      .toFile(`output/resized-${fileName}${width}x${height}.png`);
  } catch (err) {
    console.log("Invalid parameters");
  }
};
