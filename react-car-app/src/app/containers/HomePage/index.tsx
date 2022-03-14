import styled from "styled-components";
import tw from "twin.macro";
import Nabvar from "app/components/navbar";
import BookCard from "app/components/bookCard";
import Marginer from "app/components/marginer";
import BookingSteps from "app/containers/HomePage/bookingSteps";
import TopSection from "app/containers/HomePage/topSections";
import AboutUs from "app/containers/HomePage/aboutUs";
import TopCars from "app/containers/HomePage/topCars";
import Footer from "app/components/footer";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export default function HomePage() {
  return (
    <PageContainer>
      <Nabvar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}
