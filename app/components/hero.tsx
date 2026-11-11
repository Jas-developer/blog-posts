import Image from "next/image";
import profileImage from "../images/profile-image.png"

export  function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>
        Hi, I'm Jason! Welcome to my blog.
      </h1>
      <p className="text-lg text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam praesentium perspiciatis, ab sit tempore maxime accusantium officiis quisquam laboriosam quos temporibus veritatis. Vel, fuga! Quaerat quia nulla perferendis ipsum laboriosam?
      </p>
      <Image
        src={profileImage}
        width={500}
        height={200}
        placeholder="blur"
        loading="eager"
        alt="Profile image of Jason"
      />
    </section>
  );
}