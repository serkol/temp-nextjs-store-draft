import { User2, Users2 } from "lucide-react";
import { currentUser, auth } from "@clerk/nextjs/server";

async function UserIcon() {
  // if only id is needed:
  // const { userId } = await auth();

  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  }
  return <User2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
