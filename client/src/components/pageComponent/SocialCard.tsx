import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TSocialCard } from "@/types/SocialCard";
import ImageGrid from "./ImageGrid";

const SocialCard = ({
  userName,
  userImage,
  createdAt,
  description,
  images,
}: TSocialCard) => {
  const fallBackImageName = userName
    .split(" ")
    .map((name) => name[0])
    .join("");

  const getTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else if (diffInDays === 1) {
      return "Yesterday";
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <Card className="max-w-xl w-full">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={userImage} alt="User" />
            <AvatarFallback>{fallBackImageName}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{userName}</p>
            <p className="text-sm text-gray-500">{getTimeAgo(createdAt)}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Save Post</DropdownMenuItem>
            <DropdownMenuItem>Hide Post</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content */}
      <CardContent className="p-4 pt-0">
        <p className="text-gray-700">{description}</p>
        <div>
          <ImageGrid images={images} />
        </div>
      </CardContent>

      {/* Engagement Stats */}
      <div className="px-4 py-2 border-t border-b">
        <div className="flex justify-between text-sm text-gray-500">
          <span>124 likes</span>
          <div>
            <span className="mr-3">18 comments</span>
            <span>3 shares</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <CardFooter className="p-2">
        <div className="flex justify-between w-full">
          <Button variant="ghost" className="flex-1">
            <Heart className="h-5 w-5 mr-2" />
            Like
          </Button>
          <Button variant="ghost" className="flex-1">
            <MessageCircle className="h-5 w-5 mr-2" />
            Comment
          </Button>
          <Button variant="ghost" className="flex-1">
            <Share2 className="h-5 w-5 mr-2" />
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SocialCard;
