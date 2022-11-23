import fs from "fs";

export const fileExists = async (filePath: string): Promise<boolean> => {
  return fs.existsSync(filePath);
};
