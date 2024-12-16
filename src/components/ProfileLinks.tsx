import { ProfileButton } from "@/components/ProfileButton";

const ProfileLinks = () => {
  return (
    <ul className="flex flex-col gap-5">
      <li>
        <ProfileButton href="https://github.com/BishoyGH/">
          GitHub
        </ProfileButton>
      </li>
      <li>
        <ProfileButton href="https://www.frontendmentor.io/profile/BishoyGH">
          Frontend Mentor
        </ProfileButton>
      </li>
      <li>
        <ProfileButton href="https://www.linkedin.com/in/bishoygamal/">
          LinkedIn
        </ProfileButton>
      </li>
      <li>
        <ProfileButton href="https://x.com/">Twitter</ProfileButton>
      </li>
      <li>
        <ProfileButton href="https://www.instagram.com/_bishoygh/">
          Instagram
        </ProfileButton>
      </li>
    </ul>
  );
};
export default ProfileLinks;
