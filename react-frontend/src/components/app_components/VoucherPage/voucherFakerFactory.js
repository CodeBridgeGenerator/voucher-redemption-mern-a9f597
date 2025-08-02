
import { faker } from "@faker-js/faker";
export default (user,count,categoryIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
id: faker.lorem.sentence(1),
categoryId: categoryIdIds[i % categoryIdIds.length],
title: faker.lorem.sentence(1),
image: faker.lorem.sentence(1),
points: faker.lorem.sentence(1),
description: faker.lorem.sentence(1),
termsAndCondition: faker.lorem.sentence(1),
isActive: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
