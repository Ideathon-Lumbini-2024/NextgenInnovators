import SocialCard from "@/components/pageComponent/SocialCard";
import { TSocialCard } from "@/types/SocialCard";
import flood from "@/assets/Nepal-feat.jpg";
import earthqk from "@/assets/earthqk.jpeg";
import disaster from "@/assets/disaster.jpg";
import flood2 from "@/assets/flood2.jpg";
import flood3 from "@/assets/flood3.jpg";
import flood4 from "@/assets/flood4.webp";

const IMAGE_URL =
  "https://plus.unsplash.com/premium_photo-1695477212027-99ede031f04a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzYXN0ZXJ8ZW58MHx8MHx8fDA%3D";

const samplePosts: TSocialCard[] = [
  {
    userName: "Kamal Thapa",
    userImage: "/api/placeholder/32/32",
    createdAt: new Date("2024-03-20T10:30:00"),
    images: [flood, IMAGE_URL],
    description:
      "Help Disaster Relief for Nepal Landslide Victims Landslide. 🙏 #Nepal #DisasterRelief #LandslideVictims",
  },
  {
    userName: "Sushant Shrestha",
    userImage: "/api/placeholder/32/32",
    createdAt: new Date("2024-03-20T09:15:00"),
    images: [flood4, flood3, flood2],
    description:
      "The floods in Nepal have displaced hundreds of families and destroyed homes. 🏠 #NepalFloods #ReliefEfforts",
  },
  {
    userName: "Adarsh Kunwar",
    userImage: "/api/placeholder/32/32",
    createdAt: new Date("2024-03-19T18:45:00"),
    images: [earthqk, disaster],
    description:
      "Nepal’s earthquake victims need urgent medical supplies and assistance. 🚑 #NepalEarthquake #SupportNepal",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col gap-2 text-xl place-items-center mt-24">
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
