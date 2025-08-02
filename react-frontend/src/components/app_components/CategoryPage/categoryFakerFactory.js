
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
id: faker.lorem.sentence(""),
name: faker.lorem.sentence(""),
image: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
