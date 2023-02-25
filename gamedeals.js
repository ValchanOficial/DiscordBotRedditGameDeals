import axios from "axios";

export default async function getGameDealsPosts() {
  const {
    data: { data: redditData },
  } = await axios.get(
    "https://www.reddit.com/r/GameDeals/new.json?sort=new&limit=5"
  );

  const posts = redditData.children;

  if (!posts) return;

  return posts.map((post) => ({
    title: post.data.title,
    url: post.data.url,
    link: "https://www.reddit.com" + post.data.permalink,
  }));
}
