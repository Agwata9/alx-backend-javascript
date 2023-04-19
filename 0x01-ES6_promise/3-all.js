import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}
