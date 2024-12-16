import { ProfileButton } from "@/components/ProfileButton";

const ProfileLinks = () => {
  return (
    <ul className="flex flex-col gap-5">
      <li>
        <ProfileButton href="#">GitHub</ProfileButton>
      </li>
      <li>
        <ProfileButton href="#">Frontend Mentor</ProfileButton>
      </li>
      <li>
        <ProfileButton href="#">LinkedIn</ProfileButton>
      </li>
      <li>
        <ProfileButton href="#">Twitter</ProfileButton>
      </li>
      <li>
        <ProfileButton href="#">Instagram</ProfileButton>
      </li>
    </ul>
  );
};
export default ProfileLinks;
