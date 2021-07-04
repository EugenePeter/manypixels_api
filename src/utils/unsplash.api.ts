import { createApi } from "unsplash-js";
const { ACCESSKEY = "SPJJ-8NfD23MjpKbZcdMz-aa6PiwUJoiHHISuaMTn04" } = process.env;
import fetch from "node-fetch";

const unsplash = createApi({
    accessKey: ACCESSKEY,
    fetch,
});

// const browserApi = createApi({
//     apiUrl: "https://mywebsite.com/unsplash-proxy",
//     //...other fetch options
// });
export const getAllPhotos = async (data: any) => {
    console.log("DATA:", data);
    try {
        const result = await unsplash.photos.getRandom({
            featured: true,
            count: 10,
        });
        console.log("type:", typeof result);
        if (result.errors) return;
        return result.response;
    } catch (error) {
        console.log("FETCH ABORTED", error);
        return "HAHAHAH";
    }
};
