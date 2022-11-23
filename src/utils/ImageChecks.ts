import fs from "fs";
import { Request, Response } from "express";

export const cachedPaths = (req: Request, res: Response): void => {
  const directory = process.env.OUTPUTDIR as string;
  const data = fs.readdirSync(directory);

  const cache = data.map((d) => {
    return `${process.env.SERVER}/api/cache/${d}`;
  });

  res.status(200).send({
    cache,
  });
};
