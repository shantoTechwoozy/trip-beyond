// import Footer from "./footer";
import Header from "./header/page";

type Props = {
  children: React.ReactNode;
};

const Marketinglayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      {/* <Footer/> */}
    </div>
  );
};
export default Marketinglayout;
<main></main>;
