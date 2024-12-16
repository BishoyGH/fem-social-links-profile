import ProfileLinks from "@/components/ProfileLinks";
import avatarImg from "./assets/images/avatar-jessica.jpeg";

export default function App() {
  return (
    <main className="min-h-screen bg-grey-900 font-Inter text-white md:p-16">
      <article className="mx-auto max-w-xl rounded-2xl bg-grey-800 p-12 text-center leading-6">
        <img
          src={avatarImg}
          alt="Picture of Jessica Randall"
          className="mx-auto size-32 rounded-full"
        />
        <h1 className="mb-1 mt-6 text-3xl font-semibold">Jessica Randall</h1>
        <p className="font-semibold text-green">London, United Kingdom</p>
        <p className="my-4">"Front-end developer and avid reader."</p>
        <ProfileLinks />
      </article>
    </main>
  );
}
