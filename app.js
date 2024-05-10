// This is the main application logic
import { fetchUserData } from './api.js';

document.getElementById('fetchButton').addEventListener('click', async () => {
    const userInfo = document.getElementById('userInfo');
    userInfo.innerHTML = 'Loading...';

    const userData = await fetchUserData();
    if (userData) {
        userInfo.innerHTML = `<strong>Name:</strong> ${userData.name}<br>
                              <strong>Email:</strong> ${userData.email}<br>
                              <strong>City:</strong> ${userData.address.city}`;
    } else {
        userInfo.innerHTML = 'Failed to fetch user data.';
    }
});
