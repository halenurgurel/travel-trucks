import Button from "../components/Button";
import hero from "../assets/hero.png";

const HomePage = () => {
  return (
    <div className="relative">
      <img
        src={hero}
        alt="Hero Picture"
        className="h-screen w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center gap-10 px-15">
        <div className="gap- flex flex-col gap-2">
          <h1 className="text-bg-lighter text-2xl font-semibold md:text-4xl lg:text-5xl">
            Campers of your dreams
          </h1>
          <h3 className="text-bg-lighter text-lg font-semibold md:text-xl lg:text-2xl">
            You can find everything you want in our catalog
          </h3>
        </div>
        <Button to="/catalog" className="w-fit text-lg">
          View Now
        </Button>
      </div>
    </div>
  );
};
export default HomePage;
