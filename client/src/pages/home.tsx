import SocialCard from "@/components/pageComponent/SocialCard";
import { TSocialCard } from "@/types/SocialCard";
const IMAGE_URL =
  "https://plus.unsplash.com/premium_photo-1695477212027-99ede031f04a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzYXN0ZXJ8ZW58MHx8MHx8fDA%3D";

const samplePosts: TSocialCard[] = [
  {
    userName: "Sarah Johnson",
    userImage: "/api/placeholder/32/32",
    createdAt: new Date("2024-03-20T10:30:00"),
    images: [IMAGE_URL, IMAGE_URL, IMAGE_URL, IMAGE_URL],
    description:
      "Just completedmy morning hike! The view from the top was absolutely worth every step. 🏃‍♀️🌄 #MorningHike #Nature",
  },
  {
    userName: "Alex Chen",
    userImage: "/api/placeholder/32/32",
    createdAt: new Date("2024-03-20T09:15:00"),
    images: [IMAGE_URL, IMAGE_URL, IMAGE_URL],
    description:
      "Excited to share that I've just joined the team at TechCorp! Looking forward to this new chapter. 🚀 #NewBeginnings",
  },
  {
    userName: "Maria Garcia",
    userImage: "/api/placeholder/32/32",
    createdAt: new Date("2024-03-19T18:45:00"),
    images: [IMAGE_URL, IMAGE_URL],
    description:
      "Made my grandmother's secret pasta recipe today. Some traditions are just too good not to share! 🍝 #Cooking #FamilyRecipes",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col gap-2 text-xl bg-red-300">
      {samplePosts.map((item, i) => (
        <SocialCard
          key={i}
          createdAt={item.createdAt}
          images={item.images}
          description={item.description}
          userImage={item.userImage}
          userName={item.userName}
        />
      ))}
    </div>
  );
};

export default Home;
