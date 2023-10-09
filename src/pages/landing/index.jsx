import About from "src/components/about";
import Entertainment from "src/components/entertainment";
import FilterSection from "src/components/filter-section";
import Recommendation from "src/components/recommendation";


export default function Landing() {
    return (
        <>
            <FilterSection/>
            <Recommendation/>
            <Entertainment/>
            <About/>
        </>
    )
}