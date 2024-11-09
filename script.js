function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); //delay function
}

async function profileData() {
    console.log('Fetching user data...');
    await delay(1000);
    console.log('User data fetched!');
    
}
async function postData() {
    console.log('Fetching posts...');
    await delay(2000);
    console.log('Posts fetched!');
    
}
async function commentData() {
    console.log('Fetching comments...');
    await delay(3000);
    console.log('Comments fetched!');
    
}


async function fetchProfileData() {
  try {
    console.log('Fetching user data...');
    await delay(1500);
    let fetchProfile = false; //simulating failed operation
    if (fetchProfile) {
      console.log("Profile data fetched!")
    } else {
      throw new Error("Error retrieving profile data.");
    }
  } catch (error) {
    console.error(error.message);
  }
}
async function fetchPosts() {
  try {
    console.log('Fetching posts...');
    await delay(2500);
    let fetchPosts = true; 
    if (fetchPosts) {
      console.log("Posts fetched!")
    } else {
      throw new Error("Error retrieving posts.");
    }
  } catch (error) {
    console.error(error.message);
  }
}
async function fetchComments() {
  try {
    console.log('Fetching comments...');
    await delay(3500);
    let fetchComments = true; 
    if (fetchComments) {
      console.log("Comments fetched!")
    } else {
      throw new Error("Error retrieving comments.");
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function getUserContent() {
  try {
    let userDataFetch = true;
    let postFetch = true;
    let commentFetch = true;

    console.log('Fetching data...');
    await delay(1750);
    if (userDataFetch) {
      console.log("User data fetched!")
    } else {
      throw new Error("Error retrieving comments.");
    }
    await delay(2750);
    if (postFetch) {
      console.log("Post data feteched!")
    } else {
      throw new Error("Error retrieving posts.");
    }
    await delay(3750);
    if (commentFetch) {
      console.log("Comment data retrieved!");
    }
  } catch (error) {
      console.error(error.message);
    }
}



fetchProfileData();
fetchPosts();
fetchComments();

profileData();
postData();
commentData();

getUserContent();