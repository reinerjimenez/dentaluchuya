import CityPage, { cityMetadata } from "../CityPage";

export const metadata = cityMetadata("tingo-maria");

export default function Page() {
  return <CityPage slug="tingo-maria" />;
}
