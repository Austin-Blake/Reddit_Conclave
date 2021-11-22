export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
  
};

export const getSearchResults = async (term) => {
  const response = await fetch(`${API_ROOT}/search.json?q=${term}`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
  
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};

export const dateCalculator = (created) => {
  const currentDate = Date.now();
  const postDate = new Date(created * 1000);

  const dateDifferenceInTime = currentDate - postDate;

  const dateDifferenceInMonths = dateDifferenceInTime / (1000 * 3600 * 24 * 30.4);
  const dateDifferenceInDays = dateDifferenceInTime / (1000 * 3600 * 24);
  const dateDifferenceInHours = dateDifferenceInTime / (1000 * 3600);
  const dateDifferenceInMinutes = dateDifferenceInTime / (1000 * 60);

  if (dateDifferenceInMonths > 12) {
    return "more than a year ago";
  } else if (dateDifferenceInMonths >= 1) {
    return Math.round(dateDifferenceInMonths) + " months ago";
  } else if (dateDifferenceInDays >= 1) {
    return Math.round(dateDifferenceInDays) + " days ago";
  } else if (dateDifferenceInHours >= 1) {
    return Math.round(dateDifferenceInHours) + " hours ago";
  } else if (dateDifferenceInMinutes >= 1) {
    return Math.round(dateDifferenceInMinutes) + " minutes ago";
  } else {
    return "less than a minute ago";
  }
};

