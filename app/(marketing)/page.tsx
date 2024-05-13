import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-5 md:p-24">
      {" "}
      {/* Adjust padding for different screen sizes */}
      <p className="text-center text-justify max-w-lg md:max-w-none decoration-solid">
        {" "}
        {/* Limit text width on larger screens */}
        TechoWoozy is a prominent software development and digital solutions
        agency committed to empowering businesses to excel in the dynamic
        digital realm. With a seasoned team of experts and a fervor for
        pioneering solutions, we excel in delivering customized software support
        to guarantee flawless operations. Additionally, our proficiency extends
        to crafting cutting-edge digital marketing strategies tailored to meet
        the distinct requirements of our clientele. At EchoWoozy, we are
        dedicated to driving success and fostering growth through innovative
        technologies and strategic digital initiatives.
      </p>
      <Button className="mt-4" variant="custom">
        Read more
      </Button>
    </main>
  );
}
