"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
let salt = 5;

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: "0c80a08c-9f64-4ceb-9132-279ab9ad2c6e",
        firstName: "Default",
        lastName: "Admin",
        phoneNumber: "0321222112",
        gender: 1,
        password: await hashUserPassword("123"),
        address: "QN",
        status: 1,
        roleID: 1,
        email: "admin@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "7f257daa-4154-4a25-adda-0f7754e9efa0",
        firstName: "Default",
        lastName: "User",
        phoneNumber: "0123211",
        gender: 1,
        password: await hashUserPassword("123"),
        address: "",
        status: 1,
        roleID: 3,
        email: "user@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "364ddd65-7985-439f-93f4-05bc242bb42a",
        firstName: "Nhan",
        lastName: "Dang",
        phoneNumber: "0775574221",
        gender: 1,
        password: await hashUserPassword("123"),
        address: "Danang, Vietnam",
        status: 1,
        roleID: 3,
        image: "de00ac95c79f62b2fd0fdf49bd47820b",
        email: "user2@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: "af3a5b71-9aab-4ea7-8ce8-13103e7414c3",
        firstName: "Mark",
        lastName: "Lee",
        phoneNumber: "089846798",
        gender: 1,
        password: await hashUserPassword("123"),
        address: "Hanoi, Vietnam",
        status: 1,
        roleID: 2,
        image: "62028ce25ab60088770b5ec56c723b33",
        email: "doctor@gmail.com",
        clinicID: "26d30a14-dadf-49fe-a168-bd4efb5ea97b",
        resumeID: "4f382500-8696-4d34-b025-39e0a598cfc6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "d19e6ccc-5b7d-4a8d-8abd-c9ac5b544a5b",
        firstName: "John",
        lastName: "David",
        phoneNumber: "0218897388 ",
        gender: 1,
        password: await hashUserPassword("123"),
        address: "Ho Chi Minh, Vietnam",
        status: 1,
        roleID: 2,
        email: "doctor2@gmail.com",
        image: "b33194133acae0e1cf9c530146b41d4e",
        clinicID: "5cb5fa00-4bd6-40ac-a1c6-0b32b789cabc",
        resumeID: "210a9909-ca28-48b3-b8bf-8fc98cbc3e81",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "056d9b51-1719-4522-8102-37654b2a32d5",
        firstName: "Huynh",
        lastName: "Tran",
        phoneNumber: "0838433832",
        gender: 2,
        password: await hashUserPassword("123"),
        address: "Quang Nam, Vietnam",
        status: 1,
        roleID: 2,
        image: "2cd4b6deefc9fc1e511af8ec2a4eacfb",
        clinicID: "a97e854d-42fe-466f-b077-5194a4ff4bd6",
        resumeID: "3da7f630-67e4-4855-8b58-71619563befc",
        email: "doctor3@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "e9e46bca-00d6-4b7b-93e3-078e0007d178",
        firstName: "Nhi",
        lastName: "Phan",
        phoneNumber: "0462701478",
        gender: 2,
        password: await hashUserPassword("123"),
        address: "Danang, Vietnam",
        status: 1,
        roleID: 2,
        image: "3b391964ee920a66d9138557ac8c99af",
        clinicID: "d5b8918c-eb82-455a-a1dd-f99c28df5d17",
        resumeID: "90c77b8d-52a1-4cd7-97e2-dd1e4752b5a1",
        email: "doctor4@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "baa5d8cf-33d1-4083-8fb0-7a853339609b",
        firstName: "Emma",
        lastName: "Finley",
        phoneNumber: "0763949122 ",
        gender: 2,
        password: await hashUserPassword("123"),
        address: "Quang Nam, Vietnam",
        status: 1,
        roleID: 2,
        email: "doctor5@gmail.com",
        image: "ffd9ef57389c1f49b26f6f95c594f8d8",
        clinicID: "d5b8918c-eb82-455a-a1dd-f99c28df5d17",
        resumeID: "9b46672e-1483-43ea-9892-66ddfddfbeba",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "d3b5ffe3-57c2-4de1-8710-bd703be5fba7",
        firstName: "Viet",
        lastName: "Nguyen",
        phoneNumber: "0613995981 ",
        gender: 1,
        password: await hashUserPassword("123"),
        address: "Hanoi, Vietnam",
        status: 1,
        roleID: 2,
        email: "vietnguyen@gmail.com",
        image: "347047f3f39bb1834b1ac7d55925545f",
        clinicID: "5cb5fa00-4bd6-40ac-a1c6-0b32b789cabc",
        resumeID: "c1972883-9bd8-4996-882e-0cd6353b09cd",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "39d76f38-4123-4c04-80ba-500ad103bc84",
        firstName: "Khurshid",
        lastName: "Porsche",
        phoneNumber: "0839235343 ",
        gender: 2,
        password: await hashUserPassword("123"),
        address: "Thanh Hoa, Vietnam",
        status: 1,
        roleID: 2,
        email: "khurshidporsche@gmail.com",
        image: "7ac72b59328a2aec7e26fee31dbcb57f",
        clinicID: "26d30a14-dadf-49fe-a168-bd4efb5ea97b",
        resumeID: "d808d1a2-9453-4529-b196-36b3147477c6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
