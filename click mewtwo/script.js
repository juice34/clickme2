// Get the button and picture container
const button = document.getElementById('showPicButton');
const picContainer = document.getElementById('picContainer');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Create an image element and set the picture URL
    const picture = document.createElement('img');
    picture.src = 'https://scontent.fmnl17-5.fna.fbcdn.net/v/t1.15752-9/480390704_9191823194234826_7004277293075633884_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFIM2Es1Mh3ZnuBZPoelqijYD6W8Eg4GnJgPpbwSDgaciFynIcaIIOY73T5Ebkj9CieDTA3bsmCASibCb-VKiGn&_nc_ohc=fRxR004EwuIQ7kNvgEkBCqr&_nc_oc=AdjGdcueo7FnLsJWvnDu5ebPhEhyRC3s0u4NHeJqyM2h5ffDHw573DnVdEIy-cdgvi4&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&oh=03_Q7cD1gHy9KNTLicKDZMtKhJNv1On7enimtTney7jXr9dSj8tWQ&oe=67DF6649&dl=1'; // Example picture URL
    picture.alt = 'Sample Picture';
    picture.classList.add('pic-img');

    // Clear any existing content and append the new picture
    picContainer.innerHTML = ''; // Clear existing picture
    picContainer.appendChild(picture);
    
    // Display the picture container
    picContainer.style.display = 'block';
});
