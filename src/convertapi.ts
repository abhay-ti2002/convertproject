import ConvertApi from "convertapi-js";

const convertApi = ConvertApi.auth("LkbmwhDtf4KfOZXT");

const converfile = async (file: File, fromFormat: string, toFormat: string) => {
  // console.log(file);
  try {
    const params = convertApi.createParams();
    params.add("file", file);
    params.add("conversion", fromFormat);

    const result = await convertApi.convert(fromFormat, toFormat, params);

    return result;
  } catch (error) {
    console.error("conversion", error);
    throw error;
  }
};

export default converfile;
