export const artist_resolvers = {
    Query: {
        getAllPhotos: async (_: any, __: any, context: any) => {
            const { all_photos } = context;
            try {
                const results = await all_photos();
                return results;
            } catch (e) {
                console.log("ERROR ______@@@@@@", e);
            }
        },
        getAllArtist: async (_: any, __: any, context: any) => {
            const { photos } = context;
            try {
                const results = await photos("test");
                return results;
            } catch (e) {
                console.log("ERROR ______@@@@@@", e);
            }
        },

        getArtistByID: async (parent: any, { user_id }: any, { db }: any) => {
            try {
                const result = await db.getAll(user_id, { index: "user_id" });
                return result[0];
            } catch (e) {
                console.log("ERROR ______@@@@@@", e);
            }
        },
    },
};
