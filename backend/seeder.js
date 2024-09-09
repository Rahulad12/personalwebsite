const mongoose = require('mongoose');

const dotenv = require('dotenv');
// const users = require('./data/users');
// const projects = require('./data/projects');
// const achievements = require('./data/achievements');

const User = require('./models/User');
const Project = require('./models/Project');
const Achievement = require('./models/Achievement');
const Certificate = require('./models/Certificate');
const Experience = require('./models/Experience');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

// const importData = async () => {
//     try {
//         await User.deleteMany();
//         await Project.deleteMany();
//         await Achievement.deleteMany();

//         const createdUsers = await User.insertMany(users);
//         const adminUser = createdUsers[0]._id;

//         const sampleProjects = projects.map((project) => {
//             return { ...project, user: adminUser };
//         });

//         const sampleAchievements = achievements.map((achievement) => {
//             return { ...achievement, user: adminUser };
//         });

//         await Project.insertMany(sampleProjects);
//         await Achievement.insertMany(sampleAchievements);

//         console.log('Data Imported!');
//         process.exit();
//     } catch (error) {
//         console.error(`${error}`);
//         process.exit(1);
//     }
// }

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Project.deleteMany();
        await Achievement.deleteMany();
        await Certificate.deleteMany();
        await Experience.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData();
} else {

    importData();
}
// Compare this snippet from backend/routes/projectRoutes.js: