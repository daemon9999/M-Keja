import About from "src/components/about";
import AgentForm from "src/components/agent-form";
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
            <AgentForm/>
        </>
    )
}