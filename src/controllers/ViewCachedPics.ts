import { Response, Request, NextFunction } from 'express';
import path from 'path';
import { fileExists } from "../utils/FileExists";

const ViewCachedPics = async (req: Request, res: Response): Promise<void> => {
  const resizedImg = req.params.fileName as string;

  const resizedImgExists = await fileExists(path.join('./output', resizedImg));

  const options = {
    root: path.join(),
  };

  if (resizedImgExists) {
    res.contentType('image/png');
    res
      .status(200)
      .sendFile(path.join('./output', resizedImg), options, (err) => {
        if (err) console.log(err);
      });
  }
};

export { ViewCachedPics };
