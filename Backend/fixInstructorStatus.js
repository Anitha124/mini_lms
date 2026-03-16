
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

async function fixInstructor() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Find all instructors and set their status to approved if they are pending
        const instructors = await User.find({ role: 'instructor' });
        console.log(`Found ${instructors.length} instructors.`);

        for (let instructor of instructors) {
            if (instructor.status !== 'approved' && instructor.status !== 'active') {
                console.log(`Updating instructor: ${instructor.email} (Current status: ${instructor.status})`);
                instructor.status = 'approved';
                await instructor.save();
                console.log(`Updated ${instructor.email} to 'approved'`);
            } else {
                console.log(`Instructor ${instructor.email} is already ${instructor.status}`);
            }
        }

        console.log('Done!');
        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

fixInstructor();
