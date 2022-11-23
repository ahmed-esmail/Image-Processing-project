import { Request, Response } from 'express';

import path from 'path';
import { fileExists } from "../utils/FileExists";
import { resizeImage } from "../utils/ResizeImage";

const processImage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { filename, width, height } = req.query;

    const qFileName: string = filename as unknown as string;
    const qHeight: number | null = height
      ? parseInt(height as string, 10)
      : null;
    const qWidth: number | null = width ? parseInt(width as string, 10) : null;

    const options = {
      root: path.join('./output'),
    };

    const imgPath = `${qFileName}.png`;
    const resizedImgFileName = `resized-${qFileName}${qWidth}x${qHeight}.png`;
    const isImageExists = await fileExists(path.join('./images', imgPath));

    const resizedImgExists = await fileExists(
      path.join('./output', resizedImgFileName)
    );

    if (resizedImgExists) {
      res
        .status(200)
        .sendFile(
          `resized-${qFileName}${qWidth}x${qHeight}.png`,
          options,
          (err) => {
            if (err) console.log(err);
          }
        );
    }

    if (isImageExists) {
      await resizeImage(
        imgPath,
        qWidth as number,
        qHeight as number,
        qFileName
      );
      res
        .status(200)
        .sendFile(`resized-${qFileName}${qWidth}x${qHeight}.png`, options, (err) => {
          if (err) console.log(err);
        });
    } else {
      res.status(400).send(`image not found`);
    }
  } catch (e) {
    res.status(500).send('error happened while processing your request');
    console.log(e);
  }
};

export { processImage };
