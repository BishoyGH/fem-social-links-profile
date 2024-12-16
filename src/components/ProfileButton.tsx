interface ProfileButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ProfileButton: React.FC<ProfileButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <a
      target="_blank"
      className="block rounded-xl bg-grey-700 py-3 font-bold hover:bg-green hover:text-grey-900 active:bg-green/75"
      {...props}
    >
      {children}
    </a>
  );
};
