"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultProfile = {
    id: null,
    name: null,
    pic: "https://i.imgur.com/0ROzKWN.png",
};
function createProfile(data) {
    return {
        id: data.uid || data.user_id || exports.DefaultProfile.id,
        name: data.displayName || data.name || exports.DefaultProfile.name,
        pic: data.photoURL || data.picture || exports.DefaultProfile.pic,
    };
}
exports.createProfile = createProfile;
//# sourceMappingURL=profile.model.js.map