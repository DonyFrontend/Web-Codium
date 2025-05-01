const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center border-t border-white shadow-neon bg-black p-3">
      <p className="font-medium">
        Thank you for reading this information. © CollabX, All rights reserved |{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export { Footer };
